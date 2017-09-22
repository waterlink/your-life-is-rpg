import {MyWork} from './MyWork'
import {Character} from './character/Character'
import {NewTask} from './tasks/NewTask'
import {NewDisease} from './diseases/NewDisease'
import {Sleep} from './sleep/Sleep'

export const initialObjects = [
    new MyWork(),
    new Character(),
    new NewTask(),
    new NewDisease(),
    new Sleep(),
]

let _applicationObjects = initialObjects.map(x => x)

export const applicationObjects = () => {
    return _applicationObjects
}

export const updateApplicationObjects = (objects) => {
    _applicationObjects = objects
}

export const findFirstObject = objectClass =>
    applicationObjects()
        .find(object => object instanceof objectClass)

export const findAllObjects = objectClass =>
    applicationObjects()
        .filter(object => object instanceof objectClass)

export const makeSureInitialObjectsArePresent = () => {
    initialObjects.forEach(object => {
        const found = findFirstObject(object.constructor)
        if (!found) {
            applicationObjects().push(object)
        }
    })
}

export const replaceObject = (object, newObject) => {
    _applicationObjects = applicationObjects().map(o => {
        if (o === object) {
            return newObject
        } else {
            return o
        }
    })
}

window._applicationObjects = applicationObjects
