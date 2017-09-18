import {registerUserInterfaceAware, UserInterfaceAware} from '../UserInterfaceAware'
import {findFirstObject} from '../Objects'
import {Character} from '../character/Character'

export class Task extends UserInterfaceAware {

    userInterface = ['name', 'hp', 'ep', 'complete', 'destroy']
    name

    _hp = 0
    get hp() {
        return this.parseNumber(this._hp)
    }

    _ep = 0
    get ep() {
        return this.parseNumber(this._ep)
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

    parseNumber(number) {
        //noinspection JSPrimitiveTypeWrapperUsage
        const result = new Number(parseFloat(number))

        if (number < 0) {
            //noinspection JSPrimitiveTypeWrapperUsage
            result.color = 'red'
        } else if (number > 0) {
            //noinspection JSPrimitiveTypeWrapperUsage
            result.color = 'green'
        }

        return result
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
        this.completedAt = this.today()
        this.replaceCompleteWithCompleted()
    }

    replaceCompleteWithCompleted() {
        let indexOfComplete = this.userInterface.indexOf('complete')
        this.userInterface.splice(indexOfComplete, 1, 'completed', 'completedAt', 'undo')
    }

    replaceCompletedAtWithComplete() {
        this.deDuplicateUserInterface()
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

    deDuplicateUserInterface() {
        this.userInterface = this.userInterface
            .filter((item, pos, a) => a.indexOf(item) === pos)
    }

    today() {
        const now = new Date()

        const day = now.getDate()
        const month = now.getMonth() + 1
        const year = now.getFullYear()

        return `${year}-${month}-${day}`
    }

    updateAfterLoad() {
        if (this.completedAt === this.today()) {
            this.replaceCompleteWithCompleted()
        }
    }

    undo(reason) {
        if (reason.length < 10) {
            console.log('You need to provide a good reason to undo the task')
            return
        }

        const character = findFirstObject(Character)

        if (character) {
            character.changeHpBy(-this.hp)
            character.changeEpBy(-this.ep)
        }

        this.unComplete()
    }

    unComplete() {
        this.completedAt = ''
        this.replaceCompletedAtWithComplete()
    }
}

registerUserInterfaceAware(Task)