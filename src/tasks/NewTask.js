import {registerUserInterfaceAware, UserInterfaceAware} from '../UserInterfaceAware'
import {Task} from './Task'
import {SkilledTask} from './SkilledTask'

export class NewTask extends UserInterfaceAware {

    userInterface = ['create']
    setting = true
    essential = 50

    constructor() {
        super()
        this.create.success = true
    }

    create(name, hp, ep, xpGain, isSkilled) {
        if (isSkilled === 'true' || isSkilled === 'yes') {
            return new SkilledTask(name, hp, ep, xpGain)
        } else {
            return new Task(name, hp, ep, xpGain)
        }
    }

}

registerUserInterfaceAware(NewTask)