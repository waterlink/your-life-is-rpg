import {applicationObjects} from './Objects'
import {renderAll} from './Rendering'

export const userInterfaceAwareClasses = []

export class UserInterfaceAware {

    defaultUserInterface = ['object']
    userInterface = []

    constructor() {
        if (userInterfaceAwareClasses.indexOf(this.constructor) < 0) {
            throw new Error(
                `You forgot to register a user interface aware class ${this.constructor.name}`)
        }

        this.object = this.constructor.name
        this.destroy.danger = true
        this.destroy.setting = true
    }

    /**
     * @return {Array<String>}
     */
    obtainAllUserInterface() {
        return this.defaultUserInterface.concat(this.userInterface)
    }

    destroy() {
        const index = applicationObjects().indexOf(this)
        if (index >= 0) {
            applicationObjects().splice(index, 1)
            renderAll()
        }
    }

    hideUserInterface() {
        this.hidden = true
    }

    showUserInterface() {
        this.hidden = false
    }

    updateAfterLoad() {}

}

export const registerUserInterfaceAware = aClass => {
    userInterfaceAwareClasses.push(aClass)
}