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
/* harmony export (immutable) */ __webpack_exports__["g"] = initialObjects;


let _applicationObjects = initialObjects.map(x => x);

const applicationObjects = () => {
    return _applicationObjects;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = applicationObjects;


const updateApplicationObjects = objects => {
    _applicationObjects = objects;
};
/* harmony export (immutable) */ __webpack_exports__["f"] = updateApplicationObjects;


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


const replaceObject = (object, newObject) => {
    _applicationObjects = applicationObjects().map(o => {
        if (o === object) {
            return newObject;
        } else {
            return o;
        }
    });
};
/* harmony export (immutable) */ __webpack_exports__["e"] = replaceObject;


window._applicationObjects = applicationObjects;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xpCombo__ = __webpack_require__(14);



class Character extends __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["a" /* UserInterfaceAware */] {

    constructor() {
        super();

        this.userInterface = ['name', 'lvl', 'attributePoints', 'hp', 'hp+', 'ep', 'ep+', 'xp', 'change'];
        this.name = '';
        this.essential = 90;
        this.lvl = 1;
        this.attributePoints = 0;
        this._xp = 0;
        this._maxXp = 50;
        this.xpModifier = 1.2;
        this._maxHp = 5;
        this._hp = 5;
        this._maxEp = 5;
        this._ep = 5;
        this.change.setting = true;
        this['hp+'].hidden = true;
        this['ep+'].hidden = true;
    }

    get xp() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__xpCombo__["d" /* xpPresentation */])(this._xp, this._maxXp);
    }

    get hp() {
        return this.renderBar(this._hp, this._maxHp, '♥️', '♡');
    }
    ['hp+']() {
        this.attributePoints -= 1;
        this._maxHp += 1;
        this.updateAttributeButtons();
    }

    get ep() {
        return this.renderBar(this._ep, this._maxEp, '⚡️️', '☼');
    }
    ['ep+']() {
        this.attributePoints -= 1;
        this._maxEp += 1;
        this.updateAttributeButtons();
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

    changeXpBy(amount) {
        const result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__xpCombo__["e" /* changeXpBy */])(this._xp, amount, this._maxXp, this.xpModifier);
        this._xp = result.xp;
        this._maxXp = result.maxXp;
        this.attributePoints += result.attributePoints;
        this.lvl += result.lvlIncrease;
        this.updateAttributeButtons();
    }

    changeBy(current, max, amount) {
        return Math.max(0, Math.min(max, current + amount));
    }

    updateAttributeButtons() {
        if (this.attributePoints > 0) {
            this['hp+'].hidden = false;
            this['ep+'].hidden = false;
        } else {
            this['hp+'].hidden = true;
            this['ep+'].hidden = true;
        }
    }

    updateAfterLoad() {
        super.updateAfterLoad();
        this.updateAttributeButtons();
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


const today = () => formatDate(new Date());
/* harmony export (immutable) */ __webpack_exports__["a"] = today;


const yesterday = () => {
    const date = new Date();
    date.setDate(date.getDate() - 1);

    return formatDate(date);
};
/* harmony export (immutable) */ __webpack_exports__["c"] = yesterday;


const formatDate = date => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Rendering__ = __webpack_require__(5);




const convertRawTo = (raw, klass) => {
    const pristineObject = new klass();
    const target = new klass();

    try {
        Object.assign(target, raw);
    } catch (e) {
        console.error(e);
        return null;
    }

    target.userInterface = pristineObject.userInterface;
    target.object = pristineObject.object;

    return target;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = convertRawTo;


const createObjectFromRaw = rawObject => {
    const className = rawObject.object;
    const foundClass = __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["c" /* userInterfaceAwareClasses */].find(c => c.name === className);

    if (foundClass) {
        return convertRawTo(rawObject, foundClass);
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

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Objects__["f" /* updateApplicationObjects */])(objects);

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Objects__["b" /* applicationObjects */])().forEach(o => o.updateAfterLoad());

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Objects__["c" /* findFirstObject */])(MyWork).restoreSettingsState();

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Rendering__["c" /* renderAll */])();
        }
    }

    reset() {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Objects__["f" /* updateApplicationObjects */])(__WEBPACK_IMPORTED_MODULE_1__Objects__["g" /* initialObjects */]);
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

const renderInputForArg = (methodForm, arg, value) => {
    const argInput = document.createElement('input');
    methodForm.appendChild(argInput);
    argInput.setAttribute('type', 'text');
    argInput.setAttribute('placeholder', arg);
    argInput.setAttribute('value', value);
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

    const defaultArgsFn = object[`${name}.defaultArgs`] || (() => ({}));
    const defaultArgs = defaultArgsFn.call(object);

    const inputs = args.map(arg => {
        return renderInputForArg(methodForm, arg, defaultArgs[arg] || '');
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

    affectCharacter(hp, ep, xpGain) {
        this.sleptAt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* today */])();

        const character = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Objects__["c" /* findFirstObject */])(__WEBPACK_IMPORTED_MODULE_3__character_Character__["a" /* Character */]);
        character.changeHpBy(hp);
        character.changeEpBy(ep);
        character.changeXpBy(xpGain);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__xpCombo__ = __webpack_require__(14);






class SleepControl extends __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["a" /* UserInterfaceAware */] {
    get hp() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* coloredNumber */])(this._hp);
    }

    get ep() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* coloredNumber */])(this._ep);
    }

    get xpGain() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* coloredNumber */])(this._xpGain);
    }

    get xpCombo() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__xpCombo__["a" /* xpComboPresentation */])(this._xpCombo);
    }

    constructor(name, hp, ep, xpGain) {
        super();
        this.name = '';
        this.message = 'already slept';
        this._hp = 0;
        this._ep = 0;
        this._xpGain = 0;
        this._xpCombo = 1;
        this.sleptAt = '';
        this.name = name || '';
        this._hp = hp || 0;
        this._ep = ep || 0;
        this._xpGain = xpGain || 0;

        this.change.setting = true;

        this.updateAfterLoad();
    }

    updateAfterLoad() {
        const sleep = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Objects__["c" /* findFirstObject */])(__WEBPACK_IMPORTED_MODULE_3__Sleep__["a" /* Sleep */]);

        this[this.name] = () => {
            sleep.affectCharacter(this.hp, this.ep, this.xpGain * this._xpCombo);
            this._xpCombo = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__xpCombo__["b" /* nextXpCombo */])(this.sleptAt, this._xpCombo);
            this.sleptAt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* today */])();
        };

        if (sleep.sleptAt !== __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* today */])()) {
            this.userInterface = this.commonUserInterfaceWith(this.name);
        } else {
            this.userInterface = this.commonUserInterfaceWith('message');
        }
    }

    change(hp, ep, xpGain) {
        this._hp = hp;
        this._ep = ep;
        this._xpGain = xpGain;
    }

    ['change.defaultArgs']() {
        return {
            hp: this._hp,
            ep: this._ep,
            xpGain: this._xpGain
        };
    }

    commonUserInterfaceWith(...args) {
        return ['hp', 'ep', 'xpGain', 'xpCombo', ...args, 'change', 'destroy'];
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SkilledTask__ = __webpack_require__(15);




class NewTask extends __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["a" /* UserInterfaceAware */] {

    constructor() {
        super();
        this.userInterface = ['create'];
        this.setting = true;
        this.essential = 50;
        this.create.success = true;
    }

    create(name, hp, ep, xpGain, isSkilled) {
        if (isSkilled === 'true' || isSkilled === 'yes') {
            return new __WEBPACK_IMPORTED_MODULE_2__SkilledTask__["a" /* SkilledTask */](name, hp, ep, xpGain);
        } else {
            return new __WEBPACK_IMPORTED_MODULE_1__Task__["a" /* Task */](name, hp, ep, xpGain);
        }
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__xpCombo__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__MyWork__ = __webpack_require__(4);







class Task extends __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["a" /* UserInterfaceAware */] {
    get hp() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* coloredNumber */])(this._hp);
    }

    get ep() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* coloredNumber */])(this._ep);
    }

    get xpGain() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* coloredNumber */])(this._xpGain);
    }

    get xpCombo() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__xpCombo__["a" /* xpComboPresentation */])(this._xpCombo);
    }

    get completed() {
        return {
            toString: () => 'done',
            color: 'green'
        };
    }

    constructor(name, hp, ep, xpGain) {
        super();
        this.userInterface = ['name', 'hp', 'ep', 'xpGain', 'xpCombo', 'complete', 'change', 'makeSkilled', 'destroy'];
        this._hp = 0;
        this._ep = 0;
        this._xpGain = 0;
        this._xpCombo = 1;
        this.name = name || '';
        this._hp = hp || 0;
        this._ep = ep || 0;
        this._xpGain = xpGain || 0;

        this.undo.danger = true;
        this.undo.setting = true;
        this.change.setting = true;
        this.makeSkilled.setting = true;
    }

    change(name, hp, ep, xpGain) {
        this.name = name;
        this._hp = hp;
        this._ep = ep;
        this._xpGain = xpGain;
    }

    ['change.defaultArgs']() {
        return {
            name: this.name,
            hp: this._hp,
            ep: this._ep,
            xpGain: this._xpGain
        };
    }

    complete() {
        const character = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Objects__["c" /* findFirstObject */])(__WEBPACK_IMPORTED_MODULE_2__character_Character__["a" /* Character */]);

        if (character) {
            character.changeHpBy(this.hp);
            character.changeEpBy(this.ep);

            let xpAmount = this.xpGain * this._xpCombo;
            character.changeXpBy(xpAmount);
            this.updateXpBeforeMarkingAsComplete(xpAmount);

            this.markAsCompleted();
        }
    }

    updateXpBeforeMarkingAsComplete(amount) {
        this._xpCombo = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__xpCombo__["b" /* nextXpCombo */])(this.completedAt, this._xpCombo);
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

    makeSkilled() {
        const skilledSubclass = Task.subclasses['skilled'];
        const skilledTask = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__MyWork__["b" /* convertRawTo */])(this, skilledSubclass);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Objects__["e" /* replaceObject */])(this, skilledTask);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Task;


Task.subclasses = {};

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["b" /* registerUserInterfaceAware */])(Task);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(3);


const nextXpCombo = (previousDate, xpCombo) => {
    if (previousDate === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* yesterday */])()) {
        return xpCombo + 1;
    } else {
        return 1;
    }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = nextXpCombo;


const xpComboPresentation = xpCombo => `x${xpCombo}`;
/* harmony export (immutable) */ __webpack_exports__["a"] = xpComboPresentation;


const xpPresentation = (xp, max) => `${Math.floor(xp)}/${Math.floor(max)}`;
/* harmony export (immutable) */ __webpack_exports__["d"] = xpPresentation;


const changeXpBy = (xp, amount, maxXp, xpModifier) => {
    let attributePoints = 0;
    let lvlIncrease = 0;

    xp += amount;

    while (xp >= maxXp) {
        attributePoints++;
        lvlIncrease++;
        xp -= maxXp;
        maxXp = Math.floor(maxXp * xpModifier);
    }

    if (xp < 0) {
        xp = 0;
    }

    return {
        xp: xp,
        maxXp: maxXp,
        attributePoints: attributePoints,
        lvlIncrease: lvlIncrease
    };
};
/* harmony export (immutable) */ __webpack_exports__["e"] = changeXpBy;


const improvedAttribute = function (number, lvl) {
    const topLevel = 30;

    if (number > 0) {
        number = number * (1 + (lvl - 1) / topLevel);
    }

    if (number < 0) {
        number = number / (1 + (lvl - 1) / topLevel);
    }

    return Math.floor(number * 100) / 100;
};
/* harmony export (immutable) */ __webpack_exports__["c"] = improvedAttribute;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Task__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xpCombo__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(3);





class SkilledTask extends __WEBPACK_IMPORTED_MODULE_1__Task__["a" /* Task */] {

    get hp() {
        const hp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__xpCombo__["c" /* improvedAttribute */])(this._hp, this.lvl);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* coloredNumber */])(hp);
    }

    get ep() {
        const ep = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__xpCombo__["c" /* improvedAttribute */])(this._ep, this.lvl);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* coloredNumber */])(ep);
    }

    get xpGain() {
        const xpGain = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__xpCombo__["c" /* improvedAttribute */])(this._xpGain, this.lvl);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* coloredNumber */])(xpGain);
    }

    get xp() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__xpCombo__["d" /* xpPresentation */])(this._xp, this._maxXp);
    }

    constructor(name, hp, ep, xpGain) {
        super(name, hp, ep, xpGain);
        this.lvl = 1;
        this._xp = 0;
        this._maxXp = 25;
        this.xpModifier = 1.2;
        this.userInterface.splice('name', 0, 'lvl', 'xp');
    }

    updateXpBeforeMarkingAsComplete(amount) {
        const result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__xpCombo__["e" /* changeXpBy */])(this._xp, amount, this._maxXp, this.xpModifier);
        this._xp = result.xp;
        this._maxXp = result.maxXp;
        this.lvl += result.lvlIncrease;

        super.updateXpBeforeMarkingAsComplete();
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = SkilledTask;


__WEBPACK_IMPORTED_MODULE_1__Task__["a" /* Task */].subclasses['skilled'] = SkilledTask;

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["b" /* registerUserInterfaceAware */])(SkilledTask);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmI1MDU5NzRlZTg5YmEyNmYwZDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJJbnRlcmZhY2VBd2FyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVyL0NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTXlXb3JrLmpzIiwid2VicGFjazovLy8uL3NyYy9SZW5kZXJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NsZWVwL1NsZWVwLmpzIiwid2VicGFjazovLy8uL3NyYy9GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc2Vhc2VzL0Rpc2Vhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc2Vhc2VzL05ld0Rpc2Vhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zbGVlcC9TbGVlcENvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL05ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3hwQ29tYm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL1NraWxsZWRUYXNrLmpzIl0sIm5hbWVzIjpbInVzZXJJbnRlcmZhY2VBd2FyZUNsYXNzZXMiLCJVc2VySW50ZXJmYWNlQXdhcmUiLCJjb25zdHJ1Y3RvciIsImRlZmF1bHRVc2VySW50ZXJmYWNlIiwidXNlckludGVyZmFjZSIsImluZGV4T2YiLCJFcnJvciIsIm5hbWUiLCJvYmplY3QiLCJkZXN0cm95IiwiZGFuZ2VyIiwic2V0dGluZyIsIm9idGFpbkFsbFVzZXJJbnRlcmZhY2UiLCJjb25jYXQiLCJpbmRleCIsImFwcGxpY2F0aW9uT2JqZWN0cyIsInNwbGljZSIsInJlbmRlckFsbCIsImhpZGVVc2VySW50ZXJmYWNlIiwiaGlkZGVuIiwic2hvd1VzZXJJbnRlcmZhY2UiLCJ1cGRhdGVBZnRlckxvYWQiLCJyZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZSIsImFDbGFzcyIsInB1c2giLCJpbml0aWFsT2JqZWN0cyIsIl9hcHBsaWNhdGlvbk9iamVjdHMiLCJtYXAiLCJ4IiwidXBkYXRlQXBwbGljYXRpb25PYmplY3RzIiwib2JqZWN0cyIsImZpbmRGaXJzdE9iamVjdCIsIm9iamVjdENsYXNzIiwiZmluZCIsImZpbmRBbGxPYmplY3RzIiwiZmlsdGVyIiwibWFrZVN1cmVJbml0aWFsT2JqZWN0c0FyZVByZXNlbnQiLCJmb3JFYWNoIiwiZm91bmQiLCJyZXBsYWNlT2JqZWN0IiwibmV3T2JqZWN0IiwibyIsIndpbmRvdyIsIkNoYXJhY3RlciIsImVzc2VudGlhbCIsImx2bCIsImF0dHJpYnV0ZVBvaW50cyIsIl94cCIsIl9tYXhYcCIsInhwTW9kaWZpZXIiLCJfbWF4SHAiLCJfaHAiLCJfbWF4RXAiLCJfZXAiLCJjaGFuZ2UiLCJ4cCIsInhwUHJlc2VudGF0aW9uIiwiaHAiLCJyZW5kZXJCYXIiLCJ1cGRhdGVBdHRyaWJ1dGVCdXR0b25zIiwiZXAiLCJjdXJyZW50IiwibWF4IiwiZmlsbGVkU3ltYm9sIiwiZW1wdHlTeW1ib2wiLCJiYXJWaWV3IiwiaSIsIk1hdGgiLCJmbG9vciIsIlN0cmluZyIsInRpdGxlIiwiY2hhbmdlSHBCeSIsImFtb3VudCIsImNoYW5nZUJ5IiwiY2hhbmdlRXBCeSIsImNoYW5nZVhwQnkiLCJyZXN1bHQiLCJtYXhYcCIsImx2bEluY3JlYXNlIiwibWluIiwiY29sb3JlZE51bWJlciIsIm51bWJlciIsIk51bWJlciIsInBhcnNlRmxvYXQiLCJjb2xvciIsInRvZGF5IiwiZm9ybWF0RGF0ZSIsIkRhdGUiLCJ5ZXN0ZXJkYXkiLCJkYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJkYXkiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiY29udmVydFJhd1RvIiwicmF3Iiwia2xhc3MiLCJwcmlzdGluZU9iamVjdCIsInRhcmdldCIsIk9iamVjdCIsImFzc2lnbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjcmVhdGVPYmplY3RGcm9tUmF3IiwicmF3T2JqZWN0IiwiY2xhc3NOYW1lIiwiZm91bmRDbGFzcyIsImMiLCJNeVdvcmsiLCJsb2NhbFN0b3JhZ2VLZXkiLCJzZXR0aW5nc1Nob3duIiwiZXhwb3J0Iiwic2F2ZSIsInN1Y2Nlc3MiLCJyZXNldCIsInJlbG9hZCIsImltcG9ydEl0IiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsInJhd09iamVjdHMiLCJwYXJzZSIsInJlc3RvcmVTZXR0aW5nc1N0YXRlIiwic2V0dGluZ3MiLCJoaWRlU2V0dGluZ3MiLCJzaG93U2V0dGluZ3MiLCJvYmoiLCJwcm9wIiwiYXBwQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvb2xzQ29udGFpbmVyIiwiZmlsdGVyVG9vbCIsImV4dHJhY3RBcmdzU3RyaW5nIiwiZm5TdHIiLCJzbGljZSIsInBhcnNlQXJnc1N0cmluZyIsImFyZ1N0ciIsInNwbGl0IiwicyIsInRyaW0iLCJsZW5ndGgiLCJwYXJzZUZ1bmN0aW9uQXJncyIsImZuIiwidG9TdHJpbmciLCJyZW5kZXJJbnB1dEZvckFyZyIsIm1ldGhvZEZvcm0iLCJhcmciLCJ2YWx1ZSIsImFyZ0lucHV0IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwic2V0QXR0cmlidXRlIiwiaGFuZGxlTWV0aG9kQ2FsbCIsInByb3BlcnR5IiwiaW5wdXRzIiwiY2xlYXIiLCJhcmdzIiwiaW5wdXQiLCJjYWxsIiwiZm9jdXMiLCJyZW5kZXJPYmplY3QiLCJyZW5kZXJNZXRob2QiLCJvYmplY3REaXYiLCJtZXRob2QiLCJjbGFzc0xpc3QiLCJhZGQiLCJkZWZhdWx0QXJnc0ZuIiwiZGVmYXVsdEFyZ3MiLCJhdXRvIiwiaGFuZGxlQXJnQ2hhbmdlIiwiZXZlbnQiLCJvbmNoYW5nZSIsIm9ua2V5dXAiLCJvbnBhc3RlIiwibWV0aG9kRGl2IiwidGV4dENvbnRlbnQiLCJvbmNsaWNrIiwicHJldmVudERlZmF1bHQiLCJyZW5kZXJQcm9wZXJ0eSIsInByb3BlcnR5RGl2IiwicmVuZGVyVXNlckNvbnRyb2wiLCJjb250YWluZXIiLCJyZW5kZXJUb29sIiwiY29udGFpbnMiLCJzdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInNlYXJjaFN0cmluZyIsImNvbnRhaW5zSW5PYmplY3QiLCJlc3NlbnRpYWxDb21wYXJlIiwiYSIsImIiLCJvYmplY3RDb21wYXJlIiwiY29tcGFyZUJ5RXNzZW50aWFsIiwiY29tcGFyZUJ5Q2xhc3MiLCJsb2NhbGVDb21wYXJlIiwiY29tcGFyZUJ5TmFtZSIsIm15V29yayIsImlubmVySFRNTCIsImZpbHRlclZhbHVlIiwic29ydCIsIlNsZWVwIiwic2xlcHRBdCIsImFmZmVjdENoYXJhY3RlciIsInhwR2FpbiIsImNoYXJhY3RlciIsImNvbnRyb2wiLCJGaWx0ZXIiLCJzZWFyY2giLCJEaXNlYXNlIiwiYWZmZWN0ZWRBdCIsIk5ld0Rpc2Vhc2UiLCJjcmVhdGUiLCJTbGVlcENvbnRyb2wiLCJfeHBHYWluIiwieHBDb21ibyIsInhwQ29tYm9QcmVzZW50YXRpb24iLCJfeHBDb21ibyIsIm1lc3NhZ2UiLCJzbGVlcCIsIm5leHRYcENvbWJvIiwiY29tbW9uVXNlckludGVyZmFjZVdpdGgiLCJOZXdUYXNrIiwiaXNTa2lsbGVkIiwiVGFzayIsImNvbXBsZXRlZCIsInVuZG8iLCJtYWtlU2tpbGxlZCIsImNvbXBsZXRlIiwieHBBbW91bnQiLCJ1cGRhdGVYcEJlZm9yZU1hcmtpbmdBc0NvbXBsZXRlIiwibWFya0FzQ29tcGxldGVkIiwiY29tcGxldGVkQXQiLCJyZXBsYWNlQ29tcGxldGVXaXRoQ29tcGxldGVkIiwiaW5kZXhPZkNvbXBsZXRlIiwicmVwbGFjZUNvbXBsZXRlZEF0V2l0aENvbXBsZXRlIiwicmVwbGFjZUNvbXBsZXRlZFdpdGhDb21wbGV0ZSIsInJlbW92ZVVzZXJJbnRlcmZhY2UiLCJyZWFzb24iLCJsb2ciLCJ1bkNvbXBsZXRlIiwic2tpbGxlZFN1YmNsYXNzIiwic3ViY2xhc3NlcyIsInNraWxsZWRUYXNrIiwicHJldmlvdXNEYXRlIiwiaW1wcm92ZWRBdHRyaWJ1dGUiLCJ0b3BMZXZlbCIsIlNraWxsZWRUYXNrIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTs7QUFFTyxNQUFNQSw0QkFBNEIsRUFBbEM7QUFBQTtBQUFBOztBQUVBLE1BQU1DLGtCQUFOLENBQXlCOztBQUs1QkMsa0JBQWM7QUFBQSxhQUhkQyxvQkFHYyxHQUhTLENBQUMsUUFBRCxDQUdUO0FBQUEsYUFGZEMsYUFFYyxHQUZFLEVBRUY7O0FBQ1YsWUFBSUosMEJBQTBCSyxPQUExQixDQUFrQyxLQUFLSCxXQUF2QyxJQUFzRCxDQUExRCxFQUE2RDtBQUN6RCxrQkFBTSxJQUFJSSxLQUFKLENBQ0QsdURBQXNELEtBQUtKLFdBQUwsQ0FBaUJLLElBQUssRUFEM0UsQ0FBTjtBQUVIOztBQUVELGFBQUtDLE1BQUwsR0FBYyxLQUFLTixXQUFMLENBQWlCSyxJQUEvQjtBQUNBLGFBQUtFLE9BQUwsQ0FBYUMsTUFBYixHQUFzQixJQUF0QjtBQUNBLGFB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a0MsR0FOckIsR0FNcUI7QUFFOUIsYUFBSzdDLGFBQUwsQ0FBbUJZLE1BQW5CLENBQTBCLE1BQTFCLEVBQWtDLENBQWxDLEVBQXFDLEtBQXJDLEVBQTRDLElBQTVDO0FBQ0g7O0FBRUQ2TixvQ0FBZ0NySyxNQUFoQyxFQUF3QztBQUNwQyxjQUFNSSxTQUFTLG1GQUFBRCxDQUFXLEtBQUs1QixHQUFoQixFQUFxQnlCLE1BQXJCLEVBQTZCLEtBQUt4QixNQUFsQyxFQUEwQyxLQUFLQyxVQUEvQyxDQUFmO0FBQ0EsYUFBS0YsR0FBTCxHQUFXNkIsT0FBT3JCLEVBQWxCO0FBQ0EsYUFBS1AsTUFBTCxHQUFjNEIsT0FBT0MsS0FBckI7QUFDQSxhQUFLaEMsR0FBTCxJQUFZK0IsT0FBT0UsV0FBbkI7O0FBRUEsY0FBTStKLCtCQUFOO0FBQ0g7O0FBdkNpQztBQUFBO0FBQUE7O0FBMkN0QyxtREFBQU4sQ0FBS2tCLFVBQUwsQ0FBZ0IsU0FBaEIsSUFBNkJLLFdBQTdCOztBQUVBLDhHQUFBeE8sQ0FBMkJ3TyxXQUEzQixFIiwiZmlsZSI6InB1YmxpYy9qcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2YjUwNTk3NGVlODliYTI2ZjBkNCIsImltcG9ydCB7YXBwbGljYXRpb25PYmplY3RzfSBmcm9tICcuL09iamVjdHMnXG5pbXBvcnQge3JlbmRlckFsbH0gZnJvbSAnLi9SZW5kZXJpbmcnXG5cbmV4cG9ydCBjb25zdCB1c2VySW50ZXJmYWNlQXdhcmVDbGFzc2VzID0gW11cblxuZXhwb3J0IGNsYXNzIFVzZXJJbnRlcmZhY2VBd2FyZSB7XG5cbiAgICBkZWZhdWx0VXNlckludGVyZmFjZSA9IFsnb2JqZWN0J11cbiAgICB1c2VySW50ZXJmYWNlID0gW11cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAodXNlckludGVyZmFjZUF3YXJlQ2xhc3Nlcy5pbmRleE9mKHRoaXMuY29uc3RydWN0b3IpIDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBZb3UgZm9yZ290IHRvIHJlZ2lzdGVyIGEgdXNlciBpbnRlcmZhY2UgYXdhcmUgY2xhc3MgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9YClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub2JqZWN0ID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgICAgIHRoaXMuZGVzdHJveS5kYW5nZXIgPSB0cnVlXG4gICAgICAgIHRoaXMuZGVzdHJveS5zZXR0aW5nID0gdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0FycmF5PFN0cmluZz59XG4gICAgICovXG4gICAgb2J0YWluQWxsVXNlckludGVyZmFjZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdFVzZXJJbnRlcmZhY2UuY29uY2F0KHRoaXMudXNlckludGVyZmFjZSlcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IGFwcGxpY2F0aW9uT2JqZWN0cygpLmluZGV4T2YodGhpcylcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uT2JqZWN0cygpLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgIHJlbmRlckFsbCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlVXNlckludGVyZmFjZSgpIHtcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlXG4gICAgfVxuXG4gICAgc2hvd1VzZXJJbnRlcmZhY2UoKSB7XG4gICAgICAgIHRoaXMuaGlkZGVuID0gZmFsc2VcbiAgICB9XG5cbiAgICB1cGRhdGVBZnRlckxvYWQoKSB7fVxuXG59XG5cbmV4cG9ydCBjb25zdCByZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZSA9IGFDbGFzcyA9PiB7XG4gICAgdXNlckludGVyZmFjZUF3YXJlQ2xhc3Nlcy5wdXNoKGFDbGFzcylcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVXNlckludGVyZmFjZUF3YXJlLmpzIiwiaW1wb3J0IHtNeVdvcmt9IGZyb20gJy4vTXlXb3JrJ1xuaW1wb3J0IHtDaGFyYWN0ZXJ9IGZyb20gJy4vY2hhcmFjdGVyL0NoYXJhY3RlcidcbmltcG9ydCB7TmV3VGFza30gZnJvbSAnLi90YXNrcy9OZXdUYXNrJ1xuaW1wb3J0IHtOZXdEaXNlYXNlfSBmcm9tICcuL2Rpc2Vhc2VzL05ld0Rpc2Vhc2UnXG5pbXBvcnQge1NsZWVwfSBmcm9tICcuL3NsZWVwL1NsZWVwJ1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbE9iamVjdHMgPSBbXG4gICAgbmV3IE15V29yaygpLFxuICAgIG5ldyBDaGFyYWN0ZXIoKSxcbiAgICBuZXcgTmV3VGFzaygpLFxuICAgIG5ldyBOZXdEaXNlYXNlKCksXG4gICAgbmV3IFNsZWVwKCksXG5dXG5cbmxldCBfYXBwbGljYXRpb25PYmplY3RzID0gaW5pdGlhbE9iamVjdHMubWFwKHggPT4geClcblxuZXhwb3J0IGNvbnN0IGFwcGxpY2F0aW9uT2JqZWN0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gX2FwcGxpY2F0aW9uT2JqZWN0c1xufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlQXBwbGljYXRpb25PYmplY3RzID0gKG9iamVjdHMpID0+IHtcbiAgICBfYXBwbGljYXRpb25PYmplY3RzID0gb2JqZWN0c1xufVxuXG5leHBvcnQgY29uc3QgZmluZEZpcnN0T2JqZWN0ID0gb2JqZWN0Q2xhc3MgPT5cbiAgICBhcHBsaWNhdGlvbk9iamVjdHMoKVxuICAgICAgICAuZmluZChvYmplY3QgPT4gb2JqZWN0IGluc3RhbmNlb2Ygb2JqZWN0Q2xhc3MpXG5cbmV4cG9ydCBjb25zdCBmaW5kQWxsT2JqZWN0cyA9IG9iamVjdENsYXNzID0+XG4gICAgYXBwbGljYXRpb25PYmplY3RzKClcbiAgICAgICAgLmZpbHRlcihvYmplY3QgPT4gb2JqZWN0IGluc3RhbmNlb2Ygb2JqZWN0Q2xhc3MpXG5cbmV4cG9ydCBjb25zdCBtYWtlU3VyZUluaXRpYWxPYmplY3RzQXJlUHJlc2VudCA9ICgpID0+IHtcbiAgICBpbml0aWFsT2JqZWN0cy5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IGZvdW5kID0gZmluZEZpcnN0T2JqZWN0KG9iamVjdC5jb25zdHJ1Y3RvcilcbiAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgYXBwbGljYXRpb25PYmplY3RzKCkucHVzaChvYmplY3QpXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3QgcmVwbGFjZU9iamVjdCA9IChvYmplY3QsIG5ld09iamVjdCkgPT4ge1xuICAgIF9hcHBsaWNhdGlvbk9iamVjdHMgPSBhcHBsaWNhdGlvbk9iamVjdHMoKS5tYXAobyA9PiB7XG4gICAgICAgIGlmIChvID09PSBvYmplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXdPYmplY3RcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG53aW5kb3cuX2FwcGxpY2F0aW9uT2JqZWN0cyA9IGFwcGxpY2F0aW9uT2JqZWN0c1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL09iamVjdHMuanMiLCJpbXBvcnQge3JlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlLCBVc2VySW50ZXJmYWNlQXdhcmV9IGZyb20gJy4uL1VzZXJJbnRlcmZhY2VBd2FyZSdcbmltcG9ydCB7Y2hhbmdlWHBCeSwgeHBQcmVzZW50YXRpb259IGZyb20gJy4uL3hwQ29tYm8nXG5cbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXIgZXh0ZW5kcyBVc2VySW50ZXJmYWNlQXdhcmUge1xuXG4gICAgdXNlckludGVyZmFjZSA9IFsnbmFtZScsICdsdmwnLCAnYXR0cmlidXRlUG9pbnRzJywgJ2hwJywgJ2hwKycsICdlcCcsICdlcCsnLCAneHAnLCAnY2hhbmdlJ11cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG5cbiAgICAgICAgdGhpcy5jaGFuZ2Uuc2V0dGluZyA9IHRydWVcbiAgICAgICAgdGhpc1snaHArJ10uaGlkZGVuID0gdHJ1ZVxuICAgICAgICB0aGlzWydlcCsnXS5oaWRkZW4gPSB0cnVlXG4gICAgfVxuXG4gICAgbmFtZSA9ICcnXG4gICAgZXNzZW50aWFsID0gOTBcblxuICAgIGx2bCA9IDFcbiAgICBhdHRyaWJ1dGVQb2ludHMgPSAwXG5cbiAgICBfeHAgPSAwXG4gICAgX21heFhwID0gNTBcbiAgICB4cE1vZGlmaWVyID0gMS4yXG4gICAgZ2V0IHhwKCkge1xuICAgICAgICByZXR1cm4geHBQcmVzZW50YXRpb24odGhpcy5feHAsIHRoaXMuX21heFhwKVxuICAgIH1cblxuICAgIF9tYXhIcCA9IDVcbiAgICBfaHAgPSA1XG4gICAgZ2V0IGhwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJCYXIodGhpcy5faHAsIHRoaXMuX21heEhwLCAn4pml77iPJywgJ+KZoScpXG4gICAgfVxuICAgIFsnaHArJ10oKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlUG9pbnRzIC09IDFcbiAgICAgICAgdGhpcy5fbWF4SHAgKz0gMVxuICAgICAgICB0aGlzLnVwZGF0ZUF0dHJpYnV0ZUJ1dHRvbnMoKVxuICAgIH1cblxuICAgIF9tYXhFcCA9IDVcbiAgICBfZXAgPSA1XG4gICAgZ2V0IGVwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJCYXIodGhpcy5fZXAsIHRoaXMuX21heEVwLCAn4pqh77iP77iPJywgJ+KYvCcpXG4gICAgfVxuICAgIFsnZXArJ10oKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlUG9pbnRzIC09IDFcbiAgICAgICAgdGhpcy5fbWF4RXAgKz0gMVxuICAgICAgICB0aGlzLnVwZGF0ZUF0dHJpYnV0ZUJ1dHRvbnMoKVxuICAgIH1cblxuICAgIGNoYW5nZShuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB9XG5cbiAgICByZW5kZXJCYXIoY3VycmVudCwgbWF4LCBmaWxsZWRTeW1ib2wsIGVtcHR5U3ltYm9sKSB7XG4gICAgICAgIGxldCBiYXJWaWV3ID0gJydcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGguZmxvb3IoY3VycmVudCk7IGkrKykge1xuICAgICAgICAgICAgYmFyVmlldyArPSBmaWxsZWRTeW1ib2xcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSBNYXRoLmZsb29yKGN1cnJlbnQpOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgICAgIGJhclZpZXcgKz0gZW1wdHlTeW1ib2xcbiAgICAgICAgfVxuXG4gICAgICAgIC8vbm9pbnNwZWN0aW9uIEpTUHJpbWl0aXZlVHlwZVdyYXBwZXJVc2FnZVxuICAgICAgICBiYXJWaWV3ID0gbmV3IFN0cmluZyhiYXJWaWV3KVxuICAgICAgICAvL25vaW5zcGVjdGlvbiBKU1ByaW1pdGl2ZVR5cGVXcmFwcGVyVXNhZ2VcbiAgICAgICAgYmFyVmlldy50aXRsZSA9IGAke2N1cnJlbnR9LyR7bWF4fWBcblxuICAgICAgICByZXR1cm4gYmFyVmlld1xuICAgIH1cblxuICAgIGNoYW5nZUhwQnkoYW1vdW50KSB7XG4gICAgICAgIHRoaXMuX2hwID0gdGhpcy5jaGFuZ2VCeSh0aGlzLl9ocCwgdGhpcy5fbWF4SHAsIGFtb3VudClcbiAgICB9XG5cbiAgICBjaGFuZ2VFcEJ5KGFtb3VudCkge1xuICAgICAgICB0aGlzLl9lcCA9IHRoaXMuY2hhbmdlQnkodGhpcy5fZXAsIHRoaXMuX21heEVwLCBhbW91bnQpXG4gICAgfVxuXG4gICAgY2hhbmdlWHBCeShhbW91bnQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY2hhbmdlWHBCeSh0aGlzLl94cCwgYW1vdW50LCB0aGlzLl9tYXhYcCwgdGhpcy54cE1vZGlmaWVyKVxuICAgICAgICB0aGlzLl94cCA9IHJlc3VsdC54cFxuICAgICAgICB0aGlzLl9tYXhYcCA9IHJlc3VsdC5tYXhYcFxuICAgICAgICB0aGlzLmF0dHJpYnV0ZVBvaW50cyArPSByZXN1bHQuYXR0cmlidXRlUG9pbnRzXG4gICAgICAgIHRoaXMubHZsICs9IHJlc3VsdC5sdmxJbmNyZWFzZVxuICAgICAgICB0aGlzLnVwZGF0ZUF0dHJpYnV0ZUJ1dHRvbnMoKVxuICAgIH1cblxuICAgIGNoYW5nZUJ5KGN1cnJlbnQsIG1heCwgYW1vdW50KSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXgsIGN1cnJlbnQgKyBhbW91bnQpKVxuICAgIH1cblxuICAgIHVwZGF0ZUF0dHJpYnV0ZUJ1dHRvbnMoKSB7XG4gICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZVBvaW50cyA+IDApIHtcbiAgICAgICAgICAgIHRoaXNbJ2hwKyddLmhpZGRlbiA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzWydlcCsnXS5oaWRkZW4gPSBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpc1snaHArJ10uaGlkZGVuID0gdHJ1ZVxuICAgICAgICAgICAgdGhpc1snZXArJ10uaGlkZGVuID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlQWZ0ZXJMb2FkKCkge1xuICAgICAgICBzdXBlci51cGRhdGVBZnRlckxvYWQoKVxuICAgICAgICB0aGlzLnVwZGF0ZUF0dHJpYnV0ZUJ1dHRvbnMoKVxuICAgIH1cblxufVxuXG5yZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZShDaGFyYWN0ZXIpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NoYXJhY3Rlci9DaGFyYWN0ZXIuanMiLCJleHBvcnQgY29uc3QgY29sb3JlZE51bWJlciA9IG51bWJlciA9PiB7XG4gICAgLy9ub2luc3BlY3Rpb24gSlNQcmltaXRpdmVUeXBlV3JhcHBlclVzYWdlXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IE51bWJlcihwYXJzZUZsb2F0KG51bWJlcikpXG5cbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICAvL25vaW5zcGVjdGlvbiBKU1ByaW1pdGl2ZVR5cGVXcmFwcGVyVXNhZ2VcbiAgICAgICAgcmVzdWx0LmNvbG9yID0gJ3JlZCdcbiAgICB9IGVsc2UgaWYgKG51bWJlciA+IDApIHtcbiAgICAgICAgLy9ub2luc3BlY3Rpb24gSlNQcmltaXRpdmVUeXBlV3JhcHBlclVzYWdlXG4gICAgICAgIHJlc3VsdC5jb2xvciA9ICdncmVlbidcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBjb25zdCB0b2RheSA9ICgpID0+IGZvcm1hdERhdGUobmV3IERhdGUoKSlcblxuZXhwb3J0IGNvbnN0IHllc3RlcmRheSA9ICgpID0+IHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIDEpXG5cbiAgICByZXR1cm4gZm9ybWF0RGF0ZShkYXRlKVxufVxuXG5jb25zdCBmb3JtYXREYXRlID0gZGF0ZSA9PiB7XG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKClcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG5cbiAgICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwuanMiLCJpbXBvcnQge3JlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlLCBVc2VySW50ZXJmYWNlQXdhcmUsIHVzZXJJbnRlcmZhY2VBd2FyZUNsYXNzZXN9IGZyb20gJy4vVXNlckludGVyZmFjZUF3YXJlJ1xuaW1wb3J0IHthcHBsaWNhdGlvbk9iamVjdHMsIGZpbmRGaXJzdE9iamVjdCwgaW5pdGlhbE9iamVjdHMsIHVwZGF0ZUFwcGxpY2F0aW9uT2JqZWN0c30gZnJvbSAnLi9PYmplY3RzJ1xuaW1wb3J0IHtyZW5kZXJBbGx9IGZyb20gJy4vUmVuZGVyaW5nJ1xuXG5leHBvcnQgY29uc3QgY29udmVydFJhd1RvID0gKHJhdywga2xhc3MpID0+IHtcbiAgICBjb25zdCBwcmlzdGluZU9iamVjdCA9IG5ldyBrbGFzcygpXG4gICAgY29uc3QgdGFyZ2V0ID0gbmV3IGtsYXNzKClcblxuICAgIHRyeSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCByYXcpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgdGFyZ2V0LnVzZXJJbnRlcmZhY2UgPSBwcmlzdGluZU9iamVjdC51c2VySW50ZXJmYWNlXG4gICAgdGFyZ2V0Lm9iamVjdCA9IHByaXN0aW5lT2JqZWN0Lm9iamVjdFxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuXG5jb25zdCBjcmVhdGVPYmplY3RGcm9tUmF3ID0gKHJhd09iamVjdCkgPT4ge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHJhd09iamVjdC5vYmplY3RcbiAgICBjb25zdCBmb3VuZENsYXNzID0gdXNlckludGVyZmFjZUF3YXJlQ2xhc3Nlcy5maW5kKGMgPT4gYy5uYW1lID09PSBjbGFzc05hbWUpXG5cbiAgICBpZiAoZm91bmRDbGFzcykge1xuICAgICAgICByZXR1cm4gY29udmVydFJhd1RvKHJhd09iamVjdCwgZm91bmRDbGFzcylcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgY2xhc3MgTXlXb3JrIGV4dGVuZHMgVXNlckludGVyZmFjZUF3YXJlIHtcblxuICAgIHVzZXJJbnRlcmZhY2UgPSBbJ3NhdmUnLCAnc2V0dGluZ3MnLCAncmVsb2FkJywgJ2ltcG9ydEl0JywgJ3Jlc2V0J11cbiAgICBsb2NhbFN0b3JhZ2VLZXkgPSAnTXlXb3JrLnNhdmVkV29yaydcbiAgICBzZXR0aW5nc1Nob3duID0gdHJ1ZVxuICAgIGVzc2VudGlhbCA9IDEwMFxuICAgIGV4cG9ydCA9ICcnXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLnNhdmUuc3VjY2VzcyA9IHRydWVcbiAgICAgICAgdGhpcy5yZXNldC5kYW5nZXIgPSB0cnVlXG4gICAgICAgIHRoaXMucmVsb2FkLnNldHRpbmcgPSB0cnVlXG4gICAgICAgIHRoaXMucmVzZXQuc2V0dGluZyA9IHRydWVcbiAgICAgICAgdGhpcy5pbXBvcnRJdC5zZXR0aW5nID0gdHJ1ZVxuICAgICAgICB0aGlzLmltcG9ydEl0LmRhbmdlciA9IHRydWVcbiAgICB9XG5cbiAgICBzYXZlKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoYXBwbGljYXRpb25PYmplY3RzKCkpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5LCBkYXRhKVxuICAgIH1cblxuICAgIGltcG9ydEl0KGRhdGEpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXksIGRhdGEpXG4gICAgICAgIHRoaXMucmVsb2FkKClcbiAgICB9XG5cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSlcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHJhd09iamVjdHMgPSBKU09OLnBhcnNlKGRhdGEpXG4gICAgICAgICAgICBjb25zdCBvYmplY3RzID0gcmF3T2JqZWN0c1xuICAgICAgICAgICAgICAgIC5tYXAoY3JlYXRlT2JqZWN0RnJvbVJhdylcbiAgICAgICAgICAgICAgICAuZmlsdGVyKG9iamVjdCA9PiBvYmplY3QgIT09IG51bGwpXG5cbiAgICAgICAgICAgIHVwZGF0ZUFwcGxpY2F0aW9uT2JqZWN0cyhvYmplY3RzKVxuXG4gICAgICAgICAgICBhcHBsaWNhdGlvbk9iamVjdHMoKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKG8gPT4gby51cGRhdGVBZnRlckxvYWQoKSlcblxuICAgICAgICAgICAgZmluZEZpcnN0T2JqZWN0KE15V29yaykucmVzdG9yZVNldHRpbmdzU3RhdGUoKVxuXG4gICAgICAgICAgICByZW5kZXJBbGwoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHVwZGF0ZUFwcGxpY2F0aW9uT2JqZWN0cyhpbml0aWFsT2JqZWN0cylcbiAgICAgICAgcmVuZGVyQWxsKClcbiAgICB9XG5cbiAgICBzZXR0aW5ncygpIHtcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3NTaG93bikge1xuICAgICAgICAgICAgdGhpcy5oaWRlU2V0dGluZ3MoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93U2V0dGluZ3MoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzdG9yZVNldHRpbmdzU3RhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzU2hvd24pIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NldHRpbmdzKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVNldHRpbmdzKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVTZXR0aW5ncygpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5nc1Nob3duID0gZmFsc2VcblxuICAgICAgICBhcHBsaWNhdGlvbk9iamVjdHMoKVxuICAgICAgICAgICAgLmZpbHRlcihvID0+IG8uc2V0dGluZylcbiAgICAgICAgICAgIC5mb3JFYWNoKG8gPT4gby5oaWRlVXNlckludGVyZmFjZSgpKVxuXG4gICAgICAgIGFwcGxpY2F0aW9uT2JqZWN0cygpXG4gICAgICAgICAgICAuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgICAgIG9iai5vYnRhaW5BbGxVc2VySW50ZXJmYWNlKClcbiAgICAgICAgICAgICAgICAgICAgLm1hcChuYW1lID0+IG9ialtuYW1lXSlcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihwcm9wID0+IHByb3Auc2V0dGluZylcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2gocHJvcCA9PiBwcm9wLmhpZGRlbiA9IHRydWUpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHNob3dTZXR0aW5ncygpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5nc1Nob3duID0gdHJ1ZVxuXG4gICAgICAgIGFwcGxpY2F0aW9uT2JqZWN0cygpXG4gICAgICAgICAgICAuZmlsdGVyKG8gPT4gby5zZXR0aW5nIHx8IG8uaGlkZGVuKVxuICAgICAgICAgICAgLmZvckVhY2gobyA9PiBvLnNob3dVc2VySW50ZXJmYWNlKCkpXG5cbiAgICAgICAgYXBwbGljYXRpb25PYmplY3RzKClcbiAgICAgICAgICAgIC5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICAgICAgb2JqLm9idGFpbkFsbFVzZXJJbnRlcmZhY2UoKVxuICAgICAgICAgICAgICAgICAgICAubWFwKG5hbWUgPT4gb2JqW25hbWVdKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHByb3AgPT4gcHJvcC5zZXR0aW5nKVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChwcm9wID0+IHByb3AuaGlkZGVuID0gZmFsc2UpXG4gICAgICAgICAgICB9KVxuICAgIH1cbn1cblxucmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUoTXlXb3JrKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9NeVdvcmsuanMiLCJpbXBvcnQge2FwcGxpY2F0aW9uT2JqZWN0cywgZmluZEZpcnN0T2JqZWN0fSBmcm9tICcuL09iamVjdHMnXG5pbXBvcnQge1VzZXJJbnRlcmZhY2VBd2FyZX0gZnJvbSAnLi9Vc2VySW50ZXJmYWNlQXdhcmUnXG5pbXBvcnQge015V29ya30gZnJvbSAnLi9NeVdvcmsnXG5pbXBvcnQge0ZpbHRlcn0gZnJvbSAnLi9GaWx0ZXInXG5cbmNvbnN0IGFwcENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuXG5jb25zdCB0b29sc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b29scycpXG5cbmV4cG9ydCBjb25zdCBmaWx0ZXJUb29sID0gbmV3IEZpbHRlcigpXG5cbmNvbnN0IGV4dHJhY3RBcmdzU3RyaW5nID0gKGZuU3RyKSA9PiB7XG4gICAgcmV0dXJuIGZuU3RyLnNsaWNlKGZuU3RyLmluZGV4T2YoJygnKSArIDEsIGZuU3RyLmluZGV4T2YoJyknKSlcbn1cblxuY29uc3QgcGFyc2VBcmdzU3RyaW5nID0gKGFyZ1N0cikgPT4ge1xuICAgIHJldHVybiBhcmdTdHIuc3BsaXQoJywnKVxuICAgICAgICAubWFwKHMgPT4gcy50cmltKCkpXG4gICAgICAgIC5maWx0ZXIocyA9PiBzLmxlbmd0aCA+IDApXG59XG5cbmNvbnN0IHBhcnNlRnVuY3Rpb25BcmdzID0gKGZuKSA9PiB7XG4gICAgY29uc3QgZm5TdHIgPSBmbi50b1N0cmluZygpXG4gICAgY29uc3QgYXJnU3RyID0gZXh0cmFjdEFyZ3NTdHJpbmcoZm5TdHIpXG4gICAgcmV0dXJuIHBhcnNlQXJnc1N0cmluZyhhcmdTdHIpXG59XG5cbmNvbnN0IHJlbmRlcklucHV0Rm9yQXJnID0gKG1ldGhvZEZvcm0sIGFyZywgdmFsdWUpID0+IHtcbiAgICBjb25zdCBhcmdJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBtZXRob2RGb3JtLmFwcGVuZENoaWxkKGFyZ0lucHV0KVxuICAgIGFyZ0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICBhcmdJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgYXJnKVxuICAgIGFyZ0lucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICByZXR1cm4gYXJnSW5wdXRcbn1cblxuY29uc3QgaGFuZGxlTWV0aG9kQ2FsbCA9IChvYmplY3QsIHByb3BlcnR5LCBpbnB1dHMsIGNsZWFyID0gdHJ1ZSkgPT4ge1xuICAgIGNvbnN0IGFyZ3MgPSBpbnB1dHMubWFwKGlucHV0ID0+IGlucHV0LnZhbHVlKVxuICAgIGNvbnN0IHJlc3VsdCA9IHByb3BlcnR5LmNhbGwob2JqZWN0LCAuLi5hcmdzKVxuXG4gICAgaWYgKGNsZWFyKSB7XG4gICAgICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IGlucHV0LnZhbHVlID0gJycpXG5cbiAgICAgICAgaWYgKGlucHV0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpbnB1dHNbMF0uZm9jdXMoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFVzZXJJbnRlcmZhY2VBd2FyZSkge1xuICAgICAgICBhcHBsaWNhdGlvbk9iamVjdHMoKS5wdXNoKHJlc3VsdClcbiAgICAgICAgcmVuZGVyT2JqZWN0KHJlc3VsdClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZW5kZXJBbGwoKVxuICAgIH1cbn1cblxuY29uc3QgcmVuZGVyTWV0aG9kID0gKG9iamVjdCwgb2JqZWN0RGl2LCBuYW1lLCBtZXRob2QpID0+IHtcbiAgICBjb25zdCBhcmdzID0gcGFyc2VGdW5jdGlvbkFyZ3MobWV0aG9kKVxuXG4gICAgY29uc3QgbWV0aG9kRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgb2JqZWN0RGl2LmFwcGVuZENoaWxkKG1ldGhvZEZvcm0pXG4gICAgbWV0aG9kRm9ybS5jbGFzc0xpc3QuYWRkKCdwcm9wZXJ0eScpXG4gICAgbWV0aG9kRm9ybS5jbGFzc0xpc3QuYWRkKCdtZXRob2QnKVxuXG4gICAgaWYgKG1ldGhvZC5kYW5nZXIpIHtcbiAgICAgICAgbWV0aG9kRm9ybS5jbGFzc0xpc3QuYWRkKCdkYW5nZXInKVxuICAgIH1cblxuICAgIGlmIChtZXRob2Quc3VjY2Vzcykge1xuICAgICAgICBtZXRob2RGb3JtLmNsYXNzTGlzdC5hZGQoJ3N1Y2Nlc3MnKVxuICAgIH1cblxuICAgIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgbWV0aG9kRm9ybS5jbGFzc0xpc3QuYWRkKCdtdWx0aWxpbmUnKVxuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRBcmdzRm4gPSBvYmplY3RbYCR7bmFtZX0uZGVmYXVsdEFyZ3NgXSB8fCAoKCkgPT4gKHt9KSlcbiAgICBjb25zdCBkZWZhdWx0QXJncyA9IGRlZmF1bHRBcmdzRm4uY2FsbChvYmplY3QpXG5cbiAgICBjb25zdCBpbnB1dHMgPSBhcmdzLm1hcChhcmcgPT4ge1xuICAgICAgICByZXR1cm4gcmVuZGVySW5wdXRGb3JBcmcobWV0aG9kRm9ybSwgYXJnLCBkZWZhdWx0QXJnc1thcmddIHx8ICcnKVxuICAgIH0pXG5cbiAgICBpZiAobWV0aG9kLmF1dG8gJiYgYXJncy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgY29uc3QgaGFuZGxlQXJnQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVNZXRob2RDYWxsKG9iamVjdCwgbWV0aG9kLCBpbnB1dHMsIGZhbHNlKVxuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgaW5wdXQub25jaGFuZ2UgPSBoYW5kbGVBcmdDaGFuZ2VcbiAgICAgICAgICAgIGlucHV0Lm9ua2V5dXAgPSBoYW5kbGVBcmdDaGFuZ2VcbiAgICAgICAgICAgIGlucHV0Lm9ucGFzdGUgPSBoYW5kbGVBcmdDaGFuZ2VcbiAgICAgICAgfSlcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY29uc3QgbWV0aG9kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgIG1ldGhvZEZvcm0uYXBwZW5kQ2hpbGQobWV0aG9kRGl2KVxuICAgICAgICBtZXRob2REaXYudGV4dENvbnRlbnQgPSBgJHtuYW1lfWBcbiAgICAgICAgbWV0aG9kRGl2LnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJylcblxuICAgICAgICBtZXRob2REaXYub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlTWV0aG9kQ2FsbChvYmplY3QsIG1ldGhvZCwgaW5wdXRzKVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmNvbnN0IHJlbmRlclByb3BlcnR5ID0gKG9iamVjdERpdiwgbmFtZSwgcHJvcGVydHkpID0+IHtcbiAgICBjb25zdCBwcm9wZXJ0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgb2JqZWN0RGl2LmFwcGVuZENoaWxkKHByb3BlcnR5RGl2KVxuICAgIHByb3BlcnR5RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb3BlcnR5JylcbiAgICBwcm9wZXJ0eURpdi50ZXh0Q29udGVudCA9IGAke25hbWV9OiAke3Byb3BlcnR5fWBcblxuICAgIGlmIChwcm9wZXJ0eS5jb2xvcikge1xuICAgICAgICBwcm9wZXJ0eURpdi5jbGFzc0xpc3QuYWRkKHByb3BlcnR5LmNvbG9yKVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eS50aXRsZSkge1xuICAgICAgICBwcm9wZXJ0eURpdi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgcHJvcGVydHkudGl0bGUpXG4gICAgfVxufVxuXG5jb25zdCByZW5kZXJVc2VyQ29udHJvbCA9IChvYmplY3QsIG9iamVjdERpdiwgbmFtZSkgPT4ge1xuICAgIGNvbnN0IHByb3BlcnR5ID0gb2JqZWN0W25hbWVdXG4gICAgaWYgKHByb3BlcnR5LmhpZGRlbikge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByb3BlcnR5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJlbmRlck1ldGhvZChvYmplY3QsIG9iamVjdERpdiwgbmFtZSwgcHJvcGVydHkpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyUHJvcGVydHkob2JqZWN0RGl2LCBuYW1lLCBwcm9wZXJ0eSlcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJPYmplY3QgPSAob2JqZWN0LCBjb250YWluZXIgPSBhcHBDb250YWluZXIpID0+IHtcbiAgICBjb25zdCBvYmplY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvYmplY3REaXYpXG4gICAgb2JqZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ29iamVjdCcpXG5cbiAgICBvYmplY3Qub2J0YWluQWxsVXNlckludGVyZmFjZSgpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIHJlbmRlclVzZXJDb250cm9sKG9iamVjdCwgb2JqZWN0RGl2LCBuYW1lKVxuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJUb29sID0gb2JqZWN0ID0+IHtcbiAgICByZW5kZXJPYmplY3Qob2JqZWN0LCB0b29sc0NvbnRhaW5lcilcbn1cblxuY29uc3QgY29udGFpbnMgPSAoc3RyaW5nLCBmaWx0ZXIpID0+IHtcbiAgICBsZXQgbmFtZSA9IHN0cmluZy50b0xvd2VyQ2FzZSgpXG4gICAgbGV0IHNlYXJjaFN0cmluZyA9IGZpbHRlci50b0xvd2VyQ2FzZSgpXG4gICAgcmV0dXJuIG5hbWUuaW5kZXhPZihzZWFyY2hTdHJpbmcpID49IDBcbn1cblxuY29uc3QgY29udGFpbnNJbk9iamVjdCA9IChvYmplY3QsIGZpbHRlcikgPT4ge1xuICAgIHJldHVybiBjb250YWlucyhvYmplY3QuY29uc3RydWN0b3IubmFtZSwgZmlsdGVyKSB8fFxuICAgICAgICAgICAgY29udGFpbnMob2JqZWN0Lm5hbWUgfHwgJycsIGZpbHRlcilcbn1cblxuY29uc3QgZXNzZW50aWFsQ29tcGFyZSA9IChhLCBiKSA9PiB7XG4gICAgcmV0dXJuIChiLmVzc2VudGlhbCB8fCAwKSAtIChhLmVzc2VudGlhbCB8fCAwKVxufVxuXG5jb25zdCBvYmplY3RDb21wYXJlID0gKGEsIGIpID0+IHtcbiAgICBjb25zdCBjb21wYXJlQnlFc3NlbnRpYWwgPSBlc3NlbnRpYWxDb21wYXJlKGEsIGIpXG5cbiAgICBjb25zdCBjb21wYXJlQnlDbGFzcyA9IGEuY29uc3RydWN0b3IubmFtZVxuICAgICAgICAubG9jYWxlQ29tcGFyZShiLmNvbnN0cnVjdG9yLm5hbWUpXG5cbiAgICBjb25zdCBjb21wYXJlQnlOYW1lID0gKGEubmFtZSB8fCAnJylcbiAgICAgICAgLmxvY2FsZUNvbXBhcmUoYi5uYW1lIHx8ICcnKVxuXG4gICAgaWYgKGNvbXBhcmVCeUVzc2VudGlhbCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gY29tcGFyZUJ5RXNzZW50aWFsXG4gICAgfVxuXG4gICAgaWYgKGNvbXBhcmVCeUNsYXNzICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBjb21wYXJlQnlDbGFzc1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlQnlOYW1lXG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJBbGwgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBteVdvcmsgPSBmaW5kRmlyc3RPYmplY3QoTXlXb3JrKVxuICAgIG15V29yay5yZXN0b3JlU2V0dGluZ3NTdGF0ZSgpXG5cbiAgICBhcHBDb250YWluZXIuaW5uZXJIVE1MID0gJydcblxuICAgIGFwcGxpY2F0aW9uT2JqZWN0cygpXG4gICAgICAgIC5maWx0ZXIob2JqZWN0ID0+ICFvYmplY3QuaGlkZGVuKVxuICAgICAgICAuZmlsdGVyKG9iamVjdCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0LmVzc2VudGlhbCB8fFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zSW5PYmplY3Qob2JqZWN0LCBmaWx0ZXJUb29sLmZpbHRlclZhbHVlKVxuICAgICAgICB9KS5zb3J0KG9iamVjdENvbXBhcmUpXG4gICAgICAgIC5mb3JFYWNoKG9iamVjdCA9PiByZW5kZXJPYmplY3Qob2JqZWN0KSlcblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZW5kZXJpbmcuanMiLCJpbXBvcnQge3JlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlLCBVc2VySW50ZXJmYWNlQXdhcmV9IGZyb20gJy4uL1VzZXJJbnRlcmZhY2VBd2FyZSdcbmltcG9ydCB7dG9kYXl9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQge2ZpbmRBbGxPYmplY3RzLCBmaW5kRmlyc3RPYmplY3R9IGZyb20gJy4uL09iamVjdHMnXG5pbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSAnLi4vY2hhcmFjdGVyL0NoYXJhY3RlcidcbmltcG9ydCB7U2xlZXBDb250cm9sfSBmcm9tICcuL1NsZWVwQ29udHJvbCdcblxuXG5leHBvcnQgY2xhc3MgU2xlZXAgZXh0ZW5kcyBVc2VySW50ZXJmYWNlQXdhcmUge1xuXG4gICAgdXNlckludGVyZmFjZSA9IFsnc2xlcHRBdCcsICdhZGQgc2xlZXAgY29udHJvbCddXG5cbiAgICBuYW1lXG4gICAgc2xlcHRBdFxuICAgIGVzc2VudGlhbCA9IDUwXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLnNsZXB0QXQgPSAnJ1xuXG4gICAgICAgIHRoaXNbJ2FkZCBzbGVlcCBjb250cm9sJ10uc2V0dGluZyA9IHRydWVcbiAgICAgICAgdGhpc1snYWRkIHNsZWVwIGNvbnRyb2wnXS5zdWNjZXNzID0gdHJ1ZVxuICAgIH1cblxuICAgIFsnYWRkIHNsZWVwIGNvbnRyb2wnXShuYW1lLCBocCwgZXApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTbGVlcENvbnRyb2wobmFtZSwgaHAsIGVwKVxuICAgIH1cblxuICAgIGFmZmVjdENoYXJhY3RlcihocCwgZXAsIHhwR2Fpbikge1xuICAgICAgICB0aGlzLnNsZXB0QXQgPSB0b2RheSgpXG5cbiAgICAgICAgY29uc3QgY2hhcmFjdGVyID0gZmluZEZpcnN0T2JqZWN0KENoYXJhY3RlcilcbiAgICAgICAgY2hhcmFjdGVyLmNoYW5nZUhwQnkoaHApXG4gICAgICAgIGNoYXJhY3Rlci5jaGFuZ2VFcEJ5KGVwKVxuICAgICAgICBjaGFyYWN0ZXIuY2hhbmdlWHBCeSh4cEdhaW4pXG5cbiAgICAgICAgZmluZEFsbE9iamVjdHMoU2xlZXBDb250cm9sKVxuICAgICAgICAgICAgLmZvckVhY2goY29udHJvbCA9PiBjb250cm9sLnVwZGF0ZUFmdGVyTG9hZCgpKVxuICAgIH1cblxufVxuXG5yZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZShTbGVlcClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2xlZXAvU2xlZXAuanMiLCJpbXBvcnQge3JlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlLCBVc2VySW50ZXJmYWNlQXdhcmV9IGZyb20gJy4vVXNlckludGVyZmFjZUF3YXJlJ1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyIGV4dGVuZHMgVXNlckludGVyZmFjZUF3YXJlIHtcblxuICAgIHVzZXJJbnRlcmZhY2UgPSBbJ3NlYXJjaCddXG5cbiAgICBmaWx0ZXJWYWx1ZSA9ICcnXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLnNlYXJjaC5hdXRvID0gdHJ1ZVxuICAgIH1cblxuICAgIHNlYXJjaChmaWx0ZXIpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9IGZpbHRlclxuICAgIH1cblxufVxuXG5yZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZShGaWx0ZXIpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0ZpbHRlci5qcyIsImltcG9ydCB7cmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUsIFVzZXJJbnRlcmZhY2VBd2FyZX0gZnJvbSAnLi4vVXNlckludGVyZmFjZUF3YXJlJ1xuaW1wb3J0IHtjb2xvcmVkTnVtYmVyLCB0b2RheX0gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCB7ZmluZEZpcnN0T2JqZWN0fSBmcm9tICcuLi9PYmplY3RzJ1xuaW1wb3J0IHtDaGFyYWN0ZXJ9IGZyb20gJy4uL2NoYXJhY3Rlci9DaGFyYWN0ZXInXG5cbmV4cG9ydCBjbGFzcyBEaXNlYXNlIGV4dGVuZHMgVXNlckludGVyZmFjZUF3YXJlIHtcblxuICAgIHVzZXJJbnRlcmZhY2UgPSBbJ25hbWUnLCAnaHAnLCAnZXAnLCAnYWZmZWN0ZWRBdCcsICdkZXN0cm95J11cbiAgICBuYW1lXG4gICAgYWZmZWN0ZWRBdFxuXG4gICAgX2hwXG4gICAgZ2V0IGhwKCkge1xuICAgICAgICByZXR1cm4gY29sb3JlZE51bWJlcih0aGlzLl9ocClcbiAgICB9XG5cbiAgICBfZXBcbiAgICBnZXQgZXAoKSB7XG4gICAgICAgIHJldHVybiBjb2xvcmVkTnVtYmVyKHRoaXMuX2VwKVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGhwLCBlcCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5faHAgPSBocFxuICAgICAgICB0aGlzLl9lcCA9IGVwXG4gICAgICAgIHRoaXMuYWZmZWN0ZWRBdCA9ICcnXG4gICAgfVxuXG4gICAgdXBkYXRlQWZ0ZXJMb2FkKCkge1xuICAgICAgICBpZiAodGhpcy5hZmZlY3RlZEF0ICE9PSB0b2RheSgpKSB7XG4gICAgICAgICAgICB0aGlzLmFmZmVjdENoYXJhY3RlcigpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZmZlY3RDaGFyYWN0ZXIoKSB7XG4gICAgICAgIHRoaXMuYWZmZWN0ZWRBdCA9IHRvZGF5KClcblxuICAgICAgICBjb25zdCBjaGFyYWN0ZXIgPSBmaW5kRmlyc3RPYmplY3QoQ2hhcmFjdGVyKVxuICAgICAgICBjaGFyYWN0ZXIuY2hhbmdlSHBCeSh0aGlzLmhwKVxuICAgICAgICBjaGFyYWN0ZXIuY2hhbmdlRXBCeSh0aGlzLmVwKVxuICAgIH1cbn1cblxucmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUoRGlzZWFzZSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlzZWFzZXMvRGlzZWFzZS5qcyIsImltcG9ydCB7cmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUsIFVzZXJJbnRlcmZhY2VBd2FyZX0gZnJvbSAnLi4vVXNlckludGVyZmFjZUF3YXJlJ1xuaW1wb3J0IHtEaXNlYXNlfSBmcm9tICcuL0Rpc2Vhc2UnXG5cbmV4cG9ydCBjbGFzcyBOZXdEaXNlYXNlIGV4dGVuZHMgVXNlckludGVyZmFjZUF3YXJlIHtcblxuICAgIHVzZXJJbnRlcmZhY2UgPSBbJ2NyZWF0ZSddXG4gICAgc2V0dGluZyA9IHRydWVcbiAgICBlc3NlbnRpYWwgPSA1MFxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5jcmVhdGUuc3VjY2VzcyA9IHRydWVcbiAgICB9XG5cbiAgICBjcmVhdGUobmFtZSwgaHAsIGVwKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGlzZWFzZShuYW1lLCBocCwgZXApXG4gICAgfVxuXG59XG5cbnJlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlKE5ld0Rpc2Vhc2UpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Rpc2Vhc2VzL05ld0Rpc2Vhc2UuanMiLCJpbXBvcnQge2ZpbHRlclRvb2wsIHJlbmRlckFsbCwgcmVuZGVyVG9vbH0gZnJvbSAnLi9SZW5kZXJpbmcnXG5pbXBvcnQge015V29ya30gZnJvbSAnLi9NeVdvcmsnXG5pbXBvcnQge21ha2VTdXJlSW5pdGlhbE9iamVjdHNBcmVQcmVzZW50fSBmcm9tICcuL09iamVjdHMnXG5cbm5ldyBNeVdvcmsoKS5yZWxvYWQoKVxubWFrZVN1cmVJbml0aWFsT2JqZWN0c0FyZVByZXNlbnQoKVxucmVuZGVyVG9vbChmaWx0ZXJUb29sKVxucmVuZGVyQWxsKClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCB7cmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUsIFVzZXJJbnRlcmZhY2VBd2FyZX0gZnJvbSAnLi4vVXNlckludGVyZmFjZUF3YXJlJ1xuaW1wb3J0IHtjb2xvcmVkTnVtYmVyLCB0b2RheX0gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCB7ZmluZEZpcnN0T2JqZWN0fSBmcm9tICcuLi9PYmplY3RzJ1xuaW1wb3J0IHtTbGVlcH0gZnJvbSAnLi9TbGVlcCdcbmltcG9ydCB7bmV4dFhwQ29tYm8sIHhwQ29tYm9QcmVzZW50YXRpb259IGZyb20gJy4uL3hwQ29tYm8nXG5cbmV4cG9ydCBjbGFzcyBTbGVlcENvbnRyb2wgZXh0ZW5kcyBVc2VySW50ZXJmYWNlQXdhcmUge1xuXG4gICAgbmFtZSA9ICcnXG4gICAgbWVzc2FnZSA9ICdhbHJlYWR5IHNsZXB0J1xuXG4gICAgX2hwID0gMFxuICAgIGdldCBocCgpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yZWROdW1iZXIodGhpcy5faHApXG4gICAgfVxuXG4gICAgX2VwID0gMFxuICAgIGdldCBlcCgpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yZWROdW1iZXIodGhpcy5fZXApXG4gICAgfVxuXG4gICAgX3hwR2FpbiA9IDBcbiAgICBnZXQgeHBHYWluKCkge1xuICAgICAgICByZXR1cm4gY29sb3JlZE51bWJlcih0aGlzLl94cEdhaW4pXG4gICAgfVxuXG4gICAgX3hwQ29tYm8gPSAxXG4gICAgZ2V0IHhwQ29tYm8oKSB7XG4gICAgICAgIHJldHVybiB4cENvbWJvUHJlc2VudGF0aW9uKHRoaXMuX3hwQ29tYm8pXG4gICAgfVxuXG4gICAgc2xlcHRBdCA9ICcnXG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBocCwgZXAsIHhwR2Fpbikge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWUgfHwgJydcbiAgICAgICAgdGhpcy5faHAgPSBocCB8fCAwXG4gICAgICAgIHRoaXMuX2VwID0gZXAgfHwgMFxuICAgICAgICB0aGlzLl94cEdhaW4gPSB4cEdhaW4gfHwgMFxuXG4gICAgICAgIHRoaXMuY2hhbmdlLnNldHRpbmcgPSB0cnVlXG5cbiAgICAgICAgdGhpcy51cGRhdGVBZnRlckxvYWQoKVxuICAgIH1cblxuICAgIHVwZGF0ZUFmdGVyTG9hZCgpIHtcbiAgICAgICAgY29uc3Qgc2xlZXAgPSBmaW5kRmlyc3RPYmplY3QoU2xlZXApXG5cbiAgICAgICAgdGhpc1t0aGlzLm5hbWVdID0gKCkgPT4ge1xuICAgICAgICAgICAgc2xlZXAuYWZmZWN0Q2hhcmFjdGVyKHRoaXMuaHAsIHRoaXMuZXAsIHRoaXMueHBHYWluICogdGhpcy5feHBDb21ibylcbiAgICAgICAgICAgIHRoaXMuX3hwQ29tYm8gPSBuZXh0WHBDb21ibyh0aGlzLnNsZXB0QXQsIHRoaXMuX3hwQ29tYm8pXG4gICAgICAgICAgICB0aGlzLnNsZXB0QXQgPSB0b2RheSgpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2xlZXAuc2xlcHRBdCAhPT0gdG9kYXkoKSkge1xuICAgICAgICAgICAgdGhpcy51c2VySW50ZXJmYWNlID0gdGhpcy5jb21tb25Vc2VySW50ZXJmYWNlV2l0aCh0aGlzLm5hbWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJJbnRlcmZhY2UgPSB0aGlzLmNvbW1vblVzZXJJbnRlcmZhY2VXaXRoKCdtZXNzYWdlJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZShocCwgZXAsIHhwR2Fpbikge1xuICAgICAgICB0aGlzLl9ocCA9IGhwXG4gICAgICAgIHRoaXMuX2VwID0gZXBcbiAgICAgICAgdGhpcy5feHBHYWluID0geHBHYWluXG4gICAgfVxuXG4gICAgWydjaGFuZ2UuZGVmYXVsdEFyZ3MnXSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhwOiB0aGlzLl9ocCxcbiAgICAgICAgICAgIGVwOiB0aGlzLl9lcCxcbiAgICAgICAgICAgIHhwR2FpbjogdGhpcy5feHBHYWluLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tbW9uVXNlckludGVyZmFjZVdpdGgoLi4uYXJncykge1xuICAgICAgICByZXR1cm4gWydocCcsICdlcCcsICd4cEdhaW4nLCAneHBDb21ibycsIC4uLmFyZ3MsICdjaGFuZ2UnLCAnZGVzdHJveSddXG4gICAgfVxuXG59XG5cbnJlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlKFNsZWVwQ29udHJvbClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2xlZXAvU2xlZXBDb250cm9sLmpzIiwiaW1wb3J0IHtyZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZSwgVXNlckludGVyZmFjZUF3YXJlfSBmcm9tICcuLi9Vc2VySW50ZXJmYWNlQXdhcmUnXG5pbXBvcnQge1Rhc2t9IGZyb20gJy4vVGFzaydcbmltcG9ydCB7U2tpbGxlZFRhc2t9IGZyb20gJy4vU2tpbGxlZFRhc2snXG5cbmV4cG9ydCBjbGFzcyBOZXdUYXNrIGV4dGVuZHMgVXNlckludGVyZmFjZUF3YXJlIHtcblxuICAgIHVzZXJJbnRlcmZhY2UgPSBbJ2NyZWF0ZSddXG4gICAgc2V0dGluZyA9IHRydWVcbiAgICBlc3NlbnRpYWwgPSA1MFxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5jcmVhdGUuc3VjY2VzcyA9IHRydWVcbiAgICB9XG5cbiAgICBjcmVhdGUobmFtZSwgaHAsIGVwLCB4cEdhaW4sIGlzU2tpbGxlZCkge1xuICAgICAgICBpZiAoaXNTa2lsbGVkID09PSAndHJ1ZScgfHwgaXNTa2lsbGVkID09PSAneWVzJykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTa2lsbGVkVGFzayhuYW1lLCBocCwgZXAsIHhwR2FpbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGFzayhuYW1lLCBocCwgZXAsIHhwR2FpbilcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5yZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZShOZXdUYXNrKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90YXNrcy9OZXdUYXNrLmpzIiwiaW1wb3J0IHtyZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZSwgVXNlckludGVyZmFjZUF3YXJlfSBmcm9tICcuLi9Vc2VySW50ZXJmYWNlQXdhcmUnXG5pbXBvcnQge2ZpbmRGaXJzdE9iamVjdCwgcmVwbGFjZU9iamVjdH0gZnJvbSAnLi4vT2JqZWN0cydcbmltcG9ydCB7Q2hhcmFjdGVyfSBmcm9tICcuLi9jaGFyYWN0ZXIvQ2hhcmFjdGVyJ1xuaW1wb3J0IHtjb2xvcmVkTnVtYmVyLCB0b2RheX0gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCB7bmV4dFhwQ29tYm8sIHhwQ29tYm9QcmVzZW50YXRpb259IGZyb20gJy4uL3hwQ29tYm8nXG5pbXBvcnQge2NvbnZlcnRSYXdUb30gZnJvbSAnLi4vTXlXb3JrJ1xuXG5leHBvcnQgY2xhc3MgVGFzayBleHRlbmRzIFVzZXJJbnRlcmZhY2VBd2FyZSB7XG5cbiAgICB1c2VySW50ZXJmYWNlID0gW1xuICAgICAgICAnbmFtZScsICdocCcsICdlcCcsXG4gICAgICAgICd4cEdhaW4nLCAneHBDb21ibycsXG4gICAgICAgICdjb21wbGV0ZScsXG4gICAgICAgICdjaGFuZ2UnLCAnbWFrZVNraWxsZWQnLFxuICAgICAgICAnZGVzdHJveScsXG4gICAgXVxuICAgIG5hbWVcblxuICAgIF9ocCA9IDBcbiAgICBnZXQgaHAoKSB7XG4gICAgICAgIHJldHVybiBjb2xvcmVkTnVtYmVyKHRoaXMuX2hwKVxuICAgIH1cblxuICAgIF9lcCA9IDBcbiAgICBnZXQgZXAoKSB7XG4gICAgICAgIHJldHVybiBjb2xvcmVkTnVtYmVyKHRoaXMuX2VwKVxuICAgIH1cblxuICAgIF94cEdhaW4gPSAwXG4gICAgZ2V0IHhwR2FpbigpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yZWROdW1iZXIodGhpcy5feHBHYWluKVxuICAgIH1cblxuICAgIF94cENvbWJvID0gMVxuICAgIGdldCB4cENvbWJvKCkge1xuICAgICAgICByZXR1cm4geHBDb21ib1ByZXNlbnRhdGlvbih0aGlzLl94cENvbWJvKVxuICAgIH1cblxuICAgIGdldCBjb21wbGV0ZWQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b1N0cmluZzogKCkgPT4gJ2RvbmUnLFxuICAgICAgICAgICAgY29sb3I6ICdncmVlbicsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBocCwgZXAsIHhwR2Fpbikge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWUgfHwgJydcbiAgICAgICAgdGhpcy5faHAgPSBocCB8fCAwXG4gICAgICAgIHRoaXMuX2VwID0gZXAgfHwgMFxuICAgICAgICB0aGlzLl94cEdhaW4gPSB4cEdhaW4gfHwgMFxuXG4gICAgICAgIHRoaXMudW5kby5kYW5nZXIgPSB0cnVlXG4gICAgICAgIHRoaXMudW5kby5zZXR0aW5nID0gdHJ1ZVxuICAgICAgICB0aGlzLmNoYW5nZS5zZXR0aW5nID0gdHJ1ZVxuICAgICAgICB0aGlzLm1ha2VTa2lsbGVkLnNldHRpbmcgPSB0cnVlXG4gICAgfVxuXG4gICAgY2hhbmdlKG5hbWUsIGhwLCBlcCwgeHBHYWluKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5faHAgPSBocFxuICAgICAgICB0aGlzLl9lcCA9IGVwXG4gICAgICAgIHRoaXMuX3hwR2FpbiA9IHhwR2FpblxuICAgIH1cblxuICAgIFsnY2hhbmdlLmRlZmF1bHRBcmdzJ10oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICBocDogdGhpcy5faHAsXG4gICAgICAgICAgICBlcDogdGhpcy5fZXAsXG4gICAgICAgICAgICB4cEdhaW46IHRoaXMuX3hwR2FpbixcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBjb25zdCBjaGFyYWN0ZXIgPSBmaW5kRmlyc3RPYmplY3QoQ2hhcmFjdGVyKVxuXG4gICAgICAgIGlmIChjaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgIGNoYXJhY3Rlci5jaGFuZ2VIcEJ5KHRoaXMuaHApXG4gICAgICAgICAgICBjaGFyYWN0ZXIuY2hhbmdlRXBCeSh0aGlzLmVwKVxuXG4gICAgICAgICAgICBsZXQgeHBBbW91bnQgPSB0aGlzLnhwR2FpbiAqIHRoaXMuX3hwQ29tYm9cbiAgICAgICAgICAgIGNoYXJhY3Rlci5jaGFuZ2VYcEJ5KHhwQW1vdW50KVxuICAgICAgICAgICAgdGhpcy51cGRhdGVYcEJlZm9yZU1hcmtpbmdBc0NvbXBsZXRlKHhwQW1vdW50KVxuXG4gICAgICAgICAgICB0aGlzLm1hcmtBc0NvbXBsZXRlZCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVYcEJlZm9yZU1hcmtpbmdBc0NvbXBsZXRlKGFtb3VudCkge1xuICAgICAgICB0aGlzLl94cENvbWJvID0gbmV4dFhwQ29tYm8odGhpcy5jb21wbGV0ZWRBdCwgdGhpcy5feHBDb21ibylcbiAgICB9XG5cbiAgICBtYXJrQXNDb21wbGV0ZWQoKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGVkQXQgPSB0b2RheSgpXG4gICAgICAgIHRoaXMucmVwbGFjZUNvbXBsZXRlV2l0aENvbXBsZXRlZCgpXG4gICAgfVxuXG4gICAgcmVwbGFjZUNvbXBsZXRlV2l0aENvbXBsZXRlZCgpIHtcbiAgICAgICAgbGV0IGluZGV4T2ZDb21wbGV0ZSA9IHRoaXMudXNlckludGVyZmFjZS5pbmRleE9mKCdjb21wbGV0ZScpXG4gICAgICAgIHRoaXMudXNlckludGVyZmFjZS5zcGxpY2UoaW5kZXhPZkNvbXBsZXRlLCAxLCAnY29tcGxldGVkJywgJ2NvbXBsZXRlZEF0JywgJ3VuZG8nKVxuICAgIH1cblxuICAgIHJlcGxhY2VDb21wbGV0ZWRBdFdpdGhDb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5yZXBsYWNlQ29tcGxldGVkV2l0aENvbXBsZXRlKClcbiAgICAgICAgdGhpcy5yZW1vdmVVc2VySW50ZXJmYWNlKCdjb21wbGV0ZWRBdCcpXG4gICAgICAgIHRoaXMucmVtb3ZlVXNlckludGVyZmFjZSgndW5kbycpXG4gICAgfVxuXG4gICAgcmVtb3ZlVXNlckludGVyZmFjZShzKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudXNlckludGVyZmFjZS5pbmRleE9mKHMpXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB0aGlzLnVzZXJJbnRlcmZhY2Uuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cblxuICAgIHJlcGxhY2VDb21wbGV0ZWRXaXRoQ29tcGxldGUoKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudXNlckludGVyZmFjZS5pbmRleE9mKCdjb21wbGV0ZWQnKVxuICAgICAgICBpZiAoaW5kZXggPj0gMCkgdGhpcy51c2VySW50ZXJmYWNlLnNwbGljZShpbmRleCwgMSwgJ2NvbXBsZXRlJylcbiAgICB9XG5cbiAgICB1cGRhdGVBZnRlckxvYWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbXBsZXRlZEF0ID09PSB0b2RheSgpKSB7XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2VDb21wbGV0ZVdpdGhDb21wbGV0ZWQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5kbyhyZWFzb24pIHtcbiAgICAgICAgaWYgKHJlYXNvbi5sZW5ndGggPCAxMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1lvdSBuZWVkIHRvIHByb3ZpZGUgYSBnb29kIHJlYXNvbiB0byB1bmRvIHRoZSB0YXNrJylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hhcmFjdGVyID0gZmluZEZpcnN0T2JqZWN0KENoYXJhY3RlcilcbiAgICAgICAgY2hhcmFjdGVyLmNoYW5nZUhwQnkoLXRoaXMuaHApXG4gICAgICAgIGNoYXJhY3Rlci5jaGFuZ2VFcEJ5KC10aGlzLmVwKVxuICAgICAgICB0aGlzLnVuQ29tcGxldGUoKVxuICAgIH1cblxuICAgIHVuQ29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGVkQXQgPSAnJ1xuICAgICAgICB0aGlzLnJlcGxhY2VDb21wbGV0ZWRBdFdpdGhDb21wbGV0ZSgpXG4gICAgfVxuXG4gICAgbWFrZVNraWxsZWQoKSB7XG4gICAgICAgIGNvbnN0IHNraWxsZWRTdWJjbGFzcyA9IFRhc2suc3ViY2xhc3Nlc1snc2tpbGxlZCddXG4gICAgICAgIGNvbnN0IHNraWxsZWRUYXNrID0gY29udmVydFJhd1RvKHRoaXMsIHNraWxsZWRTdWJjbGFzcylcbiAgICAgICAgcmVwbGFjZU9iamVjdCh0aGlzLCBza2lsbGVkVGFzaylcbiAgICB9XG59XG5cblRhc2suc3ViY2xhc3NlcyA9IHt9XG5cbnJlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlKFRhc2spXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Rhc2tzL1Rhc2suanMiLCJpbXBvcnQge3llc3RlcmRheX0gZnJvbSAnLi91dGlsJ1xuXG5leHBvcnQgY29uc3QgbmV4dFhwQ29tYm8gPSAocHJldmlvdXNEYXRlLCB4cENvbWJvKSA9PiB7XG4gICAgaWYgKHByZXZpb3VzRGF0ZSA9PT0geWVzdGVyZGF5KCkpIHtcbiAgICAgICAgcmV0dXJuIHhwQ29tYm8gKyAxXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDFcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB4cENvbWJvUHJlc2VudGF0aW9uID0geHBDb21ibyA9PiBgeCR7eHBDb21ib31gXG5cbmV4cG9ydCBjb25zdCB4cFByZXNlbnRhdGlvbiA9ICh4cCwgbWF4KSA9PiBgJHtNYXRoLmZsb29yKHhwKX0vJHtNYXRoLmZsb29yKG1heCl9YFxuXG5leHBvcnQgY29uc3QgY2hhbmdlWHBCeSA9ICh4cCwgYW1vdW50LCBtYXhYcCwgeHBNb2RpZmllcikgPT4ge1xuICAgIGxldCBhdHRyaWJ1dGVQb2ludHMgPSAwXG4gICAgbGV0IGx2bEluY3JlYXNlID0gMFxuXG4gICAgeHAgKz0gYW1vdW50XG5cbiAgICB3aGlsZSAoeHAgPj0gbWF4WHApIHtcbiAgICAgICAgYXR0cmlidXRlUG9pbnRzKytcbiAgICAgICAgbHZsSW5jcmVhc2UrK1xuICAgICAgICB4cCAtPSBtYXhYcFxuICAgICAgICBtYXhYcCA9IE1hdGguZmxvb3IobWF4WHAgKiB4cE1vZGlmaWVyKVxuICAgIH1cblxuICAgIGlmICh4cCA8IDApIHtcbiAgICAgICAgeHAgPSAwO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHhwOiB4cCxcbiAgICAgICAgbWF4WHA6IG1heFhwLFxuICAgICAgICBhdHRyaWJ1dGVQb2ludHM6IGF0dHJpYnV0ZVBvaW50cyxcbiAgICAgICAgbHZsSW5jcmVhc2U6IGx2bEluY3JlYXNlLFxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGltcHJvdmVkQXR0cmlidXRlID0gZnVuY3Rpb24gKG51bWJlciwgbHZsKSB7XG4gICAgY29uc3QgdG9wTGV2ZWwgPSAzMFxuXG4gICAgaWYgKG51bWJlciA+IDApIHtcbiAgICAgICAgbnVtYmVyID0gbnVtYmVyICogKDEgKyAobHZsIC0gMSkgLyB0b3BMZXZlbClcbiAgICB9XG5cbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICBudW1iZXIgPSBudW1iZXIgLyAoMSArIChsdmwgLSAxKSAvIHRvcExldmVsKVxuICAgIH1cblxuICAgIHJldHVybiBNYXRoLmZsb29yKG51bWJlciAqIDEwMCkgLyAxMDBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy94cENvbWJvLmpzIiwiaW1wb3J0IHtyZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZX0gZnJvbSAnLi4vVXNlckludGVyZmFjZUF3YXJlJ1xuaW1wb3J0IHtUYXNrfSBmcm9tICcuL1Rhc2snXG5pbXBvcnQge2NoYW5nZVhwQnksIGltcHJvdmVkQXR0cmlidXRlLCB4cFByZXNlbnRhdGlvbn0gZnJvbSAnLi4veHBDb21ibydcbmltcG9ydCB7Y29sb3JlZE51bWJlcn0gZnJvbSAnLi4vdXRpbCdcblxuZXhwb3J0IGNsYXNzIFNraWxsZWRUYXNrIGV4dGVuZHMgVGFzayB7XG5cbiAgICBsdmwgPSAxXG5cbiAgICBnZXQgaHAoKSB7XG4gICAgICAgIGNvbnN0IGhwID0gaW1wcm92ZWRBdHRyaWJ1dGUodGhpcy5faHAsIHRoaXMubHZsKVxuICAgICAgICByZXR1cm4gY29sb3JlZE51bWJlcihocClcbiAgICB9XG5cbiAgICBnZXQgZXAoKSB7XG4gICAgICAgIGNvbnN0IGVwID0gaW1wcm92ZWRBdHRyaWJ1dGUodGhpcy5fZXAsIHRoaXMubHZsKVxuICAgICAgICByZXR1cm4gY29sb3JlZE51bWJlcihlcClcbiAgICB9XG5cbiAgICBnZXQgeHBHYWluKCkge1xuICAgICAgICBjb25zdCB4cEdhaW4gPSBpbXByb3ZlZEF0dHJpYnV0ZSh0aGlzLl94cEdhaW4sIHRoaXMubHZsKVxuICAgICAgICByZXR1cm4gY29sb3JlZE51bWJlcih4cEdhaW4pXG4gICAgfVxuXG4gICAgX3hwID0gMFxuICAgIF9tYXhYcCA9IDI1XG4gICAgeHBNb2RpZmllciA9IDEuMlxuXG4gICAgZ2V0IHhwKCkge1xuICAgICAgICByZXR1cm4geHBQcmVzZW50YXRpb24odGhpcy5feHAsIHRoaXMuX21heFhwKVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGhwLCBlcCwgeHBHYWluKSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIGhwLCBlcCwgeHBHYWluKVxuICAgICAgICB0aGlzLnVzZXJJbnRlcmZhY2Uuc3BsaWNlKCduYW1lJywgMCwgJ2x2bCcsICd4cCcpXG4gICAgfVxuXG4gICAgdXBkYXRlWHBCZWZvcmVNYXJraW5nQXNDb21wbGV0ZShhbW91bnQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY2hhbmdlWHBCeSh0aGlzLl94cCwgYW1vdW50LCB0aGlzLl9tYXhYcCwgdGhpcy54cE1vZGlmaWVyKVxuICAgICAgICB0aGlzLl94cCA9IHJlc3VsdC54cFxuICAgICAgICB0aGlzLl9tYXhYcCA9IHJlc3VsdC5tYXhYcFxuICAgICAgICB0aGlzLmx2bCArPSByZXN1bHQubHZsSW5jcmVhc2VcblxuICAgICAgICBzdXBlci51cGRhdGVYcEJlZm9yZU1hcmtpbmdBc0NvbXBsZXRlKClcbiAgICB9XG5cbn1cblxuVGFzay5zdWJjbGFzc2VzWydza2lsbGVkJ10gPSBTa2lsbGVkVGFza1xuXG5yZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZShTa2lsbGVkVGFzaylcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGFza3MvU2tpbGxlZFRhc2suanMiXSwic291cmNlUm9vdCI6IiJ9