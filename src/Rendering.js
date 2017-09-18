import {applicationObjects, findFirstObject} from './Objects'
import {UserInterfaceAware} from './UserInterfaceAware'
import {MyWork} from './MyWork'

const appContainer = document.getElementById('app')

const extractArgsString = function (fnStr) {
    return fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')'))
}

const parseArgsString = function (argStr) {
    return argStr.split(',')
        .map(s => s.trim())
        .filter(s => s.length > 0)
}

const parseFunctionArgs = function (fn) {
    const fnStr = fn.toString()
    const argStr = extractArgsString(fnStr)
    return parseArgsString(argStr)
}

const renderInputForArg = function (methodForm, arg) {
    const argInput = document.createElement('input')
    methodForm.appendChild(argInput)
    argInput.setAttribute('type', 'text')
    argInput.setAttribute('placeholder', arg)
    return argInput
}

const handleMethodClick = function (object, property, inputs) {
    const args = inputs.map(input => input.value)
    const result = property.call(object, ...args)

    inputs.forEach(input => input.value = '')

    if (inputs.length > 0) {
        inputs[0].focus()
    }

    if (result instanceof UserInterfaceAware) {
        applicationObjects().push(result)
        renderObject(result)
    } else {
        renderAll()
    }
}

const renderMethod = function (object, objectDiv, name, method) {
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

    const inputs = args.map(arg => {
        return renderInputForArg(methodForm, arg)
    })

    const methodDiv = document.createElement('a')
    methodForm.appendChild(methodDiv)
    methodDiv.textContent = `${name}`
    methodDiv.setAttribute('href', '#')

    methodDiv.onclick = (event) => {
        handleMethodClick(object, method, inputs)
        event.preventDefault()
    }
}

const renderProperty = function (objectDiv, name, property) {
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

const renderUserControl = function (object, objectDiv, name) {
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

export const renderObject = function (object) {
    const objectDiv = document.createElement('div')
    appContainer.appendChild(objectDiv)
    objectDiv.classList.add('object')

    object.obtainAllUserInterface().forEach(name => {
        renderUserControl(object, objectDiv, name)
    })
}

export const renderAll = () => {

    findFirstObject(MyWork).restoreSettingsState()

    appContainer.innerHTML = ''

    applicationObjects()
        .filter(object => !object.hidden)
        .forEach(object => renderObject(object))

}