import {registerUserInterfaceAware, UserInterfaceAware} from '../UserInterfaceAware'
import {changeXpBy, xpPresentation} from '../xpCombo'

export class Character extends UserInterfaceAware {

    userInterface = ['name', 'lvl', 'attributePoints', 'hp', 'hp+', 'ep', 'ep+', 'xp', 'change']

    constructor() {
        super()

        this.change.setting = true
        this['hp+'].hidden = true
        this['ep+'].hidden = true
    }

    name = ''
    essential = 90

    lvl = 1
    attributePoints = 0

    _xp = 0
    _maxXp = 50
    xpModifier = 1.2
    get xp() {
        return xpPresentation(this._xp, this._maxXp)
    }

    _maxHp = 5
    _hp = 5
    get hp() {
        return this.renderBar(this._hp, this._maxHp, '♥️', '♡')
    }
    ['hp+']() {
        this.attributePoints -= 1
        this._maxHp += 1
        this.updateAttributeButtons()
    }

    _maxEp = 5
    _ep = 5
    get ep() {
        return this.renderBar(this._ep, this._maxEp, '⚡️️', '☼')
    }
    ['ep+']() {
        this.attributePoints -= 1
        this._maxEp += 1
        this.updateAttributeButtons()
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

    changeXpBy(amount) {
        const result = changeXpBy(this._xp, amount, this._maxXp, this.xpModifier)
        this._xp = result.xp
        this._maxXp = result.maxXp
        this.attributePoints += result.attributePoints
        this.lvl += result.lvlIncrease
        this.updateAttributeButtons()
    }

    changeBy(current, max, amount) {
        return Math.max(0, Math.min(max, current + amount))
    }

    updateAttributeButtons() {
        if (this.attributePoints > 0) {
            this['hp+'].hidden = false
            this['ep+'].hidden = false
        } else {
            this['hp+'].hidden = true
            this['ep+'].hidden = true
        }
    }

    updateAfterLoad() {
        super.updateAfterLoad()
        this.updateAttributeButtons()
    }

}

registerUserInterfaceAware(Character)