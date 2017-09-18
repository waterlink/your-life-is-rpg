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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Objects__ = __webpack_require__(1);
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
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MyWork__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__character_Character__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasks_NewTask__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__diseases_NewDisease__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sleep_Sleep__ = __webpack_require__(6);






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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(0);


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
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Objects__ = __webpack_require__(1);
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
        this.userInterface = ['save', 'settings', 'reload', 'importIt', 'reset'];
        this.localStorageKey = 'MyWork.savedWork';
        this.settingsShown = true;
        this.essential = 100;
        this.export = '';
        this.save.success = true;
        this.reset.danger = true;
        this.reload.setting = true;
        this.reset.setting = true;
        this.importIt.setting = true;
        this.importIt.danger = true;
    }

    save() {
        const data = JSON.stringify(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Objects__["b" /* applicationObjects */])());
        localStorage.setItem(this.localStorageKey, data);
    }

    importIt(data) {
        localStorage.setItem(this.localStorageKey, data);
        this.reload();
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UserInterfaceAware__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MyWork__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Filter__ = __webpack_require__(7);





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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__character_Character__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SleepControl__ = __webpack_require__(11);






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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(0);


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

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__character_Character__ = __webpack_require__(2);





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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Disease__ = __webpack_require__(8);



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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rendering__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MyWork__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Objects__ = __webpack_require__(1);




new __WEBPACK_IMPORTED_MODULE_1__MyWork__["a" /* MyWork */]().reload();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Objects__["a" /* makeSureInitialObjectsArePresent */])();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Rendering__["a" /* renderTool */])(__WEBPACK_IMPORTED_MODULE_0__Rendering__["b" /* filterTool */]);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Rendering__["c" /* renderAll */])();

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Sleep__ = __webpack_require__(6);





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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(0);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__character_Character__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(3);





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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzg4ZmU1NDYxNDRiYzM1MjYwMmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJJbnRlcmZhY2VBd2FyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVyL0NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTXlXb3JrLmpzIiwid2VicGFjazovLy8uL3NyYy9SZW5kZXJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NsZWVwL1NsZWVwLmpzIiwid2VicGFjazovLy8uL3NyYy9GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc2Vhc2VzL0Rpc2Vhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc2Vhc2VzL05ld0Rpc2Vhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zbGVlcC9TbGVlcENvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL05ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL1Rhc2suanMiXSwibmFtZXMiOlsidXNlckludGVyZmFjZUF3YXJlQ2xhc3NlcyIsIlVzZXJJbnRlcmZhY2VBd2FyZSIsImNvbnN0cnVjdG9yIiwiZGVmYXVsdFVzZXJJbnRlcmZhY2UiLCJ1c2VySW50ZXJmYWNlIiwiaW5kZXhPZiIsIkVycm9yIiwibmFtZSIsIm9iamVjdCIsImRlc3Ryb3kiLCJkYW5nZXIiLCJzZXR0aW5nIiwib2J0YWluQWxsVXNlckludGVyZmFjZSIsImNvbmNhdCIsImluZGV4IiwiYXBwbGljYXRpb25PYmplY3RzIiwic3BsaWNlIiwicmVuZGVyQWxsIiwiaGlkZVVzZXJJbnRlcmZhY2UiLCJoaWRkZW4iLCJzaG93VXNlckludGVyZmFjZSIsInVwZGF0ZUFmdGVyTG9hZCIsInJlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlIiwiYUNsYXNzIiwicHVzaCIsImluaXRpYWxPYmplY3RzIiwiX2FwcGxpY2F0aW9uT2JqZWN0cyIsIm1hcCIsIngiLCJ1cGRhdGVBcHBsaWNhdGlvbk9iamVjdHMiLCJvYmplY3RzIiwiZmluZEZpcnN0T2JqZWN0Iiwib2JqZWN0Q2xhc3MiLCJmaW5kIiwiZmluZEFsbE9iamVjdHMiLCJmaWx0ZXIiLCJtYWtlU3VyZUluaXRpYWxPYmplY3RzQXJlUHJlc2VudCIsImZvckVhY2giLCJmb3VuZCIsIndpbmRvdyIsIkNoYXJhY3RlciIsImVzc2VudGlhbCIsIl9tYXhIcCIsIl9ocCIsIl9tYXhFcCIsIl9lcCIsImNoYW5nZSIsImhwIiwicmVuZGVyQmFyIiwiZXAiLCJjdXJyZW50IiwibWF4IiwiZmlsbGVkU3ltYm9sIiwiZW1wdHlTeW1ib2wiLCJiYXJWaWV3IiwiaSIsIk1hdGgiLCJmbG9vciIsIlN0cmluZyIsInRpdGxlIiwiY2hhbmdlSHBCeSIsImFtb3VudCIsImNoYW5nZUJ5IiwiY2hhbmdlRXBCeSIsIm1pbiIsImNvbG9yZWROdW1iZXIiLCJudW1iZXIiLCJyZXN1bHQiLCJOdW1iZXIiLCJwYXJzZUZsb2F0IiwiY29sb3IiLCJ0b2RheSIsIm5vdyIsIkRhdGUiLCJkYXkiLCJnZXREYXRlIiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImNyZWF0ZU9iamVjdEZyb21SYXciLCJyYXdPYmplY3QiLCJjbGFzc05hbWUiLCJmb3VuZENsYXNzIiwiYyIsInByaXN0aW5lT2JqZWN0IiwidGFyZ2V0IiwiT2JqZWN0IiwiYXNzaWduIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIk15V29yayIsImxvY2FsU3RvcmFnZUtleSIsInNldHRpbmdzU2hvd24iLCJleHBvcnQiLCJzYXZlIiwic3VjY2VzcyIsInJlc2V0IiwicmVsb2FkIiwiaW1wb3J0SXQiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRJdGVtIiwicmF3T2JqZWN0cyIsInBhcnNlIiwibyIsInJlc3RvcmVTZXR0aW5nc1N0YXRlIiwic2V0dGluZ3MiLCJoaWRlU2V0dGluZ3MiLCJzaG93U2V0dGluZ3MiLCJvYmoiLCJwcm9wIiwiYXBwQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvb2xzQ29udGFpbmVyIiwiZmlsdGVyVG9vbCIsImV4dHJhY3RBcmdzU3RyaW5nIiwiZm5TdHIiLCJzbGljZSIsInBhcnNlQXJnc1N0cmluZyIsImFyZ1N0ciIsInNwbGl0IiwicyIsInRyaW0iLCJsZW5ndGgiLCJwYXJzZUZ1bmN0aW9uQXJncyIsImZuIiwidG9TdHJpbmciLCJyZW5kZXJJbnB1dEZvckFyZyIsIm1ldGhvZEZvcm0iLCJhcmciLCJhcmdJbnB1dCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInNldEF0dHJpYnV0ZSIsImhhbmRsZU1ldGhvZENhbGwiLCJwcm9wZXJ0eSIsImlucHV0cyIsImNsZWFyIiwiYXJncyIsImlucHV0IiwidmFsdWUiLCJjYWxsIiwiZm9jdXMiLCJyZW5kZXJPYmplY3QiLCJyZW5kZXJNZXRob2QiLCJvYmplY3REaXYiLCJtZXRob2QiLCJjbGFzc0xpc3QiLCJhZGQiLCJhdXRvIiwiaGFuZGxlQXJnQ2hhbmdlIiwiZXZlbnQiLCJvbmNoYW5nZSIsIm9ua2V5dXAiLCJvbnBhc3RlIiwibWV0aG9kRGl2IiwidGV4dENvbnRlbnQiLCJvbmNsaWNrIiwicHJldmVudERlZmF1bHQiLCJyZW5kZXJQcm9wZXJ0eSIsInByb3BlcnR5RGl2IiwicmVuZGVyVXNlckNvbnRyb2wiLCJjb250YWluZXIiLCJyZW5kZXJUb29sIiwiY29udGFpbnMiLCJzdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInNlYXJjaFN0cmluZyIsImNvbnRhaW5zSW5PYmplY3QiLCJlc3NlbnRpYWxDb21wYXJlIiwiYSIsImIiLCJvYmplY3RDb21wYXJlIiwiY29tcGFyZUJ5RXNzZW50aWFsIiwiY29tcGFyZUJ5Q2xhc3MiLCJsb2NhbGVDb21wYXJlIiwiY29tcGFyZUJ5TmFtZSIsIm15V29yayIsImlubmVySFRNTCIsImZpbHRlclZhbHVlIiwic29ydCIsIlNsZWVwIiwic2xlcHRBdCIsImFmZmVjdENoYXJhY3RlciIsImNoYXJhY3RlciIsImNvbnRyb2wiLCJGaWx0ZXIiLCJzZWFyY2giLCJEaXNlYXNlIiwiYWZmZWN0ZWRBdCIsIk5ld0Rpc2Vhc2UiLCJjcmVhdGUiLCJTbGVlcENvbnRyb2wiLCJtZXNzYWdlIiwic2xlZXAiLCJjb21tb25Vc2VySW50ZXJmYWNlV2l0aCIsIk5ld1Rhc2siLCJUYXNrIiwiY29tcGxldGVkIiwidW5kbyIsImNvbXBsZXRlIiwibWFya0FzQ29tcGxldGVkIiwiY29tcGxldGVkQXQiLCJyZXBsYWNlQ29tcGxldGVXaXRoQ29tcGxldGVkIiwiaW5kZXhPZkNvbXBsZXRlIiwicmVwbGFjZUNvbXBsZXRlZEF0V2l0aENvbXBsZXRlIiwicmVwbGFjZUNvbXBsZXRlZFdpdGhDb21wbGV0ZSIsInJlbW92ZVVzZXJJbnRlcmZhY2UiLCJyZWFzb24iLCJsb2ciLCJ1bkNvbXBsZXRlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTs7QUFFTyxNQUFNQSw0QkFBNEIsRUFBbEM7QUFBQTtBQUFBOztBQUVBLE1B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QUtWLGFBQUwsQ0FBbUJZLE1BQW5CLENBQTBCRixLQUExQixFQUFpQyxDQUFqQztBQUNuQjs7QUFFRHNNLG1DQUErQjtBQUMzQixZQUFJdE0sUUFBUSxLQUFLVixhQUFMLENBQW1CQyxPQUFuQixDQUEyQixXQUEzQixDQUFaO0FBQ0EsWUFBSVMsU0FBUyxDQUFiLEVBQWdCLEtBQUtWLGFBQUwsQ0FBbUJZLE1BQW5CLENBQTBCRixLQUExQixFQUFpQyxDQUFqQyxFQUFvQyxVQUFwQztBQUNuQjs7QUFFRE8sc0JBQWtCO0FBQ2QsWUFBSSxLQUFLMkwsV0FBTCxLQUFxQiwyRUFBQXpJLEVBQXpCLEVBQWtDO0FBQzlCLGlCQUFLMEksNEJBQUw7QUFDSDtBQUNKOztBQUVESixTQUFLUyxNQUFMLEVBQWE7QUFDVCxZQUFJQSxPQUFPckYsTUFBUCxHQUFnQixFQUFwQixFQUF3QjtBQUNwQnZDLG9CQUFRNkgsR0FBUixDQUFZLG9EQUFaO0FBQ0E7QUFDSDs7QUFFRCxjQUFNekIsWUFBWSx3RkFBQS9KLENBQWdCLHVFQUFoQixDQUFsQjtBQUNBK0osa0JBQVVsSSxVQUFWLENBQXFCLENBQUMsS0FBS2IsRUFBM0I7QUFDQStJLGtCQUFVL0gsVUFBVixDQUFxQixDQUFDLEtBQUtkLEVBQTNCO0FBQ0EsYUFBS3VLLFVBQUw7QUFDSDs7QUFFREEsaUJBQWE7QUFDVCxhQUFLUixXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsYUFBS0csOEJBQUw7QUFDSDtBQTFGd0M7QUFBQTtBQUFBOztBQTZGN0MsOEdBQUE3TCxDQUEyQnFMLElBQTNCLEUiLCJmaWxlIjoicHVibGljL2pzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM4OGZlNTQ2MTQ0YmMzNTI2MDJlIiwiaW1wb3J0IHthcHBsaWNhdGlvbk9iamVjdHN9IGZyb20gJy4vT2JqZWN0cydcbmltcG9ydCB7cmVuZGVyQWxsfSBmcm9tICcuL1JlbmRlcmluZydcblxuZXhwb3J0IGNvbnN0IHVzZXJJbnRlcmZhY2VBd2FyZUNsYXNzZXMgPSBbXVxuXG5leHBvcnQgY2xhc3MgVXNlckludGVyZmFjZUF3YXJlIHtcblxuICAgIGRlZmF1bHRVc2VySW50ZXJmYWNlID0gWydvYmplY3QnXVxuICAgIHVzZXJJbnRlcmZhY2UgPSBbXVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICh1c2VySW50ZXJmYWNlQXdhcmVDbGFzc2VzLmluZGV4T2YodGhpcy5jb25zdHJ1Y3RvcikgPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYFlvdSBmb3Jnb3QgdG8gcmVnaXN0ZXIgYSB1c2VyIGludGVyZmFjZSBhd2FyZSBjbGFzcyAke3RoaXMuY29uc3RydWN0b3IubmFtZX1gKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vYmplY3QgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWVcbiAgICAgICAgdGhpcy5kZXN0cm95LmRhbmdlciA9IHRydWVcbiAgICAgICAgdGhpcy5kZXN0cm95LnNldHRpbmcgPSB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7QXJyYXk8U3RyaW5nPn1cbiAgICAgKi9cbiAgICBvYnRhaW5BbGxVc2VySW50ZXJmYWNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0VXNlckludGVyZmFjZS5jb25jYXQodGhpcy51c2VySW50ZXJmYWNlKVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gYXBwbGljYXRpb25PYmplY3RzKCkuaW5kZXhPZih0aGlzKVxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgYXBwbGljYXRpb25PYmplY3RzKCkuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgICAgcmVuZGVyQWxsKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVVc2VySW50ZXJmYWNlKCkge1xuICAgICAgICB0aGlzLmhpZGRlbiA9IHRydWVcbiAgICB9XG5cbiAgICBzaG93VXNlckludGVyZmFjZSgpIHtcbiAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZVxuICAgIH1cblxuICAgIHVwZGF0ZUFmdGVyTG9hZCgpIHt9XG5cbn1cblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlID0gYUNsYXNzID0+IHtcbiAgICB1c2VySW50ZXJmYWNlQXdhcmVDbGFzc2VzLnB1c2goYUNsYXNzKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Vc2VySW50ZXJmYWNlQXdhcmUuanMiLCJpbXBvcnQge015V29ya30gZnJvbSAnLi9NeVdvcmsnXG5pbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSAnLi9jaGFyYWN0ZXIvQ2hhcmFjdGVyJ1xuaW1wb3J0IHtOZXdUYXNrfSBmcm9tICcuL3Rhc2tzL05ld1Rhc2snXG5pbXBvcnQge05ld0Rpc2Vhc2V9IGZyb20gJy4vZGlzZWFzZXMvTmV3RGlzZWFzZSdcbmltcG9ydCB7U2xlZXB9IGZyb20gJy4vc2xlZXAvU2xlZXAnXG5cbmV4cG9ydCBjb25zdCBpbml0aWFsT2JqZWN0cyA9IFtcbiAgICBuZXcgTXlXb3JrKCksXG4gICAgbmV3IENoYXJhY3RlcigpLFxuICAgIG5ldyBOZXdUYXNrKCksXG4gICAgbmV3IE5ld0Rpc2Vhc2UoKSxcbiAgICBuZXcgU2xlZXAoKSxcbl1cblxubGV0IF9hcHBsaWNhdGlvbk9iamVjdHMgPSBpbml0aWFsT2JqZWN0cy5tYXAoeCA9PiB4KVxuXG5leHBvcnQgY29uc3QgYXBwbGljYXRpb25PYmplY3RzID0gKCkgPT4ge1xuICAgIHJldHVybiBfYXBwbGljYXRpb25PYmplY3RzXG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVBcHBsaWNhdGlvbk9iamVjdHMgPSAob2JqZWN0cykgPT4ge1xuICAgIF9hcHBsaWNhdGlvbk9iamVjdHMgPSBvYmplY3RzXG59XG5cbmV4cG9ydCBjb25zdCBmaW5kRmlyc3RPYmplY3QgPSBvYmplY3RDbGFzcyA9PlxuICAgIGFwcGxpY2F0aW9uT2JqZWN0cygpXG4gICAgICAgIC5maW5kKG9iamVjdCA9PiBvYmplY3QgaW5zdGFuY2VvZiBvYmplY3RDbGFzcylcblxuZXhwb3J0IGNvbnN0IGZpbmRBbGxPYmplY3RzID0gb2JqZWN0Q2xhc3MgPT5cbiAgICBhcHBsaWNhdGlvbk9iamVjdHMoKVxuICAgICAgICAuZmlsdGVyKG9iamVjdCA9PiBvYmplY3QgaW5zdGFuY2VvZiBvYmplY3RDbGFzcylcblxuZXhwb3J0IGNvbnN0IG1ha2VTdXJlSW5pdGlhbE9iamVjdHNBcmVQcmVzZW50ID0gKCkgPT4ge1xuICAgIGluaXRpYWxPYmplY3RzLmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgY29uc3QgZm91bmQgPSBmaW5kRmlyc3RPYmplY3Qob2JqZWN0LmNvbnN0cnVjdG9yKVxuICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbk9iamVjdHMoKS5wdXNoKG9iamVjdClcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbndpbmRvdy5fYXBwbGljYXRpb25PYmplY3RzID0gYXBwbGljYXRpb25PYmplY3RzXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvT2JqZWN0cy5qcyIsImltcG9ydCB7cmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUsIFVzZXJJbnRlcmZhY2VBd2FyZX0gZnJvbSAnLi4vVXNlckludGVyZmFjZUF3YXJlJ1xuXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyIGV4dGVuZHMgVXNlckludGVyZmFjZUF3YXJlIHtcblxuICAgIHVzZXJJbnRlcmZhY2UgPSBbJ25hbWUnLCAnaHAnLCAnZXAnLCAnY2hhbmdlJ11cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG5cbiAgICAgICAgdGhpcy5jaGFuZ2Uuc2V0dGluZyA9IHRydWVcbiAgICB9XG5cbiAgICBuYW1lID0gJydcbiAgICBlc3NlbnRpYWwgPSA5MFxuXG4gICAgX21heEhwID0gNVxuICAgIF9ocCA9IDVcbiAgICBnZXQgaHAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckJhcih0aGlzLl9ocCwgdGhpcy5fbWF4SHAsICfimaXvuI8nLCAn4pmhJylcbiAgICB9XG5cbiAgICBfbWF4RXAgPSA1XG4gICAgX2VwID0gNVxuICAgIGdldCBlcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQmFyKHRoaXMuX2VwLCB0aGlzLl9tYXhFcCwgJ+Kaoe+4j++4jycsICfimLwnKVxuICAgIH1cblxuICAgIGNoYW5nZShuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB9XG5cbiAgICByZW5kZXJCYXIoY3VycmVudCwgbWF4LCBmaWxsZWRTeW1ib2wsIGVtcHR5U3ltYm9sKSB7XG4gICAgICAgIGxldCBiYXJWaWV3ID0gJydcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGguZmxvb3IoY3VycmVudCk7IGkrKykge1xuICAgICAgICAgICAgYmFyVmlldyArPSBmaWxsZWRTeW1ib2xcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSBNYXRoLmZsb29yKGN1cnJlbnQpOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgICAgIGJhclZpZXcgKz0gZW1wdHlTeW1ib2xcbiAgICAgICAgfVxuXG4gICAgICAgIC8vbm9pbnNwZWN0aW9uIEpTUHJpbWl0aXZlVHlwZVdyYXBwZXJVc2FnZVxuICAgICAgICBiYXJWaWV3ID0gbmV3IFN0cmluZyhiYXJWaWV3KVxuICAgICAgICAvL25vaW5zcGVjdGlvbiBKU1ByaW1pdGl2ZVR5cGVXcmFwcGVyVXNhZ2VcbiAgICAgICAgYmFyVmlldy50aXRsZSA9IGAke2N1cnJlbnR9LyR7bWF4fWBcblxuICAgICAgICByZXR1cm4gYmFyVmlld1xuICAgIH1cblxuICAgIGNoYW5nZUhwQnkoYW1vdW50KSB7XG4gICAgICAgIHRoaXMuX2hwID0gdGhpcy5jaGFuZ2VCeSh0aGlzLl9ocCwgdGhpcy5fbWF4SHAsIGFtb3VudClcbiAgICB9XG5cbiAgICBjaGFuZ2VFcEJ5KGFtb3VudCkge1xuICAgICAgICB0aGlzLl9lcCA9IHRoaXMuY2hhbmdlQnkodGhpcy5fZXAsIHRoaXMuX21heEVwLCBhbW91bnQpXG4gICAgfVxuXG4gICAgY2hhbmdlQnkoY3VycmVudCwgbWF4LCBhbW91bnQpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKG1heCwgY3VycmVudCArIGFtb3VudCkpXG4gICAgfVxuXG59XG5cbnJlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlKENoYXJhY3RlcilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2hhcmFjdGVyL0NoYXJhY3Rlci5qcyIsImV4cG9ydCBjb25zdCBjb2xvcmVkTnVtYmVyID0gbnVtYmVyID0+IHtcbiAgICAvL25vaW5zcGVjdGlvbiBKU1ByaW1pdGl2ZVR5cGVXcmFwcGVyVXNhZ2VcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgTnVtYmVyKHBhcnNlRmxvYXQobnVtYmVyKSlcblxuICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgIC8vbm9pbnNwZWN0aW9uIEpTUHJpbWl0aXZlVHlwZVdyYXBwZXJVc2FnZVxuICAgICAgICByZXN1bHQuY29sb3IgPSAncmVkJ1xuICAgIH0gZWxzZSBpZiAobnVtYmVyID4gMCkge1xuICAgICAgICAvL25vaW5zcGVjdGlvbiBKU1ByaW1pdGl2ZVR5cGVXcmFwcGVyVXNhZ2VcbiAgICAgICAgcmVzdWx0LmNvbG9yID0gJ2dyZWVuJ1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGNvbnN0IHRvZGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcblxuICAgIGNvbnN0IGRheSA9IG5vdy5nZXREYXRlKClcbiAgICBjb25zdCBtb250aCA9IG5vdy5nZXRNb250aCgpICsgMVxuICAgIGNvbnN0IHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKVxuXG4gICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsLmpzIiwiaW1wb3J0IHtyZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZSwgVXNlckludGVyZmFjZUF3YXJlLCB1c2VySW50ZXJmYWNlQXdhcmVDbGFzc2VzfSBmcm9tICcuL1VzZXJJbnRlcmZhY2VBd2FyZSdcbmltcG9ydCB7YXBwbGljYXRpb25PYmplY3RzLCBmaW5kRmlyc3RPYmplY3QsIGluaXRpYWxPYmplY3RzLCB1cGRhdGVBcHBsaWNhdGlvbk9iamVjdHN9IGZyb20gJy4vT2JqZWN0cydcbmltcG9ydCB7cmVuZGVyQWxsfSBmcm9tICcuL1JlbmRlcmluZydcblxuY29uc3QgY3JlYXRlT2JqZWN0RnJvbVJhdyA9IChyYXdPYmplY3QpID0+IHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSByYXdPYmplY3Qub2JqZWN0XG4gICAgY29uc3QgZm91bmRDbGFzcyA9IHVzZXJJbnRlcmZhY2VBd2FyZUNsYXNzZXMuZmluZChjID0+IGMubmFtZSA9PT0gY2xhc3NOYW1lKVxuXG4gICAgaWYgKGZvdW5kQ2xhc3MpIHtcbiAgICAgICAgY29uc3QgcHJpc3RpbmVPYmplY3QgPSBuZXcgZm91bmRDbGFzcygpXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IG5ldyBmb3VuZENsYXNzKClcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHJhd09iamVjdClcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldC51c2VySW50ZXJmYWNlID0gcHJpc3RpbmVPYmplY3QudXNlckludGVyZmFjZVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgY2xhc3MgTXlXb3JrIGV4dGVuZHMgVXNlckludGVyZmFjZUF3YXJlIHtcblxuICAgIHVzZXJJbnRlcmZhY2UgPSBbJ3NhdmUnLCAnc2V0dGluZ3MnLCAncmVsb2FkJywgJ2ltcG9ydEl0JywgJ3Jlc2V0J11cbiAgICBsb2NhbFN0b3JhZ2VLZXkgPSAnTXlXb3JrLnNhdmVkV29yaydcbiAgICBzZXR0aW5nc1Nob3duID0gdHJ1ZVxuICAgIGVzc2VudGlhbCA9IDEwMFxuICAgIGV4cG9ydCA9ICcnXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLnNhdmUuc3VjY2VzcyA9IHRydWVcbiAgICAgICAgdGhpcy5yZXNldC5kYW5nZXIgPSB0cnVlXG4gICAgICAgIHRoaXMucmVsb2FkLnNldHRpbmcgPSB0cnVlXG4gICAgICAgIHRoaXMucmVzZXQuc2V0dGluZyA9IHRydWVcbiAgICAgICAgdGhpcy5pbXBvcnRJdC5zZXR0aW5nID0gdHJ1ZVxuICAgICAgICB0aGlzLmltcG9ydEl0LmRhbmdlciA9IHRydWVcbiAgICB9XG5cbiAgICBzYXZlKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoYXBwbGljYXRpb25PYmplY3RzKCkpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5LCBkYXRhKVxuICAgIH1cblxuICAgIGltcG9ydEl0KGRhdGEpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXksIGRhdGEpXG4gICAgICAgIHRoaXMucmVsb2FkKClcbiAgICB9XG5cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSlcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHJhd09iamVjdHMgPSBKU09OLnBhcnNlKGRhdGEpXG4gICAgICAgICAgICBjb25zdCBvYmplY3RzID0gcmF3T2JqZWN0c1xuICAgICAgICAgICAgICAgIC5tYXAoY3JlYXRlT2JqZWN0RnJvbVJhdylcbiAgICAgICAgICAgICAgICAuZmlsdGVyKG9iamVjdCA9PiBvYmplY3QgIT09IG51bGwpXG5cbiAgICAgICAgICAgIHVwZGF0ZUFwcGxpY2F0aW9uT2JqZWN0cyhvYmplY3RzKVxuXG4gICAgICAgICAgICBhcHBsaWNhdGlvbk9iamVjdHMoKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKG8gPT4gby51cGRhdGVBZnRlckxvYWQoKSlcblxuICAgICAgICAgICAgZmluZEZpcnN0T2JqZWN0KE15V29yaykucmVzdG9yZVNldHRpbmdzU3RhdGUoKVxuXG4gICAgICAgICAgICByZW5kZXJBbGwoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHVwZGF0ZUFwcGxpY2F0aW9uT2JqZWN0cyhpbml0aWFsT2JqZWN0cylcbiAgICAgICAgcmVuZGVyQWxsKClcbiAgICB9XG5cbiAgICBzZXR0aW5ncygpIHtcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3NTaG93bikge1xuICAgICAgICAgICAgdGhpcy5oaWRlU2V0dGluZ3MoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93U2V0dGluZ3MoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzdG9yZVNldHRpbmdzU3RhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzU2hvd24pIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NldHRpbmdzKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVNldHRpbmdzKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVTZXR0aW5ncygpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5nc1Nob3duID0gZmFsc2VcblxuICAgICAgICBhcHBsaWNhdGlvbk9iamVjdHMoKVxuICAgICAgICAgICAgLmZpbHRlcihvID0+IG8uc2V0dGluZylcbiAgICAgICAgICAgIC5mb3JFYWNoKG8gPT4gby5oaWRlVXNlckludGVyZmFjZSgpKVxuXG4gICAgICAgIGFwcGxpY2F0aW9uT2JqZWN0cygpXG4gICAgICAgICAgICAuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgICAgIG9iai5vYnRhaW5BbGxVc2VySW50ZXJmYWNlKClcbiAgICAgICAgICAgICAgICAgICAgLm1hcChuYW1lID0+IG9ialtuYW1lXSlcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihwcm9wID0+IHByb3Auc2V0dGluZylcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2gocHJvcCA9PiBwcm9wLmhpZGRlbiA9IHRydWUpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHNob3dTZXR0aW5ncygpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5nc1Nob3duID0gdHJ1ZVxuXG4gICAgICAgIGFwcGxpY2F0aW9uT2JqZWN0cygpXG4gICAgICAgICAgICAuZmlsdGVyKG8gPT4gby5zZXR0aW5nIHx8IG8uaGlkZGVuKVxuICAgICAgICAgICAgLmZvckVhY2gobyA9PiBvLnNob3dVc2VySW50ZXJmYWNlKCkpXG5cbiAgICAgICAgYXBwbGljYXRpb25PYmplY3RzKClcbiAgICAgICAgICAgIC5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICAgICAgb2JqLm9idGFpbkFsbFVzZXJJbnRlcmZhY2UoKVxuICAgICAgICAgICAgICAgICAgICAubWFwKG5hbWUgPT4gb2JqW25hbWVdKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHByb3AgPT4gcHJvcC5zZXR0aW5nKVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChwcm9wID0+IHByb3AuaGlkZGVuID0gZmFsc2UpXG4gICAgICAgICAgICB9KVxuICAgIH1cbn1cblxucmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUoTXlXb3JrKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9NeVdvcmsuanMiLCJpbXBvcnQge2FwcGxpY2F0aW9uT2JqZWN0cywgZmluZEZpcnN0T2JqZWN0fSBmcm9tICcuL09iamVjdHMnXG5pbXBvcnQge1VzZXJJbnRlcmZhY2VBd2FyZX0gZnJvbSAnLi9Vc2VySW50ZXJmYWNlQXdhcmUnXG5pbXBvcnQge015V29ya30gZnJvbSAnLi9NeVdvcmsnXG5pbXBvcnQge0ZpbHRlcn0gZnJvbSAnLi9GaWx0ZXInXG5cbmNvbnN0IGFwcENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuXG5jb25zdCB0b29sc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b29scycpXG5cbmV4cG9ydCBjb25zdCBmaWx0ZXJUb29sID0gbmV3IEZpbHRlcigpXG5cbmNvbnN0IGV4dHJhY3RBcmdzU3RyaW5nID0gKGZuU3RyKSA9PiB7XG4gICAgcmV0dXJuIGZuU3RyLnNsaWNlKGZuU3RyLmluZGV4T2YoJygnKSArIDEsIGZuU3RyLmluZGV4T2YoJyknKSlcbn1cblxuY29uc3QgcGFyc2VBcmdzU3RyaW5nID0gKGFyZ1N0cikgPT4ge1xuICAgIHJldHVybiBhcmdTdHIuc3BsaXQoJywnKVxuICAgICAgICAubWFwKHMgPT4gcy50cmltKCkpXG4gICAgICAgIC5maWx0ZXIocyA9PiBzLmxlbmd0aCA+IDApXG59XG5cbmNvbnN0IHBhcnNlRnVuY3Rpb25BcmdzID0gKGZuKSA9PiB7XG4gICAgY29uc3QgZm5TdHIgPSBmbi50b1N0cmluZygpXG4gICAgY29uc3QgYXJnU3RyID0gZXh0cmFjdEFyZ3NTdHJpbmcoZm5TdHIpXG4gICAgcmV0dXJuIHBhcnNlQXJnc1N0cmluZyhhcmdTdHIpXG59XG5cbmNvbnN0IHJlbmRlcklucHV0Rm9yQXJnID0gKG1ldGhvZEZvcm0sIGFyZykgPT4ge1xuICAgIGNvbnN0IGFyZ0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIG1ldGhvZEZvcm0uYXBwZW5kQ2hpbGQoYXJnSW5wdXQpXG4gICAgYXJnSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIGFyZ0lucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBhcmcpXG4gICAgcmV0dXJuIGFyZ0lucHV0XG59XG5cbmNvbnN0IGhhbmRsZU1ldGhvZENhbGwgPSAob2JqZWN0LCBwcm9wZXJ0eSwgaW5wdXRzLCBjbGVhciA9IHRydWUpID0+IHtcbiAgICBjb25zdCBhcmdzID0gaW5wdXRzLm1hcChpbnB1dCA9PiBpbnB1dC52YWx1ZSlcbiAgICBjb25zdCByZXN1bHQgPSBwcm9wZXJ0eS5jYWxsKG9iamVjdCwgLi4uYXJncylcblxuICAgIGlmIChjbGVhcikge1xuICAgICAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBpbnB1dC52YWx1ZSA9ICcnKVxuXG4gICAgICAgIGlmIChpbnB1dHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaW5wdXRzWzBdLmZvY3VzKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBVc2VySW50ZXJmYWNlQXdhcmUpIHtcbiAgICAgICAgYXBwbGljYXRpb25PYmplY3RzKCkucHVzaChyZXN1bHQpXG4gICAgICAgIHJlbmRlck9iamVjdChyZXN1bHQpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyQWxsKClcbiAgICB9XG59XG5cbmNvbnN0IHJlbmRlck1ldGhvZCA9IChvYmplY3QsIG9iamVjdERpdiwgbmFtZSwgbWV0aG9kKSA9PiB7XG4gICAgY29uc3QgYXJncyA9IHBhcnNlRnVuY3Rpb25BcmdzKG1ldGhvZClcblxuICAgIGNvbnN0IG1ldGhvZEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG9iamVjdERpdi5hcHBlbmRDaGlsZChtZXRob2RGb3JtKVxuICAgIG1ldGhvZEZvcm0uY2xhc3NMaXN0LmFkZCgncHJvcGVydHknKVxuICAgIG1ldGhvZEZvcm0uY2xhc3NMaXN0LmFkZCgnbWV0aG9kJylcblxuICAgIGlmIChtZXRob2QuZGFuZ2VyKSB7XG4gICAgICAgIG1ldGhvZEZvcm0uY2xhc3NMaXN0LmFkZCgnZGFuZ2VyJylcbiAgICB9XG5cbiAgICBpZiAobWV0aG9kLnN1Y2Nlc3MpIHtcbiAgICAgICAgbWV0aG9kRm9ybS5jbGFzc0xpc3QuYWRkKCdzdWNjZXNzJylcbiAgICB9XG5cbiAgICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XG4gICAgICAgIG1ldGhvZEZvcm0uY2xhc3NMaXN0LmFkZCgnbXVsdGlsaW5lJylcbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dHMgPSBhcmdzLm1hcChhcmcgPT4ge1xuICAgICAgICByZXR1cm4gcmVuZGVySW5wdXRGb3JBcmcobWV0aG9kRm9ybSwgYXJnKVxuICAgIH0pXG5cbiAgICBpZiAobWV0aG9kLmF1dG8gJiYgYXJncy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgY29uc3QgaGFuZGxlQXJnQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVNZXRob2RDYWxsKG9iamVjdCwgbWV0aG9kLCBpbnB1dHMsIGZhbHNlKVxuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgaW5wdXQub25jaGFuZ2UgPSBoYW5kbGVBcmdDaGFuZ2VcbiAgICAgICAgICAgIGlucHV0Lm9ua2V5dXAgPSBoYW5kbGVBcmdDaGFuZ2VcbiAgICAgICAgICAgIGlucHV0Lm9ucGFzdGUgPSBoYW5kbGVBcmdDaGFuZ2VcbiAgICAgICAgfSlcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY29uc3QgbWV0aG9kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgIG1ldGhvZEZvcm0uYXBwZW5kQ2hpbGQobWV0aG9kRGl2KVxuICAgICAgICBtZXRob2REaXYudGV4dENvbnRlbnQgPSBgJHtuYW1lfWBcbiAgICAgICAgbWV0aG9kRGl2LnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJylcblxuICAgICAgICBtZXRob2REaXYub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlTWV0aG9kQ2FsbChvYmplY3QsIG1ldGhvZCwgaW5wdXRzKVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmNvbnN0IHJlbmRlclByb3BlcnR5ID0gKG9iamVjdERpdiwgbmFtZSwgcHJvcGVydHkpID0+IHtcbiAgICBjb25zdCBwcm9wZXJ0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgb2JqZWN0RGl2LmFwcGVuZENoaWxkKHByb3BlcnR5RGl2KVxuICAgIHByb3BlcnR5RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb3BlcnR5JylcbiAgICBwcm9wZXJ0eURpdi50ZXh0Q29udGVudCA9IGAke25hbWV9OiAke3Byb3BlcnR5fWBcblxuICAgIGlmIChwcm9wZXJ0eS5jb2xvcikge1xuICAgICAgICBwcm9wZXJ0eURpdi5jbGFzc0xpc3QuYWRkKHByb3BlcnR5LmNvbG9yKVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eS50aXRsZSkge1xuICAgICAgICBwcm9wZXJ0eURpdi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgcHJvcGVydHkudGl0bGUpXG4gICAgfVxufVxuXG5jb25zdCByZW5kZXJVc2VyQ29udHJvbCA9IChvYmplY3QsIG9iamVjdERpdiwgbmFtZSkgPT4ge1xuICAgIGNvbnN0IHByb3BlcnR5ID0gb2JqZWN0W25hbWVdXG4gICAgaWYgKHByb3BlcnR5LmhpZGRlbikge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByb3BlcnR5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJlbmRlck1ldGhvZChvYmplY3QsIG9iamVjdERpdiwgbmFtZSwgcHJvcGVydHkpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyUHJvcGVydHkob2JqZWN0RGl2LCBuYW1lLCBwcm9wZXJ0eSlcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJPYmplY3QgPSAob2JqZWN0LCBjb250YWluZXIgPSBhcHBDb250YWluZXIpID0+IHtcbiAgICBjb25zdCBvYmplY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvYmplY3REaXYpXG4gICAgb2JqZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ29iamVjdCcpXG5cbiAgICBvYmplY3Qub2J0YWluQWxsVXNlckludGVyZmFjZSgpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIHJlbmRlclVzZXJDb250cm9sKG9iamVjdCwgb2JqZWN0RGl2LCBuYW1lKVxuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJUb29sID0gb2JqZWN0ID0+IHtcbiAgICByZW5kZXJPYmplY3Qob2JqZWN0LCB0b29sc0NvbnRhaW5lcilcbn1cblxuY29uc3QgY29udGFpbnMgPSAoc3RyaW5nLCBmaWx0ZXIpID0+IHtcbiAgICBsZXQgbmFtZSA9IHN0cmluZy50b0xvd2VyQ2FzZSgpXG4gICAgbGV0IHNlYXJjaFN0cmluZyA9IGZpbHRlci50b0xvd2VyQ2FzZSgpXG4gICAgcmV0dXJuIG5hbWUuaW5kZXhPZihzZWFyY2hTdHJpbmcpID49IDBcbn1cblxuY29uc3QgY29udGFpbnNJbk9iamVjdCA9IChvYmplY3QsIGZpbHRlcikgPT4ge1xuICAgIHJldHVybiBjb250YWlucyhvYmplY3QuY29uc3RydWN0b3IubmFtZSwgZmlsdGVyKSB8fFxuICAgICAgICAgICAgY29udGFpbnMob2JqZWN0Lm5hbWUgfHwgJycsIGZpbHRlcilcbn1cblxuY29uc3QgZXNzZW50aWFsQ29tcGFyZSA9IChhLCBiKSA9PiB7XG4gICAgcmV0dXJuIChiLmVzc2VudGlhbCB8fCAwKSAtIChhLmVzc2VudGlhbCB8fCAwKVxufVxuXG5jb25zdCBvYmplY3RDb21wYXJlID0gKGEsIGIpID0+IHtcbiAgICBjb25zdCBjb21wYXJlQnlFc3NlbnRpYWwgPSBlc3NlbnRpYWxDb21wYXJlKGEsIGIpXG5cbiAgICBjb25zdCBjb21wYXJlQnlDbGFzcyA9IGEuY29uc3RydWN0b3IubmFtZVxuICAgICAgICAubG9jYWxlQ29tcGFyZShiLmNvbnN0cnVjdG9yLm5hbWUpXG5cbiAgICBjb25zdCBjb21wYXJlQnlOYW1lID0gKGEubmFtZSB8fCAnJylcbiAgICAgICAgLmxvY2FsZUNvbXBhcmUoYi5uYW1lIHx8ICcnKVxuXG4gICAgaWYgKGNvbXBhcmVCeUVzc2VudGlhbCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gY29tcGFyZUJ5RXNzZW50aWFsXG4gICAgfVxuXG4gICAgaWYgKGNvbXBhcmVCeUNsYXNzICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBjb21wYXJlQnlDbGFzc1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlQnlOYW1lXG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJBbGwgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBteVdvcmsgPSBmaW5kRmlyc3RPYmplY3QoTXlXb3JrKVxuICAgIG15V29yay5yZXN0b3JlU2V0dGluZ3NTdGF0ZSgpXG5cbiAgICBhcHBDb250YWluZXIuaW5uZXJIVE1MID0gJydcblxuICAgIGFwcGxpY2F0aW9uT2JqZWN0cygpXG4gICAgICAgIC5maWx0ZXIob2JqZWN0ID0+ICFvYmplY3QuaGlkZGVuKVxuICAgICAgICAuZmlsdGVyKG9iamVjdCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0LmVzc2VudGlhbCB8fFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zSW5PYmplY3Qob2JqZWN0LCBmaWx0ZXJUb29sLmZpbHRlclZhbHVlKVxuICAgICAgICB9KS5zb3J0KG9iamVjdENvbXBhcmUpXG4gICAgICAgIC5mb3JFYWNoKG9iamVjdCA9PiByZW5kZXJPYmplY3Qob2JqZWN0KSlcblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZW5kZXJpbmcuanMiLCJpbXBvcnQge3JlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlLCBVc2VySW50ZXJmYWNlQXdhcmV9IGZyb20gJy4uL1VzZXJJbnRlcmZhY2VBd2FyZSdcbmltcG9ydCB7dG9kYXl9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQge2ZpbmRBbGxPYmplY3RzLCBmaW5kRmlyc3RPYmplY3R9IGZyb20gJy4uL09iamVjdHMnXG5pbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSAnLi4vY2hhcmFjdGVyL0NoYXJhY3RlcidcbmltcG9ydCB7U2xlZXBDb250cm9sfSBmcm9tICcuL1NsZWVwQ29udHJvbCdcblxuXG5leHBvcnQgY2xhc3MgU2xlZXAgZXh0ZW5kcyBVc2VySW50ZXJmYWNlQXdhcmUge1xuXG4gICAgdXNlckludGVyZmFjZSA9IFsnc2xlcHRBdCcsICdhZGQgc2xlZXAgY29udHJvbCddXG5cbiAgICBuYW1lXG4gICAgc2xlcHRBdFxuICAgIGVzc2VudGlhbCA9IDUwXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLnNsZXB0QXQgPSAnJ1xuXG4gICAgICAgIHRoaXNbJ2FkZCBzbGVlcCBjb250cm9sJ10uc2V0dGluZyA9IHRydWVcbiAgICAgICAgdGhpc1snYWRkIHNsZWVwIGNvbnRyb2wnXS5zdWNjZXNzID0gdHJ1ZVxuICAgIH1cblxuICAgIFsnYWRkIHNsZWVwIGNvbnRyb2wnXShuYW1lLCBocCwgZXApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTbGVlcENvbnRyb2wobmFtZSwgaHAsIGVwKVxuICAgIH1cblxuICAgIGFmZmVjdENoYXJhY3RlcihocCwgZXApIHtcbiAgICAgICAgdGhpcy5zbGVwdEF0ID0gdG9kYXkoKVxuXG4gICAgICAgIGNvbnN0IGNoYXJhY3RlciA9IGZpbmRGaXJzdE9iamVjdChDaGFyYWN0ZXIpXG4gICAgICAgIGNoYXJhY3Rlci5jaGFuZ2VIcEJ5KGhwKVxuICAgICAgICBjaGFyYWN0ZXIuY2hhbmdlRXBCeShlcClcblxuICAgICAgICBmaW5kQWxsT2JqZWN0cyhTbGVlcENvbnRyb2wpXG4gICAgICAgICAgICAuZm9yRWFjaChjb250cm9sID0+IGNvbnRyb2wudXBkYXRlQWZ0ZXJMb2FkKCkpXG4gICAgfVxuXG59XG5cbnJlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlKFNsZWVwKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zbGVlcC9TbGVlcC5qcyIsImltcG9ydCB7cmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUsIFVzZXJJbnRlcmZhY2VBd2FyZX0gZnJvbSAnLi9Vc2VySW50ZXJmYWNlQXdhcmUnXG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXIgZXh0ZW5kcyBVc2VySW50ZXJmYWNlQXdhcmUge1xuXG4gICAgdXNlckludGVyZmFjZSA9IFsnc2VhcmNoJ11cblxuICAgIGZpbHRlclZhbHVlID0gJydcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuc2VhcmNoLmF1dG8gPSB0cnVlXG4gICAgfVxuXG4gICAgc2VhcmNoKGZpbHRlcikge1xuICAgICAgICB0aGlzLmZpbHRlclZhbHVlID0gZmlsdGVyXG4gICAgfVxuXG59XG5cbnJlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlKEZpbHRlcilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRmlsdGVyLmpzIiwiaW1wb3J0IHtyZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZSwgVXNlckludGVyZmFjZUF3YXJlfSBmcm9tICcuLi9Vc2VySW50ZXJmYWNlQXdhcmUnXG5pbXBvcnQge2NvbG9yZWROdW1iZXIsIHRvZGF5fSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtmaW5kRmlyc3RPYmplY3R9IGZyb20gJy4uL09iamVjdHMnXG5pbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSAnLi4vY2hhcmFjdGVyL0NoYXJhY3RlcidcblxuZXhwb3J0IGNsYXNzIERpc2Vhc2UgZXh0ZW5kcyBVc2VySW50ZXJmYWNlQXdhcmUge1xuXG4gICAgdXNlckludGVyZmFjZSA9IFsnbmFtZScsICdocCcsICdlcCcsICdhZmZlY3RlZEF0JywgJ2Rlc3Ryb3knXVxuICAgIG5hbWVcbiAgICBhZmZlY3RlZEF0XG5cbiAgICBfaHBcbiAgICBnZXQgaHAoKSB7XG4gICAgICAgIHJldHVybiBjb2xvcmVkTnVtYmVyKHRoaXMuX2hwKVxuICAgIH1cblxuICAgIF9lcFxuICAgIGdldCBlcCgpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yZWROdW1iZXIodGhpcy5fZXApXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IobmFtZSwgaHAsIGVwKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLl9ocCA9IGhwXG4gICAgICAgIHRoaXMuX2VwID0gZXBcbiAgICAgICAgdGhpcy5hZmZlY3RlZEF0ID0gJydcbiAgICB9XG5cbiAgICB1cGRhdGVBZnRlckxvYWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmFmZmVjdGVkQXQgIT09IHRvZGF5KCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWZmZWN0Q2hhcmFjdGVyKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFmZmVjdENoYXJhY3RlcigpIHtcbiAgICAgICAgdGhpcy5hZmZlY3RlZEF0ID0gdG9kYXkoKVxuXG4gICAgICAgIGNvbnN0IGNoYXJhY3RlciA9IGZpbmRGaXJzdE9iamVjdChDaGFyYWN0ZXIpXG4gICAgICAgIGNoYXJhY3Rlci5jaGFuZ2VIcEJ5KHRoaXMuaHApXG4gICAgICAgIGNoYXJhY3Rlci5jaGFuZ2VFcEJ5KHRoaXMuZXApXG4gICAgfVxufVxuXG5yZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZShEaXNlYXNlKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaXNlYXNlcy9EaXNlYXNlLmpzIiwiaW1wb3J0IHtyZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZSwgVXNlckludGVyZmFjZUF3YXJlfSBmcm9tICcuLi9Vc2VySW50ZXJmYWNlQXdhcmUnXG5pbXBvcnQge0Rpc2Vhc2V9IGZyb20gJy4vRGlzZWFzZSdcblxuZXhwb3J0IGNsYXNzIE5ld0Rpc2Vhc2UgZXh0ZW5kcyBVc2VySW50ZXJmYWNlQXdhcmUge1xuXG4gICAgdXNlckludGVyZmFjZSA9IFsnY3JlYXRlJ11cbiAgICBzZXR0aW5nID0gdHJ1ZVxuICAgIGVzc2VudGlhbCA9IDUwXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmNyZWF0ZS5zdWNjZXNzID0gdHJ1ZVxuICAgIH1cblxuICAgIGNyZWF0ZShuYW1lLCBocCwgZXApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEaXNlYXNlKG5hbWUsIGhwLCBlcClcbiAgICB9XG5cbn1cblxucmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUoTmV3RGlzZWFzZSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlzZWFzZXMvTmV3RGlzZWFzZS5qcyIsImltcG9ydCB7ZmlsdGVyVG9vbCwgcmVuZGVyQWxsLCByZW5kZXJUb29sfSBmcm9tICcuL1JlbmRlcmluZydcbmltcG9ydCB7TXlXb3JrfSBmcm9tICcuL015V29yaydcbmltcG9ydCB7bWFrZVN1cmVJbml0aWFsT2JqZWN0c0FyZVByZXNlbnR9IGZyb20gJy4vT2JqZWN0cydcblxubmV3IE15V29yaygpLnJlbG9hZCgpXG5tYWtlU3VyZUluaXRpYWxPYmplY3RzQXJlUHJlc2VudCgpXG5yZW5kZXJUb29sKGZpbHRlclRvb2wpXG5yZW5kZXJBbGwoKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiaW1wb3J0IHtyZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZSwgVXNlckludGVyZmFjZUF3YXJlfSBmcm9tICcuLi9Vc2VySW50ZXJmYWNlQXdhcmUnXG5pbXBvcnQge2NvbG9yZWROdW1iZXIsIHRvZGF5fSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtmaW5kRmlyc3RPYmplY3R9IGZyb20gJy4uL09iamVjdHMnXG5pbXBvcnQge1NsZWVwfSBmcm9tICcuL1NsZWVwJ1xuXG5leHBvcnQgY2xhc3MgU2xlZXBDb250cm9sIGV4dGVuZHMgVXNlckludGVyZmFjZUF3YXJlIHtcblxuICAgIG5hbWUgPSAnJ1xuICAgIG1lc3NhZ2UgPSAnYWxyZWFkeSBzbGVwdCdcblxuICAgIF9ocCA9IDBcbiAgICBnZXQgaHAoKSB7XG4gICAgICAgIHJldHVybiBjb2xvcmVkTnVtYmVyKHRoaXMuX2hwKVxuICAgIH1cblxuICAgIF9lcCA9IDBcbiAgICBnZXQgZXAoKSB7XG4gICAgICAgIHJldHVybiBjb2xvcmVkTnVtYmVyKHRoaXMuX2VwKVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGhwLCBlcCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5faHAgPSBocFxuICAgICAgICB0aGlzLl9lcCA9IGVwXG5cbiAgICAgICAgdGhpcy51cGRhdGVBZnRlckxvYWQoKVxuICAgIH1cblxuICAgIHVwZGF0ZUFmdGVyTG9hZCgpIHtcbiAgICAgICAgY29uc3Qgc2xlZXAgPSBmaW5kRmlyc3RPYmplY3QoU2xlZXApXG5cbiAgICAgICAgdGhpc1t0aGlzLm5hbWVdID0gKCkgPT4ge1xuICAgICAgICAgICAgc2xlZXAuYWZmZWN0Q2hhcmFjdGVyKHRoaXMuaHAsIHRoaXMuZXApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2xlZXAuc2xlcHRBdCAhPT0gdG9kYXkoKSkge1xuICAgICAgICAgICAgdGhpcy51c2VySW50ZXJmYWNlID0gdGhpcy5jb21tb25Vc2VySW50ZXJmYWNlV2l0aCh0aGlzLm5hbWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJJbnRlcmZhY2UgPSB0aGlzLmNvbW1vblVzZXJJbnRlcmZhY2VXaXRoKCdtZXNzYWdlJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbW1vblVzZXJJbnRlcmZhY2VXaXRoKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIFsnaHAnLCAnZXAnLCAuLi5hcmdzLCAnZGVzdHJveSddXG4gICAgfVxuXG59XG5cbnJlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlKFNsZWVwQ29udHJvbClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2xlZXAvU2xlZXBDb250cm9sLmpzIiwiaW1wb3J0IHtyZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZSwgVXNlckludGVyZmFjZUF3YXJlfSBmcm9tICcuLi9Vc2VySW50ZXJmYWNlQXdhcmUnXG5pbXBvcnQge1Rhc2t9IGZyb20gJy4vVGFzaydcblxuZXhwb3J0IGNsYXNzIE5ld1Rhc2sgZXh0ZW5kcyBVc2VySW50ZXJmYWNlQXdhcmUge1xuXG4gICAgdXNlckludGVyZmFjZSA9IFsnY3JlYXRlJ11cbiAgICBzZXR0aW5nID0gdHJ1ZVxuICAgIGVzc2VudGlhbCA9IDUwXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmNyZWF0ZS5zdWNjZXNzID0gdHJ1ZVxuICAgIH1cblxuICAgIGNyZWF0ZShuYW1lLCBocCwgZXApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUYXNrKG5hbWUsIGhwLCBlcClcbiAgICB9XG5cbn1cblxucmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUoTmV3VGFzaylcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGFza3MvTmV3VGFzay5qcyIsImltcG9ydCB7cmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUsIFVzZXJJbnRlcmZhY2VBd2FyZX0gZnJvbSAnLi4vVXNlckludGVyZmFjZUF3YXJlJ1xuaW1wb3J0IHtmaW5kRmlyc3RPYmplY3R9IGZyb20gJy4uL09iamVjdHMnXG5pbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSAnLi4vY2hhcmFjdGVyL0NoYXJhY3RlcidcbmltcG9ydCB7Y29sb3JlZE51bWJlciwgdG9kYXl9IGZyb20gJy4uL3V0aWwnXG5cbmV4cG9ydCBjbGFzcyBUYXNrIGV4dGVuZHMgVXNlckludGVyZmFjZUF3YXJlIHtcblxuICAgIHVzZXJJbnRlcmZhY2UgPSBbJ25hbWUnLCAnaHAnLCAnZXAnLCAnY29tcGxldGUnLCAnZGVzdHJveSddXG4gICAgbmFtZVxuXG4gICAgX2hwID0gMFxuICAgIGdldCBocCgpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yZWROdW1iZXIodGhpcy5faHApXG4gICAgfVxuXG4gICAgX2VwID0gMFxuICAgIGdldCBlcCgpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yZWROdW1iZXIodGhpcy5fZXApXG4gICAgfVxuXG4gICAgZ2V0IGNvbXBsZXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvU3RyaW5nOiAoKSA9PiAnZG9uZScsXG4gICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGhwLCBlcCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5faHAgPSBocFxuICAgICAgICB0aGlzLl9lcCA9IGVwXG5cbiAgICAgICAgdGhpcy51bmRvLmRhbmdlciA9IHRydWVcbiAgICAgICAgdGhpcy51bmRvLnNldHRpbmcgPSB0cnVlXG4gICAgfVxuXG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIGNvbnN0IGNoYXJhY3RlciA9IGZpbmRGaXJzdE9iamVjdChDaGFyYWN0ZXIpXG5cbiAgICAgICAgaWYgKGNoYXJhY3Rlcikge1xuICAgICAgICAgICAgY2hhcmFjdGVyLmNoYW5nZUhwQnkodGhpcy5ocClcbiAgICAgICAgICAgIGNoYXJhY3Rlci5jaGFuZ2VFcEJ5KHRoaXMuZXApXG5cbiAgICAgICAgICAgIHRoaXMubWFya0FzQ29tcGxldGVkKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1hcmtBc0NvbXBsZXRlZCgpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWRBdCA9IHRvZGF5KClcbiAgICAgICAgdGhpcy5yZXBsYWNlQ29tcGxldGVXaXRoQ29tcGxldGVkKClcbiAgICB9XG5cbiAgICByZXBsYWNlQ29tcGxldGVXaXRoQ29tcGxldGVkKCkge1xuICAgICAgICBsZXQgaW5kZXhPZkNvbXBsZXRlID0gdGhpcy51c2VySW50ZXJmYWNlLmluZGV4T2YoJ2NvbXBsZXRlJylcbiAgICAgICAgdGhpcy51c2VySW50ZXJmYWNlLnNwbGljZShpbmRleE9mQ29tcGxldGUsIDEsICdjb21wbGV0ZWQnLCAnY29tcGxldGVkQXQnLCAndW5kbycpXG4gICAgfVxuXG4gICAgcmVwbGFjZUNvbXBsZXRlZEF0V2l0aENvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLnJlcGxhY2VDb21wbGV0ZWRXaXRoQ29tcGxldGUoKVxuICAgICAgICB0aGlzLnJlbW92ZVVzZXJJbnRlcmZhY2UoJ2NvbXBsZXRlZEF0JylcbiAgICAgICAgdGhpcy5yZW1vdmVVc2VySW50ZXJmYWNlKCd1bmRvJylcbiAgICB9XG5cbiAgICByZW1vdmVVc2VySW50ZXJmYWNlKHMpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy51c2VySW50ZXJmYWNlLmluZGV4T2YocylcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHRoaXMudXNlckludGVyZmFjZS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuXG4gICAgcmVwbGFjZUNvbXBsZXRlZFdpdGhDb21wbGV0ZSgpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy51c2VySW50ZXJmYWNlLmluZGV4T2YoJ2NvbXBsZXRlZCcpXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB0aGlzLnVzZXJJbnRlcmZhY2Uuc3BsaWNlKGluZGV4LCAxLCAnY29tcGxldGUnKVxuICAgIH1cblxuICAgIHVwZGF0ZUFmdGVyTG9hZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29tcGxldGVkQXQgPT09IHRvZGF5KCkpIHtcbiAgICAgICAgICAgIHRoaXMucmVwbGFjZUNvbXBsZXRlV2l0aENvbXBsZXRlZCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmRvKHJlYXNvbikge1xuICAgICAgICBpZiAocmVhc29uLmxlbmd0aCA8IDEwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnWW91IG5lZWQgdG8gcHJvdmlkZSBhIGdvb2QgcmVhc29uIHRvIHVuZG8gdGhlIHRhc2snKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGFyYWN0ZXIgPSBmaW5kRmlyc3RPYmplY3QoQ2hhcmFjdGVyKVxuICAgICAgICBjaGFyYWN0ZXIuY2hhbmdlSHBCeSgtdGhpcy5ocClcbiAgICAgICAgY2hhcmFjdGVyLmNoYW5nZUVwQnkoLXRoaXMuZXApXG4gICAgICAgIHRoaXMudW5Db21wbGV0ZSgpXG4gICAgfVxuXG4gICAgdW5Db21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWRBdCA9ICcnXG4gICAgICAgIHRoaXMucmVwbGFjZUNvbXBsZXRlZEF0V2l0aENvbXBsZXRlKClcbiAgICB9XG59XG5cbnJlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlKFRhc2spXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Rhc2tzL1Rhc2suanMiXSwic291cmNlUm9vdCI6IiJ9