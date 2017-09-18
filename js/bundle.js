/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rendering__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MyWork__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Objects__ = __webpack_require__(4);




new __WEBPACK_IMPORTED_MODULE_1__MyWork__["a" /* MyWork */]().reload();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Objects__["a" /* makeSureInitialObjectsArePresent */])();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Rendering__["a" /* renderTool */])(__WEBPACK_IMPORTED_MODULE_0__Rendering__["b" /* filterTool */]);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Rendering__["c" /* renderAll */])();

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MyWork__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__character_Character__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasks_NewTask__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__diseases_NewDisease__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sleep_Sleep__ = __webpack_require__(19);






const initialObjects = [new __WEBPACK_IMPORTED_MODULE_0__MyWork__["a" /* MyWork */](), new __WEBPACK_IMPORTED_MODULE_1__character_Character__["a" /* Character */](), new __WEBPACK_IMPORTED_MODULE_2__tasks_NewTask__["a" /* NewTask */](), new __WEBPACK_IMPORTED_MODULE_3__diseases_NewDisease__["a" /* NewDisease */](), new __WEBPACK_IMPORTED_MODULE_4__sleep_Sleep__["a" /* Sleep */]()];
/* harmony export (immutable) */ __webpack_exports__["f"] = initialObjects;


let _applicationObjects = initialObjects.map(x => x);

const applicationObjects = () => {
    return _applicationObjects;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = applicationObjects;


const updateApplicationObjects = objects => {
    _applicationObjects = objects;
};
/* harmony export (immutable) */ __webpack_exports__["e"] = updateApplicationObjects;


const findFirstObject = objectClass => applicationObjects().find(object => object instanceof objectClass);
/* harmony export (immutable) */ __webpack_exports__["c"] = findFirstObject;


const findAllObjects = objectClass => applicationObjects().filter(object => object instanceof objectClass);
/* harmony export (immutable) */ __webpack_exports__["d"] = findAllObjects;


const makeSureInitialObjectsArePresent = () => {
    initialObjects.forEach(object => {
        const found = findFirstObject(object.constructor);
        if (!found) {
            applicationObjects().push(object);
        }
    });
};
/* harmony export (immutable) */ __webpack_exports__["a"] = makeSureInitialObjectsArePresent;


window._applicationObjects = applicationObjects;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Objects__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UserInterfaceAware__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MyWork__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Filter__ = __webpack_require__(21);





const appContainer = document.getElementById('app');

const toolsContainer = document.getElementById('tools');

const filterTool = new __WEBPACK_IMPORTED_MODULE_3__Filter__["a" /* Filter */]();
/* harmony export (immutable) */ __webpack_exports__["b"] = filterTool;


const extractArgsString = fnStr => {
    return fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')'));
};

const parseArgsString = argStr => {
    return argStr.split(',').map(s => s.trim()).filter(s => s.length > 0);
};

const parseFunctionArgs = fn => {
    const fnStr = fn.toString();
    const argStr = extractArgsString(fnStr);
    return parseArgsString(argStr);
};

const renderInputForArg = (methodForm, arg) => {
    const argInput = document.createElement('input');
    methodForm.appendChild(argInput);
    argInput.setAttribute('type', 'text');
    argInput.setAttribute('placeholder', arg);
    return argInput;
};

const handleMethodCall = (object, property, inputs, clear = true) => {
    const args = inputs.map(input => input.value);
    const result = property.call(object, ...args);

    if (clear) {
        inputs.forEach(input => input.value = '');

        if (inputs.length > 0) {
            inputs[0].focus();
        }
    }

    if (result instanceof __WEBPACK_IMPORTED_MODULE_1__UserInterfaceAware__["a" /* UserInterfaceAware */]) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Objects__["b" /* applicationObjects */])().push(result);
        renderObject(result);
    } else {
        renderAll();
    }
};

const renderMethod = (object, objectDiv, name, method) => {
    const args = parseFunctionArgs(method);

    const methodForm = document.createElement('div');
    objectDiv.appendChild(methodForm);
    methodForm.classList.add('property');
    methodForm.classList.add('method');

    if (method.danger) {
        methodForm.classList.add('danger');
    }

    if (method.success) {
        methodForm.classList.add('success');
    }

    if (args.length > 1) {
        methodForm.classList.add('multiline');
    }

    const inputs = args.map(arg => {
        return renderInputForArg(methodForm, arg);
    });

    if (method.auto && args.length > 0) {

        const handleArgChange = event => {
            handleMethodCall(object, method, inputs, false);
        };

        inputs.forEach(input => {
            input.onchange = handleArgChange;
            input.onkeyup = handleArgChange;
            input.onpaste = handleArgChange;
        });
    } else {

        const methodDiv = document.createElement('a');
        methodForm.appendChild(methodDiv);
        methodDiv.textContent = `${name}`;
        methodDiv.setAttribute('href', '#');

        methodDiv.onclick = event => {
            handleMethodCall(object, method, inputs);
            event.preventDefault();
        };
    }
};

const renderProperty = (objectDiv, name, property) => {
    const propertyDiv = document.createElement('div');
    objectDiv.appendChild(propertyDiv);
    propertyDiv.classList.add('property');
    propertyDiv.textContent = `${name}: ${property}`;

    if (property.color) {
        propertyDiv.classList.add(property.color);
    }

    if (property.title) {
        propertyDiv.setAttribute('title', property.title);
    }
};

const renderUserControl = (object, objectDiv, name) => {
    const property = object[name];
    if (property.hidden) {
        return;
    }

    if (typeof property === 'function') {
        renderMethod(object, objectDiv, name, property);
    } else {
        renderProperty(objectDiv, name, property);
    }
};

const renderObject = (object, container = appContainer) => {
    const objectDiv = document.createElement('div');
    container.appendChild(objectDiv);
    objectDiv.classList.add('object');

    object.obtainAllUserInterface().forEach(name => {
        renderUserControl(object, objectDiv, name);
    });
};
/* unused harmony export renderObject */


const renderTool = object => {
    renderObject(object, toolsContainer);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = renderTool;


const contains = (string, filter) => {
    let name = string.toLowerCase();
    let searchString = filter.toLowerCase();
    return name.indexOf(searchString) >= 0;
};

const containsInObject = (object, filter) => {
    return contains(object.constructor.name, filter) || contains(object.name || '', filter);
};

const essentialCompare = (a, b) => {
    return (b.essential || 0) - (a.essential || 0);
};

const objectCompare = (a, b) => {
    const compareByEssential = essentialCompare(a, b);

    const compareByClass = a.constructor.name.localeCompare(b.constructor.name);

    const compareByName = (a.name || '').localeCompare(b.name || '');

    if (compareByEssential !== 0) {
        return compareByEssential;
    }

    if (compareByClass !== 0) {
        return compareByClass;
    }

    return compareByName;
};

const renderAll = () => {

    const myWork = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Objects__["c" /* findFirstObject */])(__WEBPACK_IMPORTED_MODULE_2__MyWork__["a" /* MyWork */]);
    myWork.restoreSettingsState();

    appContainer.innerHTML = '';

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Objects__["b" /* applicationObjects */])().filter(object => !object.hidden).filter(object => {
        return object.essential || containsInObject(object, filterTool.filterValue);
    }).sort(objectCompare).forEach(object => renderObject(object));
};
/* harmony export (immutable) */ __webpack_exports__["c"] = renderAll;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Objects__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Rendering__ = __webpack_require__(5);




const createObjectFromRaw = rawObject => {
    const className = rawObject.object;
    const foundClass = __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["c" /* userInterfaceAwareClasses */].find(c => c.name === className);

    if (foundClass) {
        const pristineObject = new foundClass();
        const target = new foundClass();

        try {
            Object.assign(target, rawObject);
        } catch (e) {
            console.error(e);
            return null;
        }

        target.userInterface = pristineObject.userInterface;

        return target;
    }

    return null;
};

class MyWork extends __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["a" /* UserInterfaceAware */] {

    constructor() {
        super();
        this.userInterface = ['save', 'settings', 'reload', 'reset'];
        this.localStorageKey = 'MyWork.savedWork';
        this.settingsShown = true;
        this.essential = 100;
        this.save.success = true;
        this.reset.danger = true;
        this.reload.setting = true;
        this.reset.setting = true;
    }

    save() {
        const data = JSON.stringify(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Objects__["b" /* applicationObjects */])());
        localStorage.setItem(this.localStorageKey, data);
    }

    reload() {
        const data = localStorage.getItem(this.localStorageKey);
        if (data) {
            const rawObjects = JSON.parse(data);
            const objects = rawObjects.map(createObjectFromRaw).filter(object => object !== null);

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Objects__["e" /* updateApplicationObjects */])(objects);

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Objects__["b" /* applicationObjects */])().forEach(o => o.updateAfterLoad());

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Objects__["c" /* findFirstObject */])(MyWork).restoreSettingsState();

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Rendering__["c" /* renderAll */])();
        }
    }

    reset() {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Objects__["e" /* updateApplicationObjects */])(__WEBPACK_IMPORTED_MODULE_1__Objects__["f" /* initialObjects */]);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Rendering__["c" /* renderAll */])();
    }

    settings() {
        if (this.settingsShown) {
            this.hideSettings();
        } else {
            this.showSettings();
        }
    }

    restoreSettingsState() {
        if (this.settingsShown) {
            this.showSettings();
        } else {
            this.hideSettings();
        }
    }

    hideSettings() {
        this.settingsShown = false;

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Objects__["b" /* applicationObjects */])().filter(o => o.setting).forEach(o => o.hideUserInterface());

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Objects__["b" /* applicationObjects */])().forEach(obj => {
            obj.obtainAllUserInterface().map(name => obj[name]).filter(prop => prop.setting).forEach(prop => prop.hidden = true);
        });
    }

    showSettings() {
        this.settingsShown = true;

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Objects__["b" /* applicationObjects */])().filter(o => o.setting || o.hidden).forEach(o => o.showUserInterface());

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Objects__["b" /* applicationObjects */])().forEach(obj => {
            obj.obtainAllUserInterface().map(name => obj[name]).filter(prop => prop.setting).forEach(prop => prop.hidden = false);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MyWork;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["b" /* registerUserInterfaceAware */])(MyWork);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Objects__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Rendering__ = __webpack_require__(5);



const userInterfaceAwareClasses = [];
/* harmony export (immutable) */ __webpack_exports__["c"] = userInterfaceAwareClasses;


class UserInterfaceAware {

    constructor() {
        this.defaultUserInterface = ['object'];
        this.userInterface = [];

        if (userInterfaceAwareClasses.indexOf(this.constructor) < 0) {
            throw new Error(`You forgot to register a user interface aware class ${this.constructor.name}`);
        }

        this.object = this.constructor.name;
        this.destroy.danger = true;
        this.destroy.setting = true;
    }

    /**
     * @return {Array<String>}
     */
    obtainAllUserInterface() {
        return this.defaultUserInterface.concat(this.userInterface);
    }

    destroy() {
        const index = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Objects__["b" /* applicationObjects */])().indexOf(this);
        if (index >= 0) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Objects__["b" /* applicationObjects */])().splice(index, 1);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Rendering__["c" /* renderAll */])();
        }
    }

    hideUserInterface() {
        this.hidden = true;
    }

    showUserInterface() {
        this.hidden = false;
    }

    updateAfterLoad() {}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = UserInterfaceAware;


const registerUserInterfaceAware = aClass => {
    userInterfaceAwareClasses.push(aClass);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = registerUserInterfaceAware;


/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(7);


class Character extends __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["a" /* UserInterfaceAware */] {

    constructor() {
        super();

        this.userInterface = ['name', 'hp', 'ep', 'change'];
        this.name = '';
        this.essential = 90;
        this._maxHp = 5;
        this._hp = 5;
        this._maxEp = 5;
        this._ep = 5;
        this.change.setting = true;
    }

    get hp() {
        return this.renderBar(this._hp, this._maxHp, '♥️', '♡');
    }

    get ep() {
        return this.renderBar(this._ep, this._maxEp, '⚡️️', '☼');
    }

    change(name) {
        this.name = name;
    }

    renderBar(current, max, filledSymbol, emptySymbol) {
        let barView = '';

        for (let i = 0; i < Math.floor(current); i++) {
            barView += filledSymbol;
        }

        for (let i = Math.floor(current); i < max; i++) {
            barView += emptySymbol;
        }

        //noinspection JSPrimitiveTypeWrapperUsage
        barView = new String(barView);
        //noinspection JSPrimitiveTypeWrapperUsage
        barView.title = `${current}/${max}`;

        return barView;
    }

    changeHpBy(amount) {
        this._hp = this.changeBy(this._hp, this._maxHp, amount);
    }

    changeEpBy(amount) {
        this._ep = this.changeBy(this._ep, this._maxEp, amount);
    }

    changeBy(current, max, amount) {
        return Math.max(0, Math.min(max, current + amount));
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Character;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["b" /* registerUserInterfaceAware */])(Character);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Task__ = __webpack_require__(13);



class NewTask extends __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["a" /* UserInterfaceAware */] {

    constructor() {
        super();
        this.userInterface = ['create'];
        this.setting = true;
        this.essential = 50;
        this.create.success = true;
    }

    create(name, hp, ep) {
        return new __WEBPACK_IMPORTED_MODULE_1__Task__["a" /* Task */](name, hp, ep);
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = NewTask;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["b" /* registerUserInterfaceAware */])(NewTask);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Objects__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__character_Character__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(18);





class Task extends __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["a" /* UserInterfaceAware */] {
    get hp() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* coloredNumber */])(this._hp);
    }

    get ep() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* coloredNumber */])(this._ep);
    }

    get completed() {
        return {
            toString: () => 'done',
            color: 'green'
        };
    }

    constructor(name, hp, ep) {
        super();
        this.userInterface = ['name', 'hp', 'ep', 'complete', 'destroy'];
        this._hp = 0;
        this._ep = 0;
        this.name = name;
        this._hp = hp;
        this._ep = ep;

        this.undo.danger = true;
        this.undo.setting = true;
    }

    complete() {
        const character = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Objects__["c" /* findFirstObject */])(__WEBPACK_IMPORTED_MODULE_2__character_Character__["a" /* Character */]);

        if (character) {
            character.changeHpBy(this.hp);
            character.changeEpBy(this.ep);

            this.markAsCompleted();
        }
    }

    markAsCompleted() {
        this.completedAt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* today */])();
        this.replaceCompleteWithCompleted();
    }

    replaceCompleteWithCompleted() {
        let indexOfComplete = this.userInterface.indexOf('complete');
        this.userInterface.splice(indexOfComplete, 1, 'completed', 'completedAt', 'undo');
    }

    replaceCompletedAtWithComplete() {
        this.replaceCompletedWithComplete();
        this.removeUserInterface('completedAt');
        this.removeUserInterface('undo');
    }

    removeUserInterface(s) {
        let index = this.userInterface.indexOf(s);
        if (index >= 0) this.userInterface.splice(index, 1);
    }

    replaceCompletedWithComplete() {
        let index = this.userInterface.indexOf('completed');
        if (index >= 0) this.userInterface.splice(index, 1, 'complete');
    }

    updateAfterLoad() {
        if (this.completedAt === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* today */])()) {
            this.replaceCompleteWithCompleted();
        }
    }

    undo(reason) {
        if (reason.length < 10) {
            console.log('You need to provide a good reason to undo the task');
            return;
        }

        const character = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Objects__["c" /* findFirstObject */])(__WEBPACK_IMPORTED_MODULE_2__character_Character__["a" /* Character */]);
        character.changeHpBy(-this.hp);
        character.changeEpBy(-this.ep);
        this.unComplete();
    }

    unComplete() {
        this.completedAt = '';
        this.replaceCompletedAtWithComplete();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Task;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["b" /* registerUserInterfaceAware */])(Task);

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Objects__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__character_Character__ = __webpack_require__(11);





class Disease extends __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["a" /* UserInterfaceAware */] {
    get hp() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* coloredNumber */])(this._hp);
    }

    get ep() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* coloredNumber */])(this._ep);
    }

    constructor(name, hp, ep) {
        super();
        this.userInterface = ['name', 'hp', 'ep', 'affectedAt', 'destroy'];
        this.name = name;
        this._hp = hp;
        this._ep = ep;
        this.affectedAt = '';
    }

    updateAfterLoad() {
        if (this.affectedAt !== __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* today */])()) {
            this.affectCharacter();
        }
    }

    affectCharacter() {
        this.affectedAt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* today */])();

        const character = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Objects__["c" /* findFirstObject */])(__WEBPACK_IMPORTED_MODULE_3__character_Character__["a" /* Character */]);
        character.changeHpBy(this.hp);
        character.changeEpBy(this.ep);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Disease;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["b" /* registerUserInterfaceAware */])(Disease);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Disease__ = __webpack_require__(16);



class NewDisease extends __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["a" /* UserInterfaceAware */] {

    constructor() {
        super();
        this.userInterface = ['create'];
        this.setting = true;
        this.essential = 50;
        this.create.success = true;
    }

    create(name, hp, ep) {
        return new __WEBPACK_IMPORTED_MODULE_1__Disease__["a" /* Disease */](name, hp, ep);
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = NewDisease;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["b" /* registerUserInterfaceAware */])(NewDisease);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const coloredNumber = number => {
    //noinspection JSPrimitiveTypeWrapperUsage
    const result = new Number(parseFloat(number));

    if (number < 0) {
        //noinspection JSPrimitiveTypeWrapperUsage
        result.color = 'red';
    } else if (number > 0) {
        //noinspection JSPrimitiveTypeWrapperUsage
        result.color = 'green';
    }

    return result;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = coloredNumber;


const today = () => {
    const now = new Date();

    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    return `${year}-${month}-${day}`;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = today;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Objects__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__character_Character__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SleepControl__ = __webpack_require__(20);






class Sleep extends __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["a" /* UserInterfaceAware */] {

    constructor() {
        super();
        this.userInterface = ['sleptAt', 'add sleep control'];
        this.essential = 50;
        this.sleptAt = '';

        this['add sleep control'].setting = true;
        this['add sleep control'].success = true;
    }

    ['add sleep control'](name, hp, ep) {
        return new __WEBPACK_IMPORTED_MODULE_4__SleepControl__["a" /* SleepControl */](name, hp, ep);
    }

    affectCharacter(hp, ep) {
        this.sleptAt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* today */])();

        const character = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Objects__["c" /* findFirstObject */])(__WEBPACK_IMPORTED_MODULE_3__character_Character__["a" /* Character */]);
        character.changeHpBy(hp);
        character.changeEpBy(ep);

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Objects__["d" /* findAllObjects */])(__WEBPACK_IMPORTED_MODULE_4__SleepControl__["a" /* SleepControl */]).forEach(control => control.updateAfterLoad());
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Sleep;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["b" /* registerUserInterfaceAware */])(Sleep);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Objects__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Sleep__ = __webpack_require__(19);





class SleepControl extends __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["a" /* UserInterfaceAware */] {
    get hp() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* coloredNumber */])(this._hp);
    }

    get ep() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* coloredNumber */])(this._ep);
    }

    constructor(name, hp, ep) {
        super();
        this.name = '';
        this.message = 'already slept';
        this._hp = 0;
        this._ep = 0;
        this.name = name;
        this._hp = hp;
        this._ep = ep;

        this.updateAfterLoad();
    }

    updateAfterLoad() {
        const sleep = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Objects__["c" /* findFirstObject */])(__WEBPACK_IMPORTED_MODULE_3__Sleep__["a" /* Sleep */]);

        this[this.name] = () => {
            sleep.affectCharacter(this.hp, this.ep);
        };

        if (sleep.sleptAt !== __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* today */])()) {
            this.userInterface = this.commonUserInterfaceWith(this.name);
        } else {
            this.userInterface = this.commonUserInterfaceWith('message');
        }
    }

    commonUserInterfaceWith(...args) {
        return ['hp', 'ep', ...args, 'destroy'];
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = SleepControl;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["b" /* registerUserInterfaceAware */])(SleepControl);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(7);


class Filter extends __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["a" /* UserInterfaceAware */] {

    constructor() {
        super();
        this.userInterface = ['search'];
        this.filterValue = '';
        this.search.auto = true;
    }

    search(filter) {
        this.filterValue = filter;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Filter;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["b" /* registerUserInterfaceAware */])(Filter);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjkxMDVmMjM3OThiOThlNjJmM2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9PYmplY3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9SZW5kZXJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL015V29yay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXNlckludGVyZmFjZUF3YXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFyYWN0ZXIvQ2hhcmFjdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy90YXNrcy9OZXdUYXNrLmpzIiwid2VicGFjazovLy8uL3NyYy90YXNrcy9UYXNrLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNlYXNlcy9EaXNlYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNlYXNlcy9OZXdEaXNlYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zbGVlcC9TbGVlcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2xlZXAvU2xlZXBDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NyYy9GaWx0ZXIuanMiXSwibmFtZXMiOlsicmVsb2FkIiwibWFrZVN1cmVJbml0aWFsT2JqZWN0c0FyZVByZXNlbnQiLCJyZW5kZXJUb29sIiwicmVuZGVyQWxsIiwiaW5pdGlhbE9iamVjdHMiLCJfYXBwbGljYXRpb25PYmplY3RzIiwibWFwIiwieCIsImFwcGxpY2F0aW9uT2JqZWN0cyIsInVwZGF0ZUFwcGxpY2F0aW9uT2JqZWN0cyIsIm9iamVjdHMiLCJmaW5kRmlyc3RPYmplY3QiLCJvYmplY3RDbGFzcyIsImZpbmQiLCJvYmplY3QiLCJmaW5kQWxsT2JqZWN0cyIsImZpbHRlciIsImZvckVhY2giLCJmb3VuZCIsImNvbnN0cnVjdG9yIiwicHVzaCIsIndpbmRvdyIsImFwcENvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b29sc0NvbnRhaW5lciIsImZpbHRlclRvb2wiLCJleHRyYWN0QXJnc1N0cmluZyIsImZuU3RyIiwic2xpY2UiLCJpbmRleE9mIiwicGFyc2VBcmdzU3RyaW5nIiwiYXJnU3RyIiwic3BsaXQiLCJzIiwidHJpbSIsImxlbmd0aCIsInBhcnNlRnVuY3Rpb25BcmdzIiwiZm4iLCJ0b1N0cmluZyIsInJlbmRlcklucHV0Rm9yQXJnIiwibWV0aG9kRm9ybSIsImFyZyIsImFyZ0lucHV0IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwic2V0QXR0cmlidXRlIiwiaGFuZGxlTWV0aG9kQ2FsbCIsInByb3BlcnR5IiwiaW5wdXRzIiwiY2xlYXIiLCJhcmdzIiwiaW5wdXQiLCJ2YWx1ZSIsInJlc3VsdCIsImNhbGwiLCJmb2N1cyIsInJlbmRlck9iamVjdCIsInJlbmRlck1ldGhvZCIsIm9iamVjdERpdiIsIm5hbWUiLCJtZXRob2QiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYW5nZXIiLCJzdWNjZXNzIiwiYXV0byIsImhhbmRsZUFyZ0NoYW5nZSIsImV2ZW50Iiwib25jaGFuZ2UiLCJvbmtleXVwIiwib25wYXN0ZSIsIm1ldGhvZERpdiIsInRleHRDb250ZW50Iiwib25jbGljayIsInByZXZlbnREZWZhdWx0IiwicmVuZGVyUHJvcGVydHkiLCJwcm9wZXJ0eURpdiIsImNvbG9yIiwidGl0bGUiLCJyZW5kZXJVc2VyQ29udHJvbCIsImhpZGRlbiIsImNvbnRhaW5lciIsIm9idGFpbkFsbFVzZXJJbnRlcmZhY2UiLCJjb250YWlucyIsInN0cmluZyIsInRvTG93ZXJDYXNlIiwic2VhcmNoU3RyaW5nIiwiY29udGFpbnNJbk9iamVjdCIsImVzc2VudGlhbENvbXBhcmUiLCJhIiwiYiIsImVzc2VudGlhbCIsIm9iamVjdENvbXBhcmUiLCJjb21wYXJlQnlFc3NlbnRpYWwiLCJjb21wYXJlQnlDbGFzcyIsImxvY2FsZUNvbXBhcmUiLCJjb21wYXJlQnlOYW1lIiwibXlXb3JrIiwicmVzdG9yZVNldHRpbmdzU3RhdGUiLCJpbm5lckhUTUwiLCJmaWx0ZXJWYWx1ZSIsInNvcnQiLCJjcmVhdGVPYmplY3RGcm9tUmF3IiwicmF3T2JqZWN0IiwiY2xhc3NOYW1lIiwiZm91bmRDbGFzcyIsInVzZXJJbnRlcmZhY2VBd2FyZUNsYXNzZXMiLCJjIiwicHJpc3RpbmVPYmplY3QiLCJ0YXJnZXQiLCJPYmplY3QiLCJhc3NpZ24iLCJlIiwiY29uc29sZSIsImVycm9yIiwidXNlckludGVyZmFjZSIsIk15V29yayIsImxvY2FsU3RvcmFnZUtleSIsInNldHRpbmdzU2hvd24iLCJzYXZlIiwicmVzZXQiLCJzZXR0aW5nIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsInJhd09iamVjdHMiLCJwYXJzZSIsIm8iLCJ1cGRhdGVBZnRlckxvYWQiLCJzZXR0aW5ncyIsImhpZGVTZXR0aW5ncyIsInNob3dTZXR0aW5ncyIsImhpZGVVc2VySW50ZXJmYWNlIiwib2JqIiwicHJvcCIsInNob3dVc2VySW50ZXJmYWNlIiwicmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUiLCJVc2VySW50ZXJmYWNlQXdhcmUiLCJkZWZhdWx0VXNlckludGVyZmFjZSIsIkVycm9yIiwiZGVzdHJveSIsImNvbmNhdCIsImluZGV4Iiwic3BsaWNlIiwiYUNsYXNzIiwiQ2hhcmFjdGVyIiwiX21heEhwIiwiX2hwIiwiX21heEVwIiwiX2VwIiwiY2hhbmdlIiwiaHAiLCJyZW5kZXJCYXIiLCJlcCIsImN1cnJlbnQiLCJtYXgiLCJmaWxsZWRTeW1ib2wiLCJlbXB0eVN5bWJvbCIsImJhclZpZXciLCJpIiwiTWF0aCIsImZsb29yIiwiU3RyaW5nIiwiY2hhbmdlSHBCeSIsImFtb3VudCIsImNoYW5nZUJ5IiwiY2hhbmdlRXBCeSIsIm1pbiIsIk5ld1Rhc2siLCJjcmVhdGUiLCJUYXNrIiwiY29sb3JlZE51bWJlciIsImNvbXBsZXRlZCIsInVuZG8iLCJjb21wbGV0ZSIsImNoYXJhY3RlciIsIm1hcmtBc0NvbXBsZXRlZCIsImNvbXBsZXRlZEF0IiwidG9kYXkiLCJyZXBsYWNlQ29tcGxldGVXaXRoQ29tcGxldGVkIiwiaW5kZXhPZkNvbXBsZXRlIiwicmVwbGFjZUNvbXBsZXRlZEF0V2l0aENvbXBsZXRlIiwicmVwbGFjZUNvbXBsZXRlZFdpdGhDb21wbGV0ZSIsInJlbW92ZVVzZXJJbnRlcmZhY2UiLCJyZWFzb24iLCJsb2ciLCJ1bkNvbXBsZXRlIiwiRGlzZWFzZSIsImFmZmVjdGVkQXQiLCJhZmZlY3RDaGFyYWN0ZXIiLCJOZXdEaXNlYXNlIiwibnVtYmVyIiwiTnVtYmVyIiwicGFyc2VGbG9hdCIsIm5vdyIsIkRhdGUiLCJkYXkiLCJnZXREYXRlIiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsIlNsZWVwIiwic2xlcHRBdCIsImNvbnRyb2wiLCJTbGVlcENvbnRyb2wiLCJtZXNzYWdlIiwic2xlZXAiLCJjb21tb25Vc2VySW50ZXJmYWNlV2l0aCIsIkZpbHRlciIsInNlYXJjaCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBOztBQUVBLElBQUksdURBQUosR0FBYUEsTUFBYjtBQUNBLHlHQUFBQztBQUNBLHFGQUFBQyxDQUFX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QUNKOztBQUVEQSw0QkFBd0IsR0FBR2pLLElBQTNCLEVBQWlDO0FBQzdCLGVBQU8sQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLEdBQUdBLElBQWhCLEVBQXNCLFNBQXRCLENBQVA7QUFDSDs7QUF4Q2dEO0FBQUE7QUFBQTs7QUE0Q3JELDhHQUFBeUYsQ0FBMkJxRSxZQUEzQixFOzs7Ozs7OztBQ2pEQTs7QUFFTyxNQUFNSSxNQUFOLFNBQXFCLCtFQUFyQixDQUF3Qzs7QUFNM0NsTSxrQkFBYztBQUNWO0FBRFUsYUFKZGlHLGFBSWMsR0FKRSxDQUFDLFFBQUQsQ0FJRjtBQUFBLGFBRmRmLFdBRWMsR0FGQSxFQUVBO0FBRVYsYUFBS2lILE1BQUwsQ0FBWXBKLElBQVosR0FBbUIsSUFBbkI7QUFDSDs7QUFFRG9KLFdBQU90TSxNQUFQLEVBQWU7QUFDWCxhQUFLcUYsV0FBTCxHQUFtQnJGLE1BQW5CO0FBQ0g7O0FBYjBDO0FBQUE7QUFBQTs7QUFpQi9DLDhHQUFBNEgsQ0FBMkJ5RSxNQUEzQixFIiwiZmlsZSI6InB1YmxpYy9qcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGY5MTA1ZjIzNzk4Yjk4ZTYyZjNhIiwiaW1wb3J0IHtmaWx0ZXJUb29sLCByZW5kZXJBbGwsIHJlbmRlclRvb2x9IGZyb20gJy4vUmVuZGVyaW5nJ1xuaW1wb3J0IHtNeVdvcmt9IGZyb20gJy4vTXlXb3JrJ1xuaW1wb3J0IHttYWtlU3VyZUluaXRpYWxPYmplY3RzQXJlUHJlc2VudH0gZnJvbSAnLi9PYmplY3RzJ1xuXG5uZXcgTXlXb3JrKCkucmVsb2FkKClcbm1ha2VTdXJlSW5pdGlhbE9iamVjdHNBcmVQcmVzZW50KClcbnJlbmRlclRvb2woZmlsdGVyVG9vbClcbnJlbmRlckFsbCgpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQge015V29ya30gZnJvbSAnLi9NeVdvcmsnXG5pbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSAnLi9jaGFyYWN0ZXIvQ2hhcmFjdGVyJ1xuaW1wb3J0IHtOZXdUYXNrfSBmcm9tICcuL3Rhc2tzL05ld1Rhc2snXG5pbXBvcnQge05ld0Rpc2Vhc2V9IGZyb20gJy4vZGlzZWFzZXMvTmV3RGlzZWFzZSdcbmltcG9ydCB7U2xlZXB9IGZyb20gJy4vc2xlZXAvU2xlZXAnXG5cbmV4cG9ydCBjb25zdCBpbml0aWFsT2JqZWN0cyA9IFtcbiAgICBuZXcgTXlXb3JrKCksXG4gICAgbmV3IENoYXJhY3RlcigpLFxuICAgIG5ldyBOZXdUYXNrKCksXG4gICAgbmV3IE5ld0Rpc2Vhc2UoKSxcbiAgICBuZXcgU2xlZXAoKSxcbl1cblxubGV0IF9hcHBsaWNhdGlvbk9iamVjdHMgPSBpbml0aWFsT2JqZWN0cy5tYXAoeCA9PiB4KVxuXG5leHBvcnQgY29uc3QgYXBwbGljYXRpb25PYmplY3RzID0gKCkgPT4ge1xuICAgIHJldHVybiBfYXBwbGljYXRpb25PYmplY3RzXG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVBcHBsaWNhdGlvbk9iamVjdHMgPSAob2JqZWN0cykgPT4ge1xuICAgIF9hcHBsaWNhdGlvbk9iamVjdHMgPSBvYmplY3RzXG59XG5cbmV4cG9ydCBjb25zdCBmaW5kRmlyc3RPYmplY3QgPSBvYmplY3RDbGFzcyA9PlxuICAgIGFwcGxpY2F0aW9uT2JqZWN0cygpXG4gICAgICAgIC5maW5kKG9iamVjdCA9PiBvYmplY3QgaW5zdGFuY2VvZiBvYmplY3RDbGFzcylcblxuZXhwb3J0IGNvbnN0IGZpbmRBbGxPYmplY3RzID0gb2JqZWN0Q2xhc3MgPT5cbiAgICBhcHBsaWNhdGlvbk9iamVjdHMoKVxuICAgICAgICAuZmlsdGVyKG9iamVjdCA9PiBvYmplY3QgaW5zdGFuY2VvZiBvYmplY3RDbGFzcylcblxuZXhwb3J0IGNvbnN0IG1ha2VTdXJlSW5pdGlhbE9iamVjdHNBcmVQcmVzZW50ID0gKCkgPT4ge1xuICAgIGluaXRpYWxPYmplY3RzLmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgY29uc3QgZm91bmQgPSBmaW5kRmlyc3RPYmplY3Qob2JqZWN0LmNvbnN0cnVjdG9yKVxuICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbk9iamVjdHMoKS5wdXNoKG9iamVjdClcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbndpbmRvdy5fYXBwbGljYXRpb25PYmplY3RzID0gYXBwbGljYXRpb25PYmplY3RzXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvT2JqZWN0cy5qcyIsImltcG9ydCB7YXBwbGljYXRpb25PYmplY3RzLCBmaW5kRmlyc3RPYmplY3R9IGZyb20gJy4vT2JqZWN0cydcbmltcG9ydCB7VXNlckludGVyZmFjZUF3YXJlfSBmcm9tICcuL1VzZXJJbnRlcmZhY2VBd2FyZSdcbmltcG9ydCB7TXlXb3JrfSBmcm9tICcuL015V29yaydcbmltcG9ydCB7RmlsdGVyfSBmcm9tICcuL0ZpbHRlcidcblxuY29uc3QgYXBwQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG5cbmNvbnN0IHRvb2xzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rvb2xzJylcblxuZXhwb3J0IGNvbnN0IGZpbHRlclRvb2wgPSBuZXcgRmlsdGVyKClcblxuY29uc3QgZXh0cmFjdEFyZ3NTdHJpbmcgPSAoZm5TdHIpID0+IHtcbiAgICByZXR1cm4gZm5TdHIuc2xpY2UoZm5TdHIuaW5kZXhPZignKCcpICsgMSwgZm5TdHIuaW5kZXhPZignKScpKVxufVxuXG5jb25zdCBwYXJzZUFyZ3NTdHJpbmcgPSAoYXJnU3RyKSA9PiB7XG4gICAgcmV0dXJuIGFyZ1N0ci5zcGxpdCgnLCcpXG4gICAgICAgIC5tYXAocyA9PiBzLnRyaW0oKSlcbiAgICAgICAgLmZpbHRlcihzID0+IHMubGVuZ3RoID4gMClcbn1cblxuY29uc3QgcGFyc2VGdW5jdGlvbkFyZ3MgPSAoZm4pID0+IHtcbiAgICBjb25zdCBmblN0ciA9IGZuLnRvU3RyaW5nKClcbiAgICBjb25zdCBhcmdTdHIgPSBleHRyYWN0QXJnc1N0cmluZyhmblN0cilcbiAgICByZXR1cm4gcGFyc2VBcmdzU3RyaW5nKGFyZ1N0cilcbn1cblxuY29uc3QgcmVuZGVySW5wdXRGb3JBcmcgPSAobWV0aG9kRm9ybSwgYXJnKSA9PiB7XG4gICAgY29uc3QgYXJnSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgbWV0aG9kRm9ybS5hcHBlbmRDaGlsZChhcmdJbnB1dClcbiAgICBhcmdJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgYXJnSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGFyZylcbiAgICByZXR1cm4gYXJnSW5wdXRcbn1cblxuY29uc3QgaGFuZGxlTWV0aG9kQ2FsbCA9IChvYmplY3QsIHByb3BlcnR5LCBpbnB1dHMsIGNsZWFyID0gdHJ1ZSkgPT4ge1xuICAgIGNvbnN0IGFyZ3MgPSBpbnB1dHMubWFwKGlucHV0ID0+IGlucHV0LnZhbHVlKVxuICAgIGNvbnN0IHJlc3VsdCA9IHByb3BlcnR5LmNhbGwob2JqZWN0LCAuLi5hcmdzKVxuXG4gICAgaWYgKGNsZWFyKSB7XG4gICAgICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IGlucHV0LnZhbHVlID0gJycpXG5cbiAgICAgICAgaWYgKGlucHV0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpbnB1dHNbMF0uZm9jdXMoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFVzZXJJbnRlcmZhY2VBd2FyZSkge1xuICAgICAgICBhcHBsaWNhdGlvbk9iamVjdHMoKS5wdXNoKHJlc3VsdClcbiAgICAgICAgcmVuZGVyT2JqZWN0KHJlc3VsdClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZW5kZXJBbGwoKVxuICAgIH1cbn1cblxuY29uc3QgcmVuZGVyTWV0aG9kID0gKG9iamVjdCwgb2JqZWN0RGl2LCBuYW1lLCBtZXRob2QpID0+IHtcbiAgICBjb25zdCBhcmdzID0gcGFyc2VGdW5jdGlvbkFyZ3MobWV0aG9kKVxuXG4gICAgY29uc3QgbWV0aG9kRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgb2JqZWN0RGl2LmFwcGVuZENoaWxkKG1ldGhvZEZvcm0pXG4gICAgbWV0aG9kRm9ybS5jbGFzc0xpc3QuYWRkKCdwcm9wZXJ0eScpXG4gICAgbWV0aG9kRm9ybS5jbGFzc0xpc3QuYWRkKCdtZXRob2QnKVxuXG4gICAgaWYgKG1ldGhvZC5kYW5nZXIpIHtcbiAgICAgICAgbWV0aG9kRm9ybS5jbGFzc0xpc3QuYWRkKCdkYW5nZXInKVxuICAgIH1cblxuICAgIGlmIChtZXRob2Quc3VjY2Vzcykge1xuICAgICAgICBtZXRob2RGb3JtLmNsYXNzTGlzdC5hZGQoJ3N1Y2Nlc3MnKVxuICAgIH1cblxuICAgIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgbWV0aG9kRm9ybS5jbGFzc0xpc3QuYWRkKCdtdWx0aWxpbmUnKVxuICAgIH1cblxuICAgIGNvbnN0IGlucHV0cyA9IGFyZ3MubWFwKGFyZyA9PiB7XG4gICAgICAgIHJldHVybiByZW5kZXJJbnB1dEZvckFyZyhtZXRob2RGb3JtLCBhcmcpXG4gICAgfSlcblxuICAgIGlmIChtZXRob2QuYXV0byAmJiBhcmdzLmxlbmd0aCA+IDApIHtcblxuICAgICAgICBjb25zdCBoYW5kbGVBcmdDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZU1ldGhvZENhbGwob2JqZWN0LCBtZXRob2QsIGlucHV0cywgZmFsc2UpXG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICBpbnB1dC5vbmNoYW5nZSA9IGhhbmRsZUFyZ0NoYW5nZVxuICAgICAgICAgICAgaW5wdXQub25rZXl1cCA9IGhhbmRsZUFyZ0NoYW5nZVxuICAgICAgICAgICAgaW5wdXQub25wYXN0ZSA9IGhhbmRsZUFyZ0NoYW5nZVxuICAgICAgICB9KVxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjb25zdCBtZXRob2REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgbWV0aG9kRm9ybS5hcHBlbmRDaGlsZChtZXRob2REaXYpXG4gICAgICAgIG1ldGhvZERpdi50ZXh0Q29udGVudCA9IGAke25hbWV9YFxuICAgICAgICBtZXRob2REaXYuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKVxuXG4gICAgICAgIG1ldGhvZERpdi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVNZXRob2RDYWxsKG9iamVjdCwgbWV0aG9kLCBpbnB1dHMpXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuY29uc3QgcmVuZGVyUHJvcGVydHkgPSAob2JqZWN0RGl2LCBuYW1lLCBwcm9wZXJ0eSkgPT4ge1xuICAgIGNvbnN0IHByb3BlcnR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBvYmplY3REaXYuYXBwZW5kQ2hpbGQocHJvcGVydHlEaXYpXG4gICAgcHJvcGVydHlEaXYuY2xhc3NMaXN0LmFkZCgncHJvcGVydHknKVxuICAgIHByb3BlcnR5RGl2LnRleHRDb250ZW50ID0gYCR7bmFtZX06ICR7cHJvcGVydHl9YFxuXG4gICAgaWYgKHByb3BlcnR5LmNvbG9yKSB7XG4gICAgICAgIHByb3BlcnR5RGl2LmNsYXNzTGlzdC5hZGQocHJvcGVydHkuY29sb3IpXG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5LnRpdGxlKSB7XG4gICAgICAgIHByb3BlcnR5RGl2LnNldEF0dHJpYnV0ZSgndGl0bGUnLCBwcm9wZXJ0eS50aXRsZSlcbiAgICB9XG59XG5cbmNvbnN0IHJlbmRlclVzZXJDb250cm9sID0gKG9iamVjdCwgb2JqZWN0RGl2LCBuYW1lKSA9PiB7XG4gICAgY29uc3QgcHJvcGVydHkgPSBvYmplY3RbbmFtZV1cbiAgICBpZiAocHJvcGVydHkuaGlkZGVuKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcHJvcGVydHkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmVuZGVyTWV0aG9kKG9iamVjdCwgb2JqZWN0RGl2LCBuYW1lLCBwcm9wZXJ0eSlcbiAgICB9IGVsc2Uge1xuICAgICAgICByZW5kZXJQcm9wZXJ0eShvYmplY3REaXYsIG5hbWUsIHByb3BlcnR5KVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlbmRlck9iamVjdCA9IChvYmplY3QsIGNvbnRhaW5lciA9IGFwcENvbnRhaW5lcikgPT4ge1xuICAgIGNvbnN0IG9iamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG9iamVjdERpdilcbiAgICBvYmplY3REaXYuY2xhc3NMaXN0LmFkZCgnb2JqZWN0JylcblxuICAgIG9iamVjdC5vYnRhaW5BbGxVc2VySW50ZXJmYWNlKCkuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgcmVuZGVyVXNlckNvbnRyb2wob2JqZWN0LCBvYmplY3REaXYsIG5hbWUpXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHJlbmRlclRvb2wgPSBvYmplY3QgPT4ge1xuICAgIHJlbmRlck9iamVjdChvYmplY3QsIHRvb2xzQ29udGFpbmVyKVxufVxuXG5jb25zdCBjb250YWlucyA9IChzdHJpbmcsIGZpbHRlcikgPT4ge1xuICAgIGxldCBuYW1lID0gc3RyaW5nLnRvTG93ZXJDYXNlKClcbiAgICBsZXQgc2VhcmNoU3RyaW5nID0gZmlsdGVyLnRvTG93ZXJDYXNlKClcbiAgICByZXR1cm4gbmFtZS5pbmRleE9mKHNlYXJjaFN0cmluZykgPj0gMFxufVxuXG5jb25zdCBjb250YWluc0luT2JqZWN0ID0gKG9iamVjdCwgZmlsdGVyKSA9PiB7XG4gICAgcmV0dXJuIGNvbnRhaW5zKG9iamVjdC5jb25zdHJ1Y3Rvci5uYW1lLCBmaWx0ZXIpIHx8XG4gICAgICAgICAgICBjb250YWlucyhvYmplY3QubmFtZSB8fCAnJywgZmlsdGVyKVxufVxuXG5jb25zdCBlc3NlbnRpYWxDb21wYXJlID0gKGEsIGIpID0+IHtcbiAgICByZXR1cm4gKGIuZXNzZW50aWFsIHx8IDApIC0gKGEuZXNzZW50aWFsIHx8IDApXG59XG5cbmNvbnN0IG9iamVjdENvbXBhcmUgPSAoYSwgYikgPT4ge1xuICAgIGNvbnN0IGNvbXBhcmVCeUVzc2VudGlhbCA9IGVzc2VudGlhbENvbXBhcmUoYSwgYilcblxuICAgIGNvbnN0IGNvbXBhcmVCeUNsYXNzID0gYS5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgICAgIC5sb2NhbGVDb21wYXJlKGIuY29uc3RydWN0b3IubmFtZSlcblxuICAgIGNvbnN0IGNvbXBhcmVCeU5hbWUgPSAoYS5uYW1lIHx8ICcnKVxuICAgICAgICAubG9jYWxlQ29tcGFyZShiLm5hbWUgfHwgJycpXG5cbiAgICBpZiAoY29tcGFyZUJ5RXNzZW50aWFsICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBjb21wYXJlQnlFc3NlbnRpYWxcbiAgICB9XG5cbiAgICBpZiAoY29tcGFyZUJ5Q2xhc3MgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVCeUNsYXNzXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVCeU5hbWVcbn1cblxuZXhwb3J0IGNvbnN0IHJlbmRlckFsbCA9ICgpID0+IHtcblxuICAgIGNvbnN0IG15V29yayA9IGZpbmRGaXJzdE9iamVjdChNeVdvcmspXG4gICAgbXlXb3JrLnJlc3RvcmVTZXR0aW5nc1N0YXRlKClcblxuICAgIGFwcENvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuXG4gICAgYXBwbGljYXRpb25PYmplY3RzKClcbiAgICAgICAgLmZpbHRlcihvYmplY3QgPT4gIW9iamVjdC5oaWRkZW4pXG4gICAgICAgIC5maWx0ZXIob2JqZWN0ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvYmplY3QuZXNzZW50aWFsIHx8XG4gICAgICAgICAgICAgICAgY29udGFpbnNJbk9iamVjdChvYmplY3QsIGZpbHRlclRvb2wuZmlsdGVyVmFsdWUpXG4gICAgICAgIH0pLnNvcnQob2JqZWN0Q29tcGFyZSlcbiAgICAgICAgLmZvckVhY2gob2JqZWN0ID0+IHJlbmRlck9iamVjdChvYmplY3QpKVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlbmRlcmluZy5qcyIsImltcG9ydCB7cmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUsIFVzZXJJbnRlcmZhY2VBd2FyZSwgdXNlckludGVyZmFjZUF3YXJlQ2xhc3Nlc30gZnJvbSAnLi9Vc2VySW50ZXJmYWNlQXdhcmUnXG5pbXBvcnQge2FwcGxpY2F0aW9uT2JqZWN0cywgZmluZEZpcnN0T2JqZWN0LCBpbml0aWFsT2JqZWN0cywgdXBkYXRlQXBwbGljYXRpb25PYmplY3RzfSBmcm9tICcuL09iamVjdHMnXG5pbXBvcnQge3JlbmRlckFsbH0gZnJvbSAnLi9SZW5kZXJpbmcnXG5cbmNvbnN0IGNyZWF0ZU9iamVjdEZyb21SYXcgPSAocmF3T2JqZWN0KSA9PiB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gcmF3T2JqZWN0Lm9iamVjdFxuICAgIGNvbnN0IGZvdW5kQ2xhc3MgPSB1c2VySW50ZXJmYWNlQXdhcmVDbGFzc2VzLmZpbmQoYyA9PiBjLm5hbWUgPT09IGNsYXNzTmFtZSlcblxuICAgIGlmIChmb3VuZENsYXNzKSB7XG4gICAgICAgIGNvbnN0IHByaXN0aW5lT2JqZWN0ID0gbmV3IGZvdW5kQ2xhc3MoKVxuICAgICAgICBjb25zdCB0YXJnZXQgPSBuZXcgZm91bmRDbGFzcygpXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCByYXdPYmplY3QpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXQudXNlckludGVyZmFjZSA9IHByaXN0aW5lT2JqZWN0LnVzZXJJbnRlcmZhY2VcblxuICAgICAgICByZXR1cm4gdGFyZ2V0XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGNsYXNzIE15V29yayBleHRlbmRzIFVzZXJJbnRlcmZhY2VBd2FyZSB7XG5cbiAgICB1c2VySW50ZXJmYWNlID0gWydzYXZlJywgJ3NldHRpbmdzJywgJ3JlbG9hZCcsICdyZXNldCddXG4gICAgbG9jYWxTdG9yYWdlS2V5ID0gJ015V29yay5zYXZlZFdvcmsnXG4gICAgc2V0dGluZ3NTaG93biA9IHRydWVcbiAgICBlc3NlbnRpYWwgPSAxMDBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuc2F2ZS5zdWNjZXNzID0gdHJ1ZVxuICAgICAgICB0aGlzLnJlc2V0LmRhbmdlciA9IHRydWVcbiAgICAgICAgdGhpcy5yZWxvYWQuc2V0dGluZyA9IHRydWVcbiAgICAgICAgdGhpcy5yZXNldC5zZXR0aW5nID0gdHJ1ZVxuICAgIH1cblxuICAgIHNhdmUoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShhcHBsaWNhdGlvbk9iamVjdHMoKSlcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXksIGRhdGEpXG4gICAgfVxuXG4gICAgcmVsb2FkKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkpXG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCByYXdPYmplY3RzID0gSlNPTi5wYXJzZShkYXRhKVxuICAgICAgICAgICAgY29uc3Qgb2JqZWN0cyA9IHJhd09iamVjdHNcbiAgICAgICAgICAgICAgICAubWFwKGNyZWF0ZU9iamVjdEZyb21SYXcpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihvYmplY3QgPT4gb2JqZWN0ICE9PSBudWxsKVxuXG4gICAgICAgICAgICB1cGRhdGVBcHBsaWNhdGlvbk9iamVjdHMob2JqZWN0cylcblxuICAgICAgICAgICAgYXBwbGljYXRpb25PYmplY3RzKClcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChvID0+IG8udXBkYXRlQWZ0ZXJMb2FkKCkpXG5cbiAgICAgICAgICAgIGZpbmRGaXJzdE9iamVjdChNeVdvcmspLnJlc3RvcmVTZXR0aW5nc1N0YXRlKClcblxuICAgICAgICAgICAgcmVuZGVyQWxsKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB1cGRhdGVBcHBsaWNhdGlvbk9iamVjdHMoaW5pdGlhbE9iamVjdHMpXG4gICAgICAgIHJlbmRlckFsbCgpXG4gICAgfVxuXG4gICAgc2V0dGluZ3MoKSB7XG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzU2hvd24pIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVNldHRpbmdzKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NldHRpbmdzKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc3RvcmVTZXR0aW5nc1N0YXRlKCkge1xuICAgICAgICBpZiAodGhpcy5zZXR0aW5nc1Nob3duKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dTZXR0aW5ncygpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVTZXR0aW5ncygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlU2V0dGluZ3MoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3NTaG93biA9IGZhbHNlXG5cbiAgICAgICAgYXBwbGljYXRpb25PYmplY3RzKClcbiAgICAgICAgICAgIC5maWx0ZXIobyA9PiBvLnNldHRpbmcpXG4gICAgICAgICAgICAuZm9yRWFjaChvID0+IG8uaGlkZVVzZXJJbnRlcmZhY2UoKSlcblxuICAgICAgICBhcHBsaWNhdGlvbk9iamVjdHMoKVxuICAgICAgICAgICAgLmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgICAgICAgICBvYmoub2J0YWluQWxsVXNlckludGVyZmFjZSgpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAobmFtZSA9PiBvYmpbbmFtZV0pXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIocHJvcCA9PiBwcm9wLnNldHRpbmcpXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKHByb3AgPT4gcHJvcC5oaWRkZW4gPSB0cnVlKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzaG93U2V0dGluZ3MoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3NTaG93biA9IHRydWVcblxuICAgICAgICBhcHBsaWNhdGlvbk9iamVjdHMoKVxuICAgICAgICAgICAgLmZpbHRlcihvID0+IG8uc2V0dGluZyB8fCBvLmhpZGRlbilcbiAgICAgICAgICAgIC5mb3JFYWNoKG8gPT4gby5zaG93VXNlckludGVyZmFjZSgpKVxuXG4gICAgICAgIGFwcGxpY2F0aW9uT2JqZWN0cygpXG4gICAgICAgICAgICAuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgICAgIG9iai5vYnRhaW5BbGxVc2VySW50ZXJmYWNlKClcbiAgICAgICAgICAgICAgICAgICAgLm1hcChuYW1lID0+IG9ialtuYW1lXSlcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihwcm9wID0+IHByb3Auc2V0dGluZylcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2gocHJvcCA9PiBwcm9wLmhpZGRlbiA9IGZhbHNlKVxuICAgICAgICAgICAgfSlcbiAgICB9XG59XG5cbnJlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlKE15V29yaylcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTXlXb3JrLmpzIiwiaW1wb3J0IHthcHBsaWNhdGlvbk9iamVjdHN9IGZyb20gJy4vT2JqZWN0cydcbmltcG9ydCB7cmVuZGVyQWxsfSBmcm9tICcuL1JlbmRlcmluZydcblxuZXhwb3J0IGNvbnN0IHVzZXJJbnRlcmZhY2VBd2FyZUNsYXNzZXMgPSBbXVxuXG5leHBvcnQgY2xhc3MgVXNlckludGVyZmFjZUF3YXJlIHtcblxuICAgIGRlZmF1bHRVc2VySW50ZXJmYWNlID0gWydvYmplY3QnXVxuICAgIHVzZXJJbnRlcmZhY2UgPSBbXVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICh1c2VySW50ZXJmYWNlQXdhcmVDbGFzc2VzLmluZGV4T2YodGhpcy5jb25zdHJ1Y3RvcikgPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYFlvdSBmb3Jnb3QgdG8gcmVnaXN0ZXIgYSB1c2VyIGludGVyZmFjZSBhd2FyZSBjbGFzcyAke3RoaXMuY29uc3RydWN0b3IubmFtZX1gKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vYmplY3QgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWVcbiAgICAgICAgdGhpcy5kZXN0cm95LmRhbmdlciA9IHRydWVcbiAgICAgICAgdGhpcy5kZXN0cm95LnNldHRpbmcgPSB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7QXJyYXk8U3RyaW5nPn1cbiAgICAgKi9cbiAgICBvYnRhaW5BbGxVc2VySW50ZXJmYWNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0VXNlckludGVyZmFjZS5jb25jYXQodGhpcy51c2VySW50ZXJmYWNlKVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gYXBwbGljYXRpb25PYmplY3RzKCkuaW5kZXhPZih0aGlzKVxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgYXBwbGljYXRpb25PYmplY3RzKCkuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgICAgcmVuZGVyQWxsKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVVc2VySW50ZXJmYWNlKCkge1xuICAgICAgICB0aGlzLmhpZGRlbiA9IHRydWVcbiAgICB9XG5cbiAgICBzaG93VXNlckludGVyZmFjZSgpIHtcbiAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZVxuICAgIH1cblxuICAgIHVwZGF0ZUFmdGVyTG9hZCgpIHt9XG5cbn1cblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlID0gYUNsYXNzID0+IHtcbiAgICB1c2VySW50ZXJmYWNlQXdhcmVDbGFzc2VzLnB1c2goYUNsYXNzKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Vc2VySW50ZXJmYWNlQXdhcmUuanMiLCJpbXBvcnQge3JlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlLCBVc2VySW50ZXJmYWNlQXdhcmV9IGZyb20gJy4uL1VzZXJJbnRlcmZhY2VBd2FyZSdcblxuZXhwb3J0IGNsYXNzIENoYXJhY3RlciBleHRlbmRzIFVzZXJJbnRlcmZhY2VBd2FyZSB7XG5cbiAgICB1c2VySW50ZXJmYWNlID0gWyduYW1lJywgJ2hwJywgJ2VwJywgJ2NoYW5nZSddXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuXG4gICAgICAgIHRoaXMuY2hhbmdlLnNldHRpbmcgPSB0cnVlXG4gICAgfVxuXG4gICAgbmFtZSA9ICcnXG4gICAgZXNzZW50aWFsID0gOTBcblxuICAgIF9tYXhIcCA9IDVcbiAgICBfaHAgPSA1XG4gICAgZ2V0IGhwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJCYXIodGhpcy5faHAsIHRoaXMuX21heEhwLCAn4pml77iPJywgJ+KZoScpXG4gICAgfVxuXG4gICAgX21heEVwID0gNVxuICAgIF9lcCA9IDVcbiAgICBnZXQgZXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckJhcih0aGlzLl9lcCwgdGhpcy5fbWF4RXAsICfimqHvuI/vuI8nLCAn4pi8JylcbiAgICB9XG5cbiAgICBjaGFuZ2UobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgfVxuXG4gICAgcmVuZGVyQmFyKGN1cnJlbnQsIG1heCwgZmlsbGVkU3ltYm9sLCBlbXB0eVN5bWJvbCkge1xuICAgICAgICBsZXQgYmFyVmlldyA9ICcnXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLmZsb29yKGN1cnJlbnQpOyBpKyspIHtcbiAgICAgICAgICAgIGJhclZpZXcgKz0gZmlsbGVkU3ltYm9sXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gTWF0aC5mbG9vcihjdXJyZW50KTsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgICAgICBiYXJWaWV3ICs9IGVtcHR5U3ltYm9sXG4gICAgICAgIH1cblxuICAgICAgICAvL25vaW5zcGVjdGlvbiBKU1ByaW1pdGl2ZVR5cGVXcmFwcGVyVXNhZ2VcbiAgICAgICAgYmFyVmlldyA9IG5ldyBTdHJpbmcoYmFyVmlldylcbiAgICAgICAgLy9ub2luc3BlY3Rpb24gSlNQcmltaXRpdmVUeXBlV3JhcHBlclVzYWdlXG4gICAgICAgIGJhclZpZXcudGl0bGUgPSBgJHtjdXJyZW50fS8ke21heH1gXG5cbiAgICAgICAgcmV0dXJuIGJhclZpZXdcbiAgICB9XG5cbiAgICBjaGFuZ2VIcEJ5KGFtb3VudCkge1xuICAgICAgICB0aGlzLl9ocCA9IHRoaXMuY2hhbmdlQnkodGhpcy5faHAsIHRoaXMuX21heEhwLCBhbW91bnQpXG4gICAgfVxuXG4gICAgY2hhbmdlRXBCeShhbW91bnQpIHtcbiAgICAgICAgdGhpcy5fZXAgPSB0aGlzLmNoYW5nZUJ5KHRoaXMuX2VwLCB0aGlzLl9tYXhFcCwgYW1vdW50KVxuICAgIH1cblxuICAgIGNoYW5nZUJ5KGN1cnJlbnQsIG1heCwgYW1vdW50KSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXgsIGN1cnJlbnQgKyBhbW91bnQpKVxuICAgIH1cblxufVxuXG5yZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZShDaGFyYWN0ZXIpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NoYXJhY3Rlci9DaGFyYWN0ZXIuanMiLCJpbXBvcnQge3JlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlLCBVc2VySW50ZXJmYWNlQXdhcmV9IGZyb20gJy4uL1VzZXJJbnRlcmZhY2VBd2FyZSdcbmltcG9ydCB7VGFza30gZnJvbSAnLi9UYXNrJ1xuXG5leHBvcnQgY2xhc3MgTmV3VGFzayBleHRlbmRzIFVzZXJJbnRlcmZhY2VBd2FyZSB7XG5cbiAgICB1c2VySW50ZXJmYWNlID0gWydjcmVhdGUnXVxuICAgIHNldHRpbmcgPSB0cnVlXG4gICAgZXNzZW50aWFsID0gNTBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuY3JlYXRlLnN1Y2Nlc3MgPSB0cnVlXG4gICAgfVxuXG4gICAgY3JlYXRlKG5hbWUsIGhwLCBlcCkge1xuICAgICAgICByZXR1cm4gbmV3IFRhc2sobmFtZSwgaHAsIGVwKVxuICAgIH1cblxufVxuXG5yZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZShOZXdUYXNrKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90YXNrcy9OZXdUYXNrLmpzIiwiaW1wb3J0IHtyZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZSwgVXNlckludGVyZmFjZUF3YXJlfSBmcm9tICcuLi9Vc2VySW50ZXJmYWNlQXdhcmUnXG5pbXBvcnQge2ZpbmRGaXJzdE9iamVjdH0gZnJvbSAnLi4vT2JqZWN0cydcbmltcG9ydCB7Q2hhcmFjdGVyfSBmcm9tICcuLi9jaGFyYWN0ZXIvQ2hhcmFjdGVyJ1xuaW1wb3J0IHtjb2xvcmVkTnVtYmVyLCB0b2RheX0gZnJvbSAnLi4vdXRpbCdcblxuZXhwb3J0IGNsYXNzIFRhc2sgZXh0ZW5kcyBVc2VySW50ZXJmYWNlQXdhcmUge1xuXG4gICAgdXNlckludGVyZmFjZSA9IFsnbmFtZScsICdocCcsICdlcCcsICdjb21wbGV0ZScsICdkZXN0cm95J11cbiAgICBuYW1lXG5cbiAgICBfaHAgPSAwXG4gICAgZ2V0IGhwKCkge1xuICAgICAgICByZXR1cm4gY29sb3JlZE51bWJlcih0aGlzLl9ocClcbiAgICB9XG5cbiAgICBfZXAgPSAwXG4gICAgZ2V0IGVwKCkge1xuICAgICAgICByZXR1cm4gY29sb3JlZE51bWJlcih0aGlzLl9lcClcbiAgICB9XG5cbiAgICBnZXQgY29tcGxldGVkKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9TdHJpbmc6ICgpID0+ICdkb25lJyxcbiAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IobmFtZSwgaHAsIGVwKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLl9ocCA9IGhwXG4gICAgICAgIHRoaXMuX2VwID0gZXBcblxuICAgICAgICB0aGlzLnVuZG8uZGFuZ2VyID0gdHJ1ZVxuICAgICAgICB0aGlzLnVuZG8uc2V0dGluZyA9IHRydWVcbiAgICB9XG5cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyID0gZmluZEZpcnN0T2JqZWN0KENoYXJhY3RlcilcblxuICAgICAgICBpZiAoY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICBjaGFyYWN0ZXIuY2hhbmdlSHBCeSh0aGlzLmhwKVxuICAgICAgICAgICAgY2hhcmFjdGVyLmNoYW5nZUVwQnkodGhpcy5lcClcblxuICAgICAgICAgICAgdGhpcy5tYXJrQXNDb21wbGV0ZWQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFya0FzQ29tcGxldGVkKCkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlZEF0ID0gdG9kYXkoKVxuICAgICAgICB0aGlzLnJlcGxhY2VDb21wbGV0ZVdpdGhDb21wbGV0ZWQoKVxuICAgIH1cblxuICAgIHJlcGxhY2VDb21wbGV0ZVdpdGhDb21wbGV0ZWQoKSB7XG4gICAgICAgIGxldCBpbmRleE9mQ29tcGxldGUgPSB0aGlzLnVzZXJJbnRlcmZhY2UuaW5kZXhPZignY29tcGxldGUnKVxuICAgICAgICB0aGlzLnVzZXJJbnRlcmZhY2Uuc3BsaWNlKGluZGV4T2ZDb21wbGV0ZSwgMSwgJ2NvbXBsZXRlZCcsICdjb21wbGV0ZWRBdCcsICd1bmRvJylcbiAgICB9XG5cbiAgICByZXBsYWNlQ29tcGxldGVkQXRXaXRoQ29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMucmVwbGFjZUNvbXBsZXRlZFdpdGhDb21wbGV0ZSgpXG4gICAgICAgIHRoaXMucmVtb3ZlVXNlckludGVyZmFjZSgnY29tcGxldGVkQXQnKVxuICAgICAgICB0aGlzLnJlbW92ZVVzZXJJbnRlcmZhY2UoJ3VuZG8nKVxuICAgIH1cblxuICAgIHJlbW92ZVVzZXJJbnRlcmZhY2Uocykge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnVzZXJJbnRlcmZhY2UuaW5kZXhPZihzKVxuICAgICAgICBpZiAoaW5kZXggPj0gMCkgdGhpcy51c2VySW50ZXJmYWNlLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG5cbiAgICByZXBsYWNlQ29tcGxldGVkV2l0aENvbXBsZXRlKCkge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnVzZXJJbnRlcmZhY2UuaW5kZXhPZignY29tcGxldGVkJylcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHRoaXMudXNlckludGVyZmFjZS5zcGxpY2UoaW5kZXgsIDEsICdjb21wbGV0ZScpXG4gICAgfVxuXG4gICAgdXBkYXRlQWZ0ZXJMb2FkKCkge1xuICAgICAgICBpZiAodGhpcy5jb21wbGV0ZWRBdCA9PT0gdG9kYXkoKSkge1xuICAgICAgICAgICAgdGhpcy5yZXBsYWNlQ29tcGxldGVXaXRoQ29tcGxldGVkKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuZG8ocmVhc29uKSB7XG4gICAgICAgIGlmIChyZWFzb24ubGVuZ3RoIDwgMTApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdZb3UgbmVlZCB0byBwcm92aWRlIGEgZ29vZCByZWFzb24gdG8gdW5kbyB0aGUgdGFzaycpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoYXJhY3RlciA9IGZpbmRGaXJzdE9iamVjdChDaGFyYWN0ZXIpXG4gICAgICAgIGNoYXJhY3Rlci5jaGFuZ2VIcEJ5KC10aGlzLmhwKVxuICAgICAgICBjaGFyYWN0ZXIuY2hhbmdlRXBCeSgtdGhpcy5lcClcbiAgICAgICAgdGhpcy51bkNvbXBsZXRlKClcbiAgICB9XG5cbiAgICB1bkNvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlZEF0ID0gJydcbiAgICAgICAgdGhpcy5yZXBsYWNlQ29tcGxldGVkQXRXaXRoQ29tcGxldGUoKVxuICAgIH1cbn1cblxucmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUoVGFzaylcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGFza3MvVGFzay5qcyIsImltcG9ydCB7cmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUsIFVzZXJJbnRlcmZhY2VBd2FyZX0gZnJvbSAnLi4vVXNlckludGVyZmFjZUF3YXJlJ1xuaW1wb3J0IHtjb2xvcmVkTnVtYmVyLCB0b2RheX0gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCB7ZmluZEZpcnN0T2JqZWN0fSBmcm9tICcuLi9PYmplY3RzJ1xuaW1wb3J0IHtDaGFyYWN0ZXJ9IGZyb20gJy4uL2NoYXJhY3Rlci9DaGFyYWN0ZXInXG5cbmV4cG9ydCBjbGFzcyBEaXNlYXNlIGV4dGVuZHMgVXNlckludGVyZmFjZUF3YXJlIHtcblxuICAgIHVzZXJJbnRlcmZhY2UgPSBbJ25hbWUnLCAnaHAnLCAnZXAnLCAnYWZmZWN0ZWRBdCcsICdkZXN0cm95J11cbiAgICBuYW1lXG4gICAgYWZmZWN0ZWRBdFxuXG4gICAgX2hwXG4gICAgZ2V0IGhwKCkge1xuICAgICAgICByZXR1cm4gY29sb3JlZE51bWJlcih0aGlzLl9ocClcbiAgICB9XG5cbiAgICBfZXBcbiAgICBnZXQgZXAoKSB7XG4gICAgICAgIHJldHVybiBjb2xvcmVkTnVtYmVyKHRoaXMuX2VwKVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGhwLCBlcCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5faHAgPSBocFxuICAgICAgICB0aGlzLl9lcCA9IGVwXG4gICAgICAgIHRoaXMuYWZmZWN0ZWRBdCA9ICcnXG4gICAgfVxuXG4gICAgdXBkYXRlQWZ0ZXJMb2FkKCkge1xuICAgICAgICBpZiAodGhpcy5hZmZlY3RlZEF0ICE9PSB0b2RheSgpKSB7XG4gICAgICAgICAgICB0aGlzLmFmZmVjdENoYXJhY3RlcigpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZmZlY3RDaGFyYWN0ZXIoKSB7XG4gICAgICAgIHRoaXMuYWZmZWN0ZWRBdCA9IHRvZGF5KClcblxuICAgICAgICBjb25zdCBjaGFyYWN0ZXIgPSBmaW5kRmlyc3RPYmplY3QoQ2hhcmFjdGVyKVxuICAgICAgICBjaGFyYWN0ZXIuY2hhbmdlSHBCeSh0aGlzLmhwKVxuICAgICAgICBjaGFyYWN0ZXIuY2hhbmdlRXBCeSh0aGlzLmVwKVxuICAgIH1cbn1cblxucmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUoRGlzZWFzZSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlzZWFzZXMvRGlzZWFzZS5qcyIsImltcG9ydCB7cmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUsIFVzZXJJbnRlcmZhY2VBd2FyZX0gZnJvbSAnLi4vVXNlckludGVyZmFjZUF3YXJlJ1xuaW1wb3J0IHtEaXNlYXNlfSBmcm9tICcuL0Rpc2Vhc2UnXG5cbmV4cG9ydCBjbGFzcyBOZXdEaXNlYXNlIGV4dGVuZHMgVXNlckludGVyZmFjZUF3YXJlIHtcblxuICAgIHVzZXJJbnRlcmZhY2UgPSBbJ2NyZWF0ZSddXG4gICAgc2V0dGluZyA9IHRydWVcbiAgICBlc3NlbnRpYWwgPSA1MFxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5jcmVhdGUuc3VjY2VzcyA9IHRydWVcbiAgICB9XG5cbiAgICBjcmVhdGUobmFtZSwgaHAsIGVwKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGlzZWFzZShuYW1lLCBocCwgZXApXG4gICAgfVxuXG59XG5cbnJlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlKE5ld0Rpc2Vhc2UpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Rpc2Vhc2VzL05ld0Rpc2Vhc2UuanMiLCJleHBvcnQgY29uc3QgY29sb3JlZE51bWJlciA9IG51bWJlciA9PiB7XG4gICAgLy9ub2luc3BlY3Rpb24gSlNQcmltaXRpdmVUeXBlV3JhcHBlclVzYWdlXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IE51bWJlcihwYXJzZUZsb2F0KG51bWJlcikpXG5cbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICAvL25vaW5zcGVjdGlvbiBKU1ByaW1pdGl2ZVR5cGVXcmFwcGVyVXNhZ2VcbiAgICAgICAgcmVzdWx0LmNvbG9yID0gJ3JlZCdcbiAgICB9IGVsc2UgaWYgKG51bWJlciA+IDApIHtcbiAgICAgICAgLy9ub2luc3BlY3Rpb24gSlNQcmltaXRpdmVUeXBlV3JhcHBlclVzYWdlXG4gICAgICAgIHJlc3VsdC5jb2xvciA9ICdncmVlbidcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBjb25zdCB0b2RheSA9ICgpID0+IHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpXG5cbiAgICBjb25zdCBkYXkgPSBub3cuZ2V0RGF0ZSgpXG4gICAgY29uc3QgbW9udGggPSBub3cuZ2V0TW9udGgoKSArIDFcbiAgICBjb25zdCB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKClcblxuICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC5qcyIsImltcG9ydCB7cmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUsIFVzZXJJbnRlcmZhY2VBd2FyZX0gZnJvbSAnLi4vVXNlckludGVyZmFjZUF3YXJlJ1xuaW1wb3J0IHt0b2RheX0gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCB7ZmluZEFsbE9iamVjdHMsIGZpbmRGaXJzdE9iamVjdH0gZnJvbSAnLi4vT2JqZWN0cydcbmltcG9ydCB7Q2hhcmFjdGVyfSBmcm9tICcuLi9jaGFyYWN0ZXIvQ2hhcmFjdGVyJ1xuaW1wb3J0IHtTbGVlcENvbnRyb2x9IGZyb20gJy4vU2xlZXBDb250cm9sJ1xuXG5cbmV4cG9ydCBjbGFzcyBTbGVlcCBleHRlbmRzIFVzZXJJbnRlcmZhY2VBd2FyZSB7XG5cbiAgICB1c2VySW50ZXJmYWNlID0gWydzbGVwdEF0JywgJ2FkZCBzbGVlcCBjb250cm9sJ11cblxuICAgIG5hbWVcbiAgICBzbGVwdEF0XG4gICAgZXNzZW50aWFsID0gNTBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuc2xlcHRBdCA9ICcnXG5cbiAgICAgICAgdGhpc1snYWRkIHNsZWVwIGNvbnRyb2wnXS5zZXR0aW5nID0gdHJ1ZVxuICAgICAgICB0aGlzWydhZGQgc2xlZXAgY29udHJvbCddLnN1Y2Nlc3MgPSB0cnVlXG4gICAgfVxuXG4gICAgWydhZGQgc2xlZXAgY29udHJvbCddKG5hbWUsIGhwLCBlcCkge1xuICAgICAgICByZXR1cm4gbmV3IFNsZWVwQ29udHJvbChuYW1lLCBocCwgZXApXG4gICAgfVxuXG4gICAgYWZmZWN0Q2hhcmFjdGVyKGhwLCBlcCkge1xuICAgICAgICB0aGlzLnNsZXB0QXQgPSB0b2RheSgpXG5cbiAgICAgICAgY29uc3QgY2hhcmFjdGVyID0gZmluZEZpcnN0T2JqZWN0KENoYXJhY3RlcilcbiAgICAgICAgY2hhcmFjdGVyLmNoYW5nZUhwQnkoaHApXG4gICAgICAgIGNoYXJhY3Rlci5jaGFuZ2VFcEJ5KGVwKVxuXG4gICAgICAgIGZpbmRBbGxPYmplY3RzKFNsZWVwQ29udHJvbClcbiAgICAgICAgICAgIC5mb3JFYWNoKGNvbnRyb2wgPT4gY29udHJvbC51cGRhdGVBZnRlckxvYWQoKSlcbiAgICB9XG5cbn1cblxucmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUoU2xlZXApXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NsZWVwL1NsZWVwLmpzIiwiaW1wb3J0IHtyZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZSwgVXNlckludGVyZmFjZUF3YXJlfSBmcm9tICcuLi9Vc2VySW50ZXJmYWNlQXdhcmUnXG5pbXBvcnQge2NvbG9yZWROdW1iZXIsIHRvZGF5fSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtmaW5kRmlyc3RPYmplY3R9IGZyb20gJy4uL09iamVjdHMnXG5pbXBvcnQge1NsZWVwfSBmcm9tICcuL1NsZWVwJ1xuXG5leHBvcnQgY2xhc3MgU2xlZXBDb250cm9sIGV4dGVuZHMgVXNlckludGVyZmFjZUF3YXJlIHtcblxuICAgIG5hbWUgPSAnJ1xuICAgIG1lc3NhZ2UgPSAnYWxyZWFkeSBzbGVwdCdcblxuICAgIF9ocCA9IDBcbiAgICBnZXQgaHAoKSB7XG4gICAgICAgIHJldHVybiBjb2xvcmVkTnVtYmVyKHRoaXMuX2hwKVxuICAgIH1cblxuICAgIF9lcCA9IDBcbiAgICBnZXQgZXAoKSB7XG4gICAgICAgIHJldHVybiBjb2xvcmVkTnVtYmVyKHRoaXMuX2VwKVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGhwLCBlcCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5faHAgPSBocFxuICAgICAgICB0aGlzLl9lcCA9IGVwXG5cbiAgICAgICAgdGhpcy51cGRhdGVBZnRlckxvYWQoKVxuICAgIH1cblxuICAgIHVwZGF0ZUFmdGVyTG9hZCgpIHtcbiAgICAgICAgY29uc3Qgc2xlZXAgPSBmaW5kRmlyc3RPYmplY3QoU2xlZXApXG5cbiAgICAgICAgdGhpc1t0aGlzLm5hbWVdID0gKCkgPT4ge1xuICAgICAgICAgICAgc2xlZXAuYWZmZWN0Q2hhcmFjdGVyKHRoaXMuaHAsIHRoaXMuZXApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2xlZXAuc2xlcHRBdCAhPT0gdG9kYXkoKSkge1xuICAgICAgICAgICAgdGhpcy51c2VySW50ZXJmYWNlID0gdGhpcy5jb21tb25Vc2VySW50ZXJmYWNlV2l0aCh0aGlzLm5hbWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJJbnRlcmZhY2UgPSB0aGlzLmNvbW1vblVzZXJJbnRlcmZhY2VXaXRoKCdtZXNzYWdlJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbW1vblVzZXJJbnRlcmZhY2VXaXRoKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIFsnaHAnLCAnZXAnLCAuLi5hcmdzLCAnZGVzdHJveSddXG4gICAgfVxuXG59XG5cbnJlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlKFNsZWVwQ29udHJvbClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2xlZXAvU2xlZXBDb250cm9sLmpzIiwiaW1wb3J0IHtyZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZSwgVXNlckludGVyZmFjZUF3YXJlfSBmcm9tICcuL1VzZXJJbnRlcmZhY2VBd2FyZSdcblxuZXhwb3J0IGNsYXNzIEZpbHRlciBleHRlbmRzIFVzZXJJbnRlcmZhY2VBd2FyZSB7XG5cbiAgICB1c2VySW50ZXJmYWNlID0gWydzZWFyY2gnXVxuXG4gICAgZmlsdGVyVmFsdWUgPSAnJ1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5zZWFyY2guYXV0byA9IHRydWVcbiAgICB9XG5cbiAgICBzZWFyY2goZmlsdGVyKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyVmFsdWUgPSBmaWx0ZXJcbiAgICB9XG5cbn1cblxucmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUoRmlsdGVyKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9GaWx0ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9