import {registerUserInterfaceAware, UserInterfaceAware} from '../UserInterfaceAware'
import {Task} from './Task'

export class NewTask extends UserInterfaceAware {

    userInterface = ['create']
    setting = true
    essential = 50

    constructor() {
        super()
        this.create.success = true
    }

    create(name, hp, ep) {
        return new Task(name, hp, ep)
    }

}

registerUserInterfaceAware(NewTask)