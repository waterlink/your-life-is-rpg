import {registerUserInterfaceAware, UserInterfaceAware} from '../UserInterfaceAware'

export class Character extends UserInterfaceAware {

    userInterface = ['name', 'hp', 'ep', 'change']

    constructor() {
        super()

        this.change.setting = true
    }

    name = ''
    essential = 90

    _maxHp = 5
    _hp = 5
    get hp() {
        return this.renderBar(this._hp, this._maxHp, '♥️', '♡')
    }

    _maxEp = 5
    _ep = 5
    get ep() {
        return this.renderBar(this._ep, this._maxEp, '⚡️️', '☼')
    }

    change(name) {
        this.name = name
    }

    renderBar(current, max, filledSymbol, emptySymbol) {
        let barView = ''

        for (let i = 0; i < Math.floor(current); i++) {
            barView += filledSymbol
        }

        for (let i = Math.floor(current); i < max; i++) {
            barView += emptySymbol
        }

        //noinspection JSPrimitiveTypeWrapperUsage
        barView = new String(barView)
        //noinspection JSPrimitiveTypeWrapperUsage
        barView.title = `${current}/${max}`

        return barView
    }

    changeHpBy(amount) {
        this._hp = this.changeBy(this._hp, this._maxHp, amount)
    }

    changeEpBy(amount) {
        this._ep = this.changeBy(this._ep, this._maxEp, amount)
    }

    changeBy(current, max, amount) {
        return Math.max(0, Math.min(max, current + amount))
    }

}

registerUserInterfaceAware(Character)