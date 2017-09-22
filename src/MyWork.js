import {registerUserInterfaceAware, UserInterfaceAware, userInterfaceAwareClasses} from './UserInterfaceAware'
import {applicationObjects, findFirstObject, initialObjects, updateApplicationObjects} from './Objects'
import {renderAll} from './Rendering'

export const convertRawTo = (raw, klass) => {
    const pristineObject = new klass()
    const target = new klass()

    try {
        Object.assign(target, raw)
    } catch (e) {
        console.error(e)
        return null
    }

    target.userInterface = pristineObject.userInterface
    target.object = pristineObject.object

    return target
}

const createObjectFromRaw = (rawObject) => {
    const className = rawObject.object
    const foundClass = userInterfaceAwareClasses.find(c => c.name === className)

    if (foundClass) {
        return convertRawTo(rawObject, foundClass)
    }

    return null
}

export class MyWork extends UserInterfaceAware {

    userInterface = ['save', 'settings', 'reload', 'importIt', 'reset']
    localStorageKey = 'MyWork.savedWork'
    settingsShown = true
    essential = 100
    export = ''

    constructor() {
        super()
        this.save.success = true
        this.reset.danger = true
        this.reload.setting = true
        this.reset.setting = true
        this.importIt.setting = true
        this.importIt.danger = true
    }

    save() {
        const data = JSON.stringify(applicationObjects())
        localStorage.setItem(this.localStorageKey, data)
    }

    importIt(data) {
        localStorage.setItem(this.localStorageKey, data)
        this.reload()
    }

    reload() {
        const data = localStorage.getItem(this.localStorageKey)
        if (data) {
            const rawObjects = JSON.parse(data)
            const objects = rawObjects
                .map(createObjectFromRaw)
                .filter(object => object !== null)

            updateApplicationObjects(objects)

            applicationObjects()
                .forEach(o => o.updateAfterLoad())

            findFirstObject(MyWork).restoreSettingsState()

            renderAll()
        }
    }

    reset() {
        updateApplicationObjects(initialObjects)
        renderAll()
    }

    settings() {
        if (this.settingsShown) {
            this.hideSettings()
        } else {
            this.showSettings()
        }
    }

    restoreSettingsState() {
        if (this.settingsShown) {
            this.showSettings()
        } else {
            this.hideSettings()
        }
    }

    hideSettings() {
        this.settingsShown = false

        applicationObjects()
            .filter(o => o.setting)
            .forEach(o => o.hideUserInterface())

        applicationObjects()
            .forEach(obj => {
                obj.obtainAllUserInterface()
                    .map(name => obj[name])
                    .filter(prop => prop.setting)
                    .forEach(prop => prop.hidden = true)
            })
    }

    showSettings() {
        this.settingsShown = true

        applicationObjects()
            .filter(o => o.setting || o.hidden)
            .forEach(o => o.showUserInterface())

        applicationObjects()
            .forEach(obj => {
                obj.obtainAllUserInterface()
                    .map(name => obj[name])
                    .filter(prop => prop.setting)
                    .forEach(prop => prop.hidden = false)
            })
    }
}

registerUserInterfaceAware(MyWork)