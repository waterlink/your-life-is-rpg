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

export const today = () => formatDate(new Date())

export const yesterday = () => {
    const date = new Date()
    date.setDate(date.getDate() - 1)

    return formatDate(date)
}

const formatDate = date => {
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return `${year}-${month}-${day}`
}
