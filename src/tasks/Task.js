import {registerUserInterfaceAware, UserInterfaceAware} from '../UserInterfaceAware'
import {findFirstObject} from '../Objects'
import {Character} from '../character/Character'
import {coloredNumber, today} from '../util'

export class Task extends UserInterfaceAware {

    userInterface = ['name', 'hp', 'ep', 'complete', 'destroy']
    name

    _hp = 0
    get hp() {
        return coloredNumber(this._hp)
    }

    _ep = 0
    get ep() {
        return coloredNumber(this._ep)
    }

    get completed() {
        return {
            toString: () => 'done',
            color: 'green',
        }
    }

    constructor(name, hp, ep) {
        super()
        this.name = name
        this._hp = hp
        this._ep = ep

        this.undo.danger = true
        this.undo.setting = true
    }

    complete() {
        const character = findFirstObject(Character)

        if (character) {
            character.changeHpBy(this.hp)
            character.changeEpBy(this.ep)

            this.markAsCompleted()
        }
    }

    markAsCompleted() {
        this.completedAt = today()
        this.replaceCompleteWithCompleted()
    }

    replaceCompleteWithCompleted() {
        let indexOfComplete = this.userInterface.indexOf('complete')
        this.userInterface.splice(indexOfComplete, 1, 'completed', 'completedAt', 'undo')
    }

    replaceCompletedAtWithComplete() {
        this.replaceCompletedWithComplete()
        this.removeUserInterface('completedAt')
        this.removeUserInterface('undo')
    }

    removeUserInterface(s) {
        let index = this.userInterface.indexOf(s)
        if (index >= 0) this.userInterface.splice(index, 1)
    }

    replaceCompletedWithComplete() {
        let index = this.userInterface.indexOf('completed')
        if (index >= 0) this.userInterface.splice(index, 1, 'complete')
    }

    updateAfterLoad() {
        if (this.completedAt === today()) {
            this.replaceCompleteWithCompleted()
        }
    }

    undo(reason) {
        if (reason.length < 10) {
            console.log('You need to provide a good reason to undo the task')
            return
        }

        const character = findFirstObject(Character)
        character.changeHpBy(-this.hp)
        character.changeEpBy(-this.ep)
        this.unComplete()
    }

    unComplete() {
        this.completedAt = ''
        this.replaceCompletedAtWithComplete()
    }
}

registerUserInterfaceAware(Task)