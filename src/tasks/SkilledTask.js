import {registerUserInterfaceAware} from '../UserInterfaceAware'
import {Task} from './Task'
import {changeXpBy, improvedAttribute, xpPresentation} from '../xpCombo'
import {coloredNumber} from '../util'

export class SkilledTask extends Task {

    lvl = 1

    get hp() {
        const hp = improvedAttribute(this._hp, this.lvl)
        return coloredNumber(hp)
    }

    get ep() {
        const ep = improvedAttribute(this._ep, this.lvl)
        return coloredNumber(ep)
    }

    get xpGain() {
        const xpGain = improvedAttribute(this._xpGain, this.lvl)
        return coloredNumber(xpGain)
    }

    _xp = 0
    _maxXp = 25
    xpModifier = 1.2

    get xp() {
        return xpPresentation(this._xp, this._maxXp)
    }

    constructor(name, hp, ep, xpGain) {
        super(name, hp, ep, xpGain)
        this.userInterface.splice('name', 0, 'lvl', 'xp')
    }

    updateXpBeforeMarkingAsComplete(amount) {
        const result = changeXpBy(this._xp, amount, this._maxXp, this.xpModifier)
        this._xp = result.xp
        this._maxXp = result.maxXp
        this.lvl += result.lvlIncrease

        super.updateXpBeforeMarkingAsComplete()
    }

}

Task.subclasses['skilled'] = SkilledTask

registerUserInterfaceAware(SkilledTask)