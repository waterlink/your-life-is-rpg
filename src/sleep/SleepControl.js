import {registerUserInterfaceAware, UserInterfaceAware} from '../UserInterfaceAware'
import {coloredNumber, today} from '../util'
import {findFirstObject} from '../Objects'
import {Sleep} from './Sleep'

export class SleepControl extends UserInterfaceAware {

    name = ''
    message = 'already slept'

    _hp = 0
    get hp() {
        return coloredNumber(this._hp)
    }

    _ep = 0
    get ep() {
        return coloredNumber(this._ep)
    }

    constructor(name, hp, ep) {
        super()
        this.name = name
        this._hp = hp
        this._ep = ep

        this.updateAfterLoad()
    }

    updateAfterLoad() {
        const sleep = findFirstObject(Sleep)

        this[this.name] = () => {
            sleep.affectCharacter(this.hp, this.ep)
        }

        if (sleep.sleptAt !== today()) {
            this.userInterface = this.commonUserInterfaceWith(this.name)
        } else {
            this.userInterface = this.commonUserInterfaceWith('message')
        }
    }

    commonUserInterfaceWith(...args) {
        return ['hp', 'ep', ...args, 'destroy']
    }

}

registerUserInterfaceAware(SleepControl)