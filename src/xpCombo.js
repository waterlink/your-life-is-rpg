import {yesterday} from './util'

export const nextXpCombo = (previousDate, xpCombo) => {
    if (previousDate === yesterday()) {
        return xpCombo + 1
    } else {
        return 1
    }
}

export const xpComboPresentation = xpCombo => `x${xpCombo}`

export const xpPresentation = (xp, max) => `${Math.floor(xp)}/${Math.floor(max)}`

export const changeXpBy = (xp, amount, maxXp, xpModifier) => {
    let attributePoints = 0
    let lvlIncrease = 0

    xp += amount

    while (xp >= maxXp) {
        attributePoints++
        lvlIncrease++
        xp -= maxXp
        maxXp = Math.floor(maxXp * xpModifier)
    }

    if (xp < 0) {
        xp = 0;
    }

    return {
        xp: xp,
        maxXp: maxXp,
        attributePoints: attributePoints,
        lvlIncrease: lvlIncrease,
    }
}

export const improvedAttribute = function (number, lvl) {
    const topLevel = 30

    if (number > 0) {
        number = number * (1 + (lvl - 1) / topLevel)
    }

    if (number < 0) {
        number = number / (1 + (lvl - 1) / topLevel)
    }

    return Math.floor(number * 100) / 100
}
