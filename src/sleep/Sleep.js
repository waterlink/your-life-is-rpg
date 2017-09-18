import {registerUserInterfaceAware, UserInterfaceAware} from '../UserInterfaceAware'
import {today} from '../util'
import {findAllObjects, findFirstObject} from '../Objects'
import {Character} from '../character/Character'
import {SleepControl} from './SleepControl'


export class Sleep extends UserInterfaceAware {

    userInterface = ['sleptAt', 'add sleep control']

    name
    sleptAt
    essential = 50

    constructor() {
        super()
        this.sleptAt = ''

        this['add sleep control'].setting = true
        this['add sleep control'].success = true
    }

    ['add sleep control'](name, hp, ep) {
        return new SleepControl(name, hp, ep)
    }

    affectCharacter(hp, ep) {
        this.sleptAt = today()

        const character = findFirstObject(Character)
        character.changeHpBy(hp)
        character.changeEpBy(ep)

        findAllObjects(SleepControl)
            .forEach(control => control.updateAfterLoad())
    }

}

registerUserInterfaceAware(Sleep)