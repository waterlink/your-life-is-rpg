import {Greeting} from './Greeting'
import {registerUserInterfaceAware, UserInterfaceAware} from '../UserInterfaceAware'

export class GreetingService extends UserInterfaceAware {

    userInterface = ['greet']

    greet(name) {
        return new Greeting(name)
    }

}

registerUserInterfaceAware(GreetingService)
