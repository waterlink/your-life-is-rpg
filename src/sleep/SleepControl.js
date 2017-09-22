import {registerUserInterfaceAware, UserInterfaceAware} from '../UserInterfaceAware'
import {coloredNumber, today} from '../util'
import {findFirstObject} from '../Objects'
import {Sleep} from './Sleep'
import {nextXpCombo, xpComboPresentation} from '../xpCombo'

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

    _xpGain = 0
    get xpGain() {
        return coloredNumber(this._xpGain)
    }

    _xpCombo = 1
    get xpCombo() {
        return xpComboPresentation(this._xpCombo)
    }

    sleptAt = ''

    constructor(name, hp, ep, xpGain) {
        super()
        this.name = name || ''
        this._hp = hp || 0
        this._ep = ep || 0
        this._xpGain = xpGain || 0

        this.change.setting = true

        this.updateAfterLoad()
    }

    updateAfterLoad() {
        const sleep = findFirstObject(Sleep)

        this[this.name] = () => {
            sleep.affectCharacter(this.hp, this.ep, this.xpGain * this._xpCombo)
            this._xpCombo = nextXpCombo(this.sleptAt, this._xpCombo)
            this.sleptAt = today()
        }

        if (sleep.sleptAt !== today()) {
            this.userInterface = this.commonUserInterfaceWith(this.name)
        } else {
            this.userInterface = this.commonUserInterfaceWith('message')
        }
    }

    change(hp, ep, xpGain) {
        this._hp = hp
        this._ep = ep
        this._xpGain = xpGain
    }

    ['change.defaultArgs']() {
        return {
            hp: this._hp,
            ep: this._ep,
            xpGain: this._xpGain,
        }
    }

    commonUserInterfaceWith(...args) {
        return ['hp', 'ep', 'xpGain', 'xpCombo', ...args, 'change', 'destroy']
    }

}

registerUserInterfaceAware(SleepControl)