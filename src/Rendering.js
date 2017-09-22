import {applicationObjects, findFirstObject} from './Objects'
import {UserInterfaceAware} from './UserInterfaceAware'
import {MyWork} from './MyWork'
import {Filter} from './Filter'

const appContainer = document.getElementById('app')

const toolsContainer = document.getElementById('tools')

export const filterTool = new Filter()

const extractArgsString = (fnStr) => {
    return fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')'))
}

const parseArgsString = (argStr) => {
    return argStr.split(',')
        .map(s => s.trim())
        .filter(s => s.length > 0)
}

const parseFunctionArgs = (fn) => {
    const fnStr = fn.toString()
    const argStr = extractArgsString(fnStr)
    return parseArgsString(argStr)
}

const renderInputForArg = (methodForm, arg, value) => {
    const argInput = document.createElement('input')
    methodForm.appendChild(argInput)
    argInput.setAttribute('type', 'text')
    argInput.setAttribute('placeholder', arg)
    argInput.setAttribute('value', value)
    return argInput
}

const handleMethodCall = (object, property, inputs, clear = true) => {
    const args = inputs.map(input => input.value)
    const result = property.call(object, ...args)

    if (clear) {
        inputs.forEach(input => input.value = '')

        if (inputs.length > 0) {
            inputs[0].focus()
        }
    }

    if (result instanceof UserInterfaceAware) {
        applicationObjects().push(result)
        renderObject(result)
    } else {
        renderAll()
    }
}

const renderMethod = (object, objectDiv, name, method) => {
    const args = parseFunctionArgs(method)

    const methodForm = document.createElement('div')
    objectDiv.appendChild(methodForm)
    methodForm.classList.add('property')
    methodForm.classList.add('method')

    if (method.danger) {
        methodForm.classList.add('danger')
    }

    if (method.success) {
        methodForm.classList.add('success')
    }

    if (args.length > 1) {
        methodForm.classList.add('multiline')
    }

    const defaultArgsFn = object[`${name}.defaultArgs`] || (() => ({}))
    const defaultArgs = defaultArgsFn.call(object)

    const inputs = args.map(arg => {
        return renderInputForArg(methodForm, arg, defaultArgs[arg] || '')
    })

    if (method.auto && args.length > 0) {

        const handleArgChange = (event) => {
            handleMethodCall(object, method, inputs, false)
        }

        inputs.forEach(input => {
            input.onchange = handleArgChange
            input.onkeyup = handleArgChange
            input.onpaste = handleArgChange
        })

    } else {

        const methodDiv = document.createElement('a')
        methodForm.appendChild(methodDiv)
        methodDiv.textContent = `${name}`
        methodDiv.setAttribute('href', '#')

        methodDiv.onclick = (event) => {
            handleMethodCall(object, method, inputs)
            event.preventDefault()
        }

    }
}

const renderProperty = (objectDiv, name, property) => {
    const propertyDiv = document.createElement('div')
    objectDiv.appendChild(propertyDiv)
    propertyDiv.classList.add('property')
    propertyDiv.textContent = `${name}: ${property}`

    if (property.color) {
        propertyDiv.classList.add(property.color)
    }

    if (property.title) {
        propertyDiv.setAttribute('title', property.title)
    }
}

const renderUserControl = (object, objectDiv, name) => {
    const property = object[name]
    if (property.hidden) {
        return
    }

    if (typeof property === 'function') {
        renderMethod(object, objectDiv, name, property)
    } else {
        renderProperty(objectDiv, name, property)
    }
}

export const renderObject = (object, container = appContainer) => {
    const objectDiv = document.createElement('div')
    container.appendChild(objectDiv)
    objectDiv.classList.add('object')

    object.obtainAllUserInterface().forEach(name => {
        renderUserControl(object, objectDiv, name)
    })
}

export const renderTool = object => {
    renderObject(object, toolsContainer)
}

const contains = (string, filter) => {
    let name = string.toLowerCase()
    let searchString = filter.toLowerCase()
    return name.indexOf(searchString) >= 0
}

const containsInObject = (object, filter) => {
    return contains(object.constructor.name, filter) ||
            contains(object.name || '', filter)
}

const essentialCompare = (a, b) => {
    return (b.essential || 0) - (a.essential || 0)
}

const objectCompare = (a, b) => {
    const compareByEssential = essentialCompare(a, b)

    const compareByClass = a.constructor.name
        .localeCompare(b.constructor.name)

    const compareByName = (a.name || '')
        .localeCompare(b.name || '')

    if (compareByEssential !== 0) {
        return compareByEssential
    }

    if (compareByClass !== 0) {
        return compareByClass
    }

    return compareByName
}

export const renderAll = () => {

    const myWork = findFirstObject(MyWork)
    myWork.restoreSettingsState()

    appContainer.innerHTML = ''

    applicationObjects()
        .filter(object => !object.hidden)
        .filter(object => {
            return object.essential ||
                containsInObject(object, filterTool.filterValue)
        }).sort(objectCompare)
        .forEach(object => renderObject(object))

}