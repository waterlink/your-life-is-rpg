export const coloredNumber = number => {
    //noinspection JSPrimitiveTypeWrapperUsage
    const result = new Number(parseFloat(number))

    if (number < 0) {
        //noinspection JSPrimitiveTypeWrapperUsage
        result.color = 'red'
    } else if (number > 0) {
        //noinspection JSPrimitiveTypeWrapperUsage
        result.color = 'green'
    }

    return result
}

export const today = () => {
    const now = new Date()

    const day = now.getDate()
    const month = now.getMonth() + 1
    const year = now.getFullYear()

    return `${year}-${month}-${day}`
}
