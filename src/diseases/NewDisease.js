import {registerUserInterfaceAware, UserInterfaceAware} from '../UserInterfaceAware'
import {Disease} from './Disease'

export class NewDisease extends UserInterfaceAware {

    userInterface = ['create']
    setting = true
    essential = 50

    constructor() {
        super()
        this.create.success = true
    }

    create(name, hp, ep) {
        return new Disease(name, hp, ep)
    }

}

registerUserInterfaceAware(NewDisease)