import {registerUserInterfaceAware, UserInterfaceAware} from '../UserInterfaceAware'

export class Greeting extends UserInterfaceAware{

    userInterface = ['message', 'yell', 'destroy']
    name
    message

    constructor(name) {
        super()
        this.name = name
        this.message = `Hello, ${name}`

        this.destroy.setting = true
    }

    yell() {
        return new Greeting(this.name.toUpperCase())
    }

}

registerUserInterfaceAware(Greeting)