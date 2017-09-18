import {MyWork} from './MyWork'
import {Character} from './character/Character'
import {NewTask} from './tasks/NewTask'

export const initialObjects = [
    new MyWork(),
    new Character(),
    new NewTask(),
]

let _applicationObjects = initialObjects.map(x => x)

export const applicationObjects = () => {
    return _applicationObjects
}

export const updateApplicationObjects = (objects) => {
    _applicationObjects = objects
}

export const findFirstObject = (objectClass) => {
    return applicationObjects()
        .find(object => object.constructor === objectClass)
}

window._applicationObjects = applicationObjects
