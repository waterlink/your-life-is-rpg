import {registerUserInterfaceAware} from '../UserInterfaceAware'
import {Task} from './Task'
import {improvedAttribute} from '../xpCombo'
import {coloredNumber} from '../util'
import {SkilledTask} from './SkilledTask'
import {findFirstObject} from '../Objects'
import {Reputation} from '../character/Reputation'

export class ReputationTask extends SkilledTask {

    _reputation = 0
    get reputation() {
        return improvedAttribute(this._reputation, this.lvl)
    }

    constructor(name, hp, ep, xpGain, reputation) {
        super(name, hp, ep, xpGain)
        this._reputation = reputation
        this.userInterface.splice('name', 0, 'reputation')
    }

    updateXpBeforeMarkingAsComplete(amount) {
        const reputation = findFirstObject(Reputation)
        reputation.changeReputationBy(this.reputation * this._xpCombo)

        super.updateXpBeforeMarkingAsComplete(amount)
    }

}

Task.subclasses['reputation'] = ReputationTask

registerUserInterfaceAware(ReputationTask)