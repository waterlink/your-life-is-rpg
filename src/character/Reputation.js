import {registerUserInterfaceAware, UserInterfaceAware} from '../UserInterfaceAware'
import {changeXpBy, xpPresentation} from '../xpCombo'
import {ReputationTask} from '../tasks/ReputationTask'

export class Reputation extends UserInterfaceAware {

    userInterface = ['lvl', 'reputation', 'createReputationTask']

    essential = 40

    lvl = 0

    _reputation = 0
    _maxReputation = 10
    reputationModifier = 1.2

    get reputation() {
        return xpPresentation(this._reputation, this._maxReputation)
    }

    constructor() {
        super()
        this.createReputationTask.setting = true
        this.createReputationTask.success = true
    }

    changeReputationBy(amount) {
        const result = changeXpBy(this._reputation, amount, this._maxReputation, this.reputationModifier)
        this._reputation = result.xp
        this._maxReputation = result.maxXp
        this.lvl += result.lvlIncrease
    }

    createReputationTask(name, hp, ep, xpGain, reputation) {
        return new ReputationTask(name, hp, ep, xpGain, reputation)
    }

}

registerUserInterfaceAware(Reputation)