import {registerUserInterfaceAware, UserInterfaceAware, userInterfaceAwareClasses} from './UserInterfaceAware'
import {applicationObjects, findFirstObject, initialObjects, updateApplicationObjects} from './Objects'
import {renderAll} from './Rendering'

const createObjectFromRaw = (rawObject) => {
    const className = rawObject.object
    const foundClass = userInterfaceAwareClasses.find(c => c.name === className)

    if (foundClass) {
        const pristineObject = new foundClass()
        const target = new foundClass()

        try {
            Object.assign(target, rawObject)
        } catch (e) {
            console.error(e)
            return null
        }

        target.userInterface = pristineObject.userInterface

        return target
    }

    return null
}

export class MyWork extends UserInterfaceAware {

    userInterface = ['save', 'reload', 'settings', 'reset']
    localStorageKey = 'MyWork.savedWork'
    settingsShown = true

    constructor() {
        super()
        this.save.success = true
        this.reset.danger = true
        this.reload.setting = true
        this.reset.setting = true
    }

    save() {
        const data = JSON.stringify(applicationObjects())
        localStorage.setItem(this.localStorageKey, data)
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