import {registerUserInterfaceAware, UserInterfaceAware} from '../UserInterfaceAware'
import {findFirstObject, replaceObject} from '../Objects'
import {Character} from '../character/Character'
import {coloredNumber, today} from '../util'
import {nextXpCombo, xpComboPresentation} from '../xpCombo'
import {convertRawTo} from '../MyWork'

export class Task extends UserInterfaceAware {

    userInterface = [
        'name', 'hp', 'ep',
        'xpGain', 'xpCombo',
        'complete',
        'change', 'makeSkilled',
        'destroy',
    ]
    name

    _hp = 0
    get hp() {
        return coloredNumber(this._hp)
    }

    _ep = 0
    get ep() {
        return coloredNumber(this._ep)
    }

    _xpGain = 0
    get xpGain() {
        return coloredNumber(this._xpGain)
    }

    _xpCombo = 1
    get xpCombo() {
        return xpComboPresentation(this._xpCombo)
    }

    get completed() {
        return {
            toString: () => 'done',
            color: 'green',
        }
    }

    constructor(name, hp, ep, xpGain) {
        super()
        this.name = name || ''
        this._hp = hp || 0
        this._ep = ep || 0
        this._xpGain = xpGain || 0

        this.undo.danger = true
        this.undo.setting = true
        this.change.setting = true
        this.makeSkilled.setting = true
    }

    change(name, hp, ep, xpGain) {
        this.name = name
        this._hp = hp
        this._ep = ep
        this._xpGain = xpGain
    }

    ['change.defaultArgs']() {
        return {
            name: this.name,
            hp: this._hp,
            ep: this._ep,
            xpGain: this._xpGain,
        }
    }

    complete() {
        const character = findFirstObject(Character)

        if (character) {
            character.changeHpBy(this.hp)
            character.changeEpBy(this.ep)

            let xpAmount = this.xpGain * this._xpCombo
            character.changeXpBy(xpAmount)
            this.updateXpBeforeMarkingAsComplete(xpAmount)

            this.markAsCompleted()
        }
    }

    updateXpBeforeMarkingAsComplete(amount) {
        this._xpCombo = nextXpCombo(this.completedAt, this._xpCombo)
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

    makeSkilled() {
        const skilledSubclass = Task.subclasses['skilled']
        const skilledTask = convertRawTo(this, skilledSubclass)
        replaceObject(this, skilledTask)
    }
}

Task.subclasses = {}

registerUserInterfaceAware(Task)