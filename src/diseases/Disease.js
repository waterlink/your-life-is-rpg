import {registerUserInterfaceAware, UserInterfaceAware} from '../UserInterfaceAware'
import {coloredNumber, today} from '../util'
import {findFirstObject} from '../Objects'
import {Character} from '../character/Character'

export class Disease extends UserInterfaceAware {

    userInterface = ['name', 'hp', 'ep', 'affectedAt', 'destroy']
    name
    affectedAt

    _hp
    get hp() {
        return coloredNumber(this._hp)
    }

    _ep
    get ep() {
        return coloredNumber(this._ep)
    }

    constructor(name, hp, ep) {
        super()
        this.name = name
        this._hp = hp
        this._ep = ep
        this.affectedAt = ''
    }

    updateAfterLoad() {
        if (this.affectedAt !== today()) {
            this.affectCharacter()
        }
    }

    affectCharacter() {
        this.affectedAt = today()

        const character = findFirstObject(Character)
        character.changeHpBy(this.hp)
        character.changeEpBy(this.ep)
    }
}

registerUserInterfaceAware(Disease)