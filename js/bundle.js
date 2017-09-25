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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Rendering__ = __webpack_require__(6);



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MyWork__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__character_Character__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasks_NewTask__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__diseases_NewDisease__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sleep_Sleep__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__character_Reputation__ = __webpack_require__(16);







const initialObjects = [new __WEBPACK_IMPORTED_MODULE_0__MyWork__["a" /* MyWork */](), new __WEBPACK_IMPORTED_MODULE_1__character_Character__["a" /* Character */](), new __WEBPACK_IMPORTED_MODULE_2__tasks_NewTask__["a" /* NewTask */](), new __WEBPACK_IMPORTED_MODULE_3__diseases_NewDisease__["a" /* NewDisease */](), new __WEBPACK_IMPORTED_MODULE_4__sleep_Sleep__["a" /* Sleep */](), new __WEBPACK_IMPORTED_MODULE_5__character_Reputation__["a" /* Reputation */]()];
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
/* harmony export (immutable) */ __webpack_exports__["g"] = findAllObjects;


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
/* harmony export (immutable) */ __webpack_exports__["d"] = replaceObject;


window._applicationObjects = applicationObjects;

/***/ }),
/* 2 */
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
/* harmony export (immutable) */ __webpack_exports__["a"] = coloredNumber;


const today = () => formatDate(new Date());
/* harmony export (immutable) */ __webpack_exports__["b"] = today;


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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Rendering__ = __webpack_require__(6);




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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xpCombo__ = __webpack_require__(5);



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
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__xpCombo__["a" /* xpPresentation */])(this._xp, this._maxXp);
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
        const result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__xpCombo__["b" /* changeXpBy */])(this._xp, amount, this._maxXp, this.xpModifier);
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(2);


const nextXpCombo = (previousDate, xpCombo) => {
    if (previousDate === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* yesterday */])()) {
        return xpCombo + 1;
    } else {
        return 1;
    }
};
/* harmony export (immutable) */ __webpack_exports__["e"] = nextXpCombo;


const xpComboPresentation = xpCombo => `x${xpCombo}`;
/* harmony export (immutable) */ __webpack_exports__["d"] = xpComboPresentation;


const xpPresentation = (xp, max) => `${Math.floor(xp)}/${Math.floor(max)}`;
/* harmony export (immutable) */ __webpack_exports__["a"] = xpPresentation;


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
/* harmony export (immutable) */ __webpack_exports__["b"] = changeXpBy;


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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UserInterfaceAware__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MyWork__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Filter__ = __webpack_require__(9);





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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__character_Character__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SleepControl__ = __webpack_require__(13);






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
        this.sleptAt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* today */])();

        const character = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Objects__["c" /* findFirstObject */])(__WEBPACK_IMPORTED_MODULE_3__character_Character__["a" /* Character */]);
        character.changeHpBy(hp);
        character.changeEpBy(ep);
        character.changeXpBy(xpGain);

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Objects__["g" /* findAllObjects */])(__WEBPACK_IMPORTED_MODULE_4__SleepControl__["a" /* SleepControl */]).forEach(control => control.updateAfterLoad());
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Sleep;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["b" /* registerUserInterfaceAware */])(Sleep);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__character_Character__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__xpCombo__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__MyWork__ = __webpack_require__(3);







class Task extends __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["a" /* UserInterfaceAware */] {
    get hp() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* coloredNumber */])(this._hp);
    }

    get ep() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* coloredNumber */])(this._ep);
    }

    get xpGain() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* coloredNumber */])(this._xpGain);
    }

    get xpCombo() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__xpCombo__["d" /* xpComboPresentation */])(this._xpCombo);
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
        this._xpCombo = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__xpCombo__["e" /* nextXpCombo */])(this.completedAt, this._xpCombo);
    }

    markAsCompleted() {
        this.completedAt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* today */])();
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
        if (this.completedAt === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* today */])()) {
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Objects__["d" /* replaceObject */])(this, skilledTask);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Task;


Task.subclasses = {};

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["b" /* registerUserInterfaceAware */])(Task);

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__character_Character__ = __webpack_require__(4);





class Disease extends __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["a" /* UserInterfaceAware */] {
    get hp() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* coloredNumber */])(this._hp);
    }

    get ep() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* coloredNumber */])(this._ep);
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
        if (this.affectedAt !== __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* today */])()) {
            this.affectCharacter();
        }
    }

    affectCharacter() {
        this.affectedAt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* today */])();

        const character = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Objects__["c" /* findFirstObject */])(__WEBPACK_IMPORTED_MODULE_3__character_Character__["a" /* Character */]);
        character.changeHpBy(this.hp);
        character.changeEpBy(this.ep);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Disease;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["b" /* registerUserInterfaceAware */])(Disease);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Disease__ = __webpack_require__(10);



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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rendering__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MyWork__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Objects__ = __webpack_require__(1);




new __WEBPACK_IMPORTED_MODULE_1__MyWork__["a" /* MyWork */]().reload();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Objects__["a" /* makeSureInitialObjectsArePresent */])();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Rendering__["a" /* renderTool */])(__WEBPACK_IMPORTED_MODULE_0__Rendering__["b" /* filterTool */]);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Rendering__["c" /* renderAll */])();

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Sleep__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__xpCombo__ = __webpack_require__(5);






class SleepControl extends __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["a" /* UserInterfaceAware */] {
    get hp() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* coloredNumber */])(this._hp);
    }

    get ep() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* coloredNumber */])(this._ep);
    }

    get xpGain() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* coloredNumber */])(this._xpGain);
    }

    get xpCombo() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__xpCombo__["d" /* xpComboPresentation */])(this._xpCombo);
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
            this._xpCombo = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__xpCombo__["e" /* nextXpCombo */])(this.sleptAt, this._xpCombo);
            this.sleptAt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* today */])();
        };

        if (sleep.sleptAt !== __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* today */])()) {
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Task__ = __webpack_require__(8);
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Task__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xpCombo__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);





class SkilledTask extends __WEBPACK_IMPORTED_MODULE_1__Task__["a" /* Task */] {

    get hp() {
        const hp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__xpCombo__["c" /* improvedAttribute */])(this._hp, this.lvl);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* coloredNumber */])(hp);
    }

    get ep() {
        const ep = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__xpCombo__["c" /* improvedAttribute */])(this._ep, this.lvl);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* coloredNumber */])(ep);
    }

    get xpGain() {
        const xpGain = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__xpCombo__["c" /* improvedAttribute */])(this._xpGain, this.lvl);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* coloredNumber */])(xpGain);
    }

    get xp() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__xpCombo__["a" /* xpPresentation */])(this._xp, this._maxXp);
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
        const result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__xpCombo__["b" /* changeXpBy */])(this._xp, amount, this._maxXp, this.xpModifier);
        this._xp = result.xp;
        this._maxXp = result.maxXp;
        this.lvl += result.lvlIncrease;

        super.updateXpBeforeMarkingAsComplete(amount);
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = SkilledTask;


__WEBPACK_IMPORTED_MODULE_1__Task__["a" /* Task */].subclasses['skilled'] = SkilledTask;

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["b" /* registerUserInterfaceAware */])(SkilledTask);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__xpCombo__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasks_ReputationTask__ = __webpack_require__(17);




class Reputation extends __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["a" /* UserInterfaceAware */] {

    get reputation() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__xpCombo__["a" /* xpPresentation */])(this._reputation, this._maxReputation);
    }

    constructor() {
        super();
        this.userInterface = ['lvl', 'reputation', 'createReputationTask'];
        this.essential = 40;
        this.lvl = 0;
        this._reputation = 0;
        this._maxReputation = 10;
        this.reputationModifier = 1.2;
        this.createReputationTask.setting = true;
        this.createReputationTask.success = true;
    }

    changeReputationBy(amount) {
        const result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__xpCombo__["b" /* changeXpBy */])(this._reputation, amount, this._maxReputation, this.reputationModifier);
        this._reputation = result.xp;
        this._maxReputation = result.maxXp;
        this.lvl += result.lvlIncrease;
    }

    createReputationTask(name, hp, ep, xpGain, reputation) {
        return new __WEBPACK_IMPORTED_MODULE_2__tasks_ReputationTask__["a" /* ReputationTask */](name, hp, ep, xpGain, reputation);
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Reputation;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["b" /* registerUserInterfaceAware */])(Reputation);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Task__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xpCombo__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SkilledTask__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Objects__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__character_Reputation__ = __webpack_require__(16);








class ReputationTask extends __WEBPACK_IMPORTED_MODULE_4__SkilledTask__["a" /* SkilledTask */] {
    get reputation() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__xpCombo__["c" /* improvedAttribute */])(this._reputation, this.lvl);
    }

    constructor(name, hp, ep, xpGain, reputation) {
        super(name, hp, ep, xpGain);
        this._reputation = 0;
        this._reputation = reputation;
        this.userInterface.splice('name', 0, 'reputation');
    }

    updateXpBeforeMarkingAsComplete(amount) {
        const reputation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__Objects__["c" /* findFirstObject */])(__WEBPACK_IMPORTED_MODULE_6__character_Reputation__["a" /* Reputation */]);
        reputation.changeReputationBy(this.reputation * this._xpCombo);

        super.updateXpBeforeMarkingAsComplete(amount);
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ReputationTask;


__WEBPACK_IMPORTED_MODULE_1__Task__["a" /* Task */].subclasses['reputation'] = ReputationTask;

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__UserInterfaceAware__["b" /* registerUserInterfaceAware */])(ReputationTask);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWI3ZjkxM2M5NTg3YjE2OTY1OGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJJbnRlcmZhY2VBd2FyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTXlXb3JrLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFyYWN0ZXIvQ2hhcmFjdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy94cENvbWJvLmpzIiwid2VicGFjazovLy8uL3NyYy9SZW5kZXJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NsZWVwL1NsZWVwLmpzIiwid2VicGFjazovLy8uL3NyYy90YXNrcy9UYXNrLmpzIiwid2VicGFjazovLy8uL3NyYy9GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc2Vhc2VzL0Rpc2Vhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc2Vhc2VzL05ld0Rpc2Vhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zbGVlcC9TbGVlcENvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL05ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2tzL1NraWxsZWRUYXNrLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFyYWN0ZXIvUmVwdXRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFza3MvUmVwdXRhdGlvblRhc2suanMiXSwibmFtZXMiOlsidXNlckludGVyZmFjZUF3YXJlQ2xhc3NlcyIsIlVzZXJJbnRlcmZhY2VBd2FyZSIsImNvbnN0cnVjdG9yIiwiZGVmYXVsdFVzZXJJbnRlcmZhY2UiLCJ1c2VySW50ZXJmYWNlIiwiaW5kZXhPZiIsIkVycm9yIiwibmFtZSIsIm9iamVjdCIsImRlc3Ryb3kiLCJkYW5nZXIiLCJzZXR0aW5nIiwib2J0YWluQWxsVXNlckludGVyZmFjZSIsImNvbmNhdCIsImluZGV4IiwiYXBwbGljYXRpb25PYmplY3RzIiwic3BsaWNlIiwicmVuZGVyQWxsIiwiaGlkZVVzZXJJbnRlcmZhY2UiLCJoaWRkZW4iLCJzaG93VXNlckludGVyZmFjZSIsInVwZGF0ZUFmdGVyTG9hZCIsInJlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlIiwiYUNsYXNzIiwicHVzaCIsImluaXRpYWxPYmplY3RzIiwiX2FwcGxpY2F0aW9uT2JqZWN0cyIsIm1hcCIsIngiLCJ1cGRhdGVBcHBsaWNhdGlvbk9iamVjdHMiLCJvYmplY3RzIiwiZmluZEZpcnN0T2JqZWN0Iiwib2JqZWN0Q2xhc3MiLCJmaW5kIiwiZmluZEFsbE9iamVjdHMiLCJmaWx0ZXIiLCJtYWtlU3VyZUluaXRpYWxPYmplY3RzQXJlUHJlc2VudCIsImZvckVhY2giLCJmb3VuZCIsInJlcGxhY2VPYmplY3QiLCJuZXdPYmplY3QiLCJvIiwid2luZG93IiwiY29sb3JlZE51bWJlciIsIm51bWJlciIsInJlc3VsdCIsIk51bWJlciIsInBhcnNlRmxvYXQiLCJjb2xvciIsInRvZGF5IiwiZm9ybWF0RGF0ZSIsIkRhdGUiLCJ5ZXN0ZXJkYXkiLCJkYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJkYXkiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiY29udmVydFJhd1RvIiwicmF3Iiwia2xhc3MiLCJwcmlzdGluZU9iamVjdCIsInRhcmdldCIsIk9iamVjdCIsImFzc2lnbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjcmVhdGVPYmplY3RGcm9tUmF3IiwicmF3T2JqZWN0IiwiY2xhc3NOYW1lIiwiZm91bmRDbGFzcyIsImMiLCJNeVdvcmsiLCJsb2NhbFN0b3JhZ2VLZXkiLCJzZXR0aW5nc1Nob3duIiwiZXNzZW50aWFsIiwiZXhwb3J0Iiwic2F2ZSIsInN1Y2Nlc3MiLCJyZXNldCIsInJlbG9hZCIsImltcG9ydEl0IiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsInJhd09iamVjdHMiLCJwYXJzZSIsInJlc3RvcmVTZXR0aW5nc1N0YXRlIiwic2V0dGluZ3MiLCJoaWRlU2V0dGluZ3MiLCJzaG93U2V0dGluZ3MiLCJvYmoiLCJwcm9wIiwiQ2hhcmFjdGVyIiwibHZsIiwiYXR0cmlidXRlUG9pbnRzIiwiX3hwIiwiX21heFhwIiwieHBNb2RpZmllciIsIl9tYXhIcCIsIl9ocCIsIl9tYXhFcCIsIl9lcCIsImNoYW5nZSIsInhwIiwieHBQcmVzZW50YXRpb24iLCJocCIsInJlbmRlckJhciIsInVwZGF0ZUF0dHJpYnV0ZUJ1dHRvbnMiLCJlcCIsImN1cnJlbnQiLCJtYXgiLCJmaWxsZWRTeW1ib2wiLCJlbXB0eVN5bWJvbCIsImJhclZpZXciLCJpIiwiTWF0aCIsImZsb29yIiwiU3RyaW5nIiwidGl0bGUiLCJjaGFuZ2VIcEJ5IiwiYW1vdW50IiwiY2hhbmdlQnkiLCJjaGFuZ2VFcEJ5IiwiY2hhbmdlWHBCeSIsIm1heFhwIiwibHZsSW5jcmVhc2UiLCJtaW4iLCJuZXh0WHBDb21ibyIsInByZXZpb3VzRGF0ZSIsInhwQ29tYm8iLCJ4cENvbWJvUHJlc2VudGF0aW9uIiwiaW1wcm92ZWRBdHRyaWJ1dGUiLCJ0b3BMZXZlbCIsImFwcENvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b29sc0NvbnRhaW5lciIsImZpbHRlclRvb2wiLCJleHRyYWN0QXJnc1N0cmluZyIsImZuU3RyIiwic2xpY2UiLCJwYXJzZUFyZ3NTdHJpbmciLCJhcmdTdHIiLCJzcGxpdCIsInMiLCJ0cmltIiwibGVuZ3RoIiwicGFyc2VGdW5jdGlvbkFyZ3MiLCJmbiIsInRvU3RyaW5nIiwicmVuZGVySW5wdXRGb3JBcmciLCJtZXRob2RGb3JtIiwiYXJnIiwidmFsdWUiLCJhcmdJbnB1dCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInNldEF0dHJpYnV0ZSIsImhhbmRsZU1ldGhvZENhbGwiLCJwcm9wZXJ0eSIsImlucHV0cyIsImNsZWFyIiwiYXJncyIsImlucHV0IiwiY2FsbCIsImZvY3VzIiwicmVuZGVyT2JqZWN0IiwicmVuZGVyTWV0aG9kIiwib2JqZWN0RGl2IiwibWV0aG9kIiwiY2xhc3NMaXN0IiwiYWRkIiwiZGVmYXVsdEFyZ3NGbiIsImRlZmF1bHRBcmdzIiwiYXV0byIsImhhbmRsZUFyZ0NoYW5nZSIsImV2ZW50Iiwib25jaGFuZ2UiLCJvbmtleXVwIiwib25wYXN0ZSIsIm1ldGhvZERpdiIsInRleHRDb250ZW50Iiwib25jbGljayIsInByZXZlbnREZWZhdWx0IiwicmVuZGVyUHJvcGVydHkiLCJwcm9wZXJ0eURpdiIsInJlbmRlclVzZXJDb250cm9sIiwiY29udGFpbmVyIiwicmVuZGVyVG9vbCIsImNvbnRhaW5zIiwic3RyaW5nIiwidG9Mb3dlckNhc2UiLCJzZWFyY2hTdHJpbmciLCJjb250YWluc0luT2JqZWN0IiwiZXNzZW50aWFsQ29tcGFyZSIsImEiLCJiIiwib2JqZWN0Q29tcGFyZSIsImNvbXBhcmVCeUVzc2VudGlhbCIsImNvbXBhcmVCeUNsYXNzIiwibG9jYWxlQ29tcGFyZSIsImNvbXBhcmVCeU5hbWUiLCJteVdvcmsiLCJpbm5lckhUTUwiLCJmaWx0ZXJWYWx1ZSIsInNvcnQiLCJTbGVlcCIsInNsZXB0QXQiLCJhZmZlY3RDaGFyYWN0ZXIiLCJ4cEdhaW4iLCJjaGFyYWN0ZXIiLCJjb250cm9sIiwiVGFzayIsIl94cEdhaW4iLCJfeHBDb21ibyIsImNvbXBsZXRlZCIsInVuZG8iLCJtYWtlU2tpbGxlZCIsImNvbXBsZXRlIiwieHBBbW91bnQiLCJ1cGRhdGVYcEJlZm9yZU1hcmtpbmdBc0NvbXBsZXRlIiwibWFya0FzQ29tcGxldGVkIiwiY29tcGxldGVkQXQiLCJyZXBsYWNlQ29tcGxldGVXaXRoQ29tcGxldGVkIiwiaW5kZXhPZkNvbXBsZXRlIiwicmVwbGFjZUNvbXBsZXRlZEF0V2l0aENvbXBsZXRlIiwicmVwbGFjZUNvbXBsZXRlZFdpdGhDb21wbGV0ZSIsInJlbW92ZVVzZXJJbnRlcmZhY2UiLCJyZWFzb24iLCJsb2ciLCJ1bkNvbXBsZXRlIiwic2tpbGxlZFN1YmNsYXNzIiwic3ViY2xhc3NlcyIsInNraWxsZWRUYXNrIiwiRmlsdGVyIiwic2VhcmNoIiwiRGlzZWFzZSIsImFmZmVjdGVkQXQiLCJOZXdEaXNlYXNlIiwiY3JlYXRlIiwiU2xlZXBDb250cm9sIiwibWVzc2FnZSIsInNsZWVwIiwiY29tbW9uVXNlckludGVyZmFjZVdpdGgiLCJOZXdUYXNrIiwiaXNTa2lsbGVkIiwiU2tpbGxlZFRhc2siLCJSZXB1dGF0aW9uIiwicmVwdXRhdGlvbiIsIl9yZXB1dGF0aW9uIiwiX21heFJlcHV0YXRpb24iLCJyZXB1dGF0aW9uTW9kaWZpZXIiLCJjcmVhdGVSZXB1dGF0aW9uVGFzayIsImNoYW5nZVJlcHV0YXRpb25CeSIsIlJlcHV0YXRpb25UYXNrIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTs7QUFFTyxNQUFNQSw0QkFBNEIsRUFBbEM7QUFBQTtBQUFBOztBQUVBLE1BQU1DLGtCQUFOLENBQXlCOztBQUs1QkMsa0JBQWM7QUFBQSxhQUhkQyxvQkFHYyxHQUhTLENBQUMsUUFBRCxDQUdUO0FBQUEsYUFGZEMsYUFFYyxHQUZFLEVBRUY7O0FB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LENBQWtCLEtBQUtzSCxXQUF2QixFQUFvQyxLQUFLNUosR0FBekMsQ0FBUDtBQUNIOztBQUVEbkcsZ0JBQVlLLElBQVosRUFBa0IwRyxFQUFsQixFQUFzQkcsRUFBdEIsRUFBMEJxRyxNQUExQixFQUFrQ3VDLFVBQWxDLEVBQThDO0FBQzFDLGNBQU16UCxJQUFOLEVBQVkwRyxFQUFaLEVBQWdCRyxFQUFoQixFQUFvQnFHLE1BQXBCO0FBRDBDLGFBTDlDd0MsV0FLOEMsR0FMaEMsQ0FLZ0M7QUFFMUMsYUFBS0EsV0FBTCxHQUFtQkQsVUFBbkI7QUFDQSxhQUFLNVAsYUFBTCxDQUFtQlksTUFBbkIsQ0FBMEIsTUFBMUIsRUFBa0MsQ0FBbEMsRUFBcUMsWUFBckM7QUFDSDs7QUFFRG9OLG9DQUFnQ3BHLE1BQWhDLEVBQXdDO0FBQ3BDLGNBQU1nSSxhQUFhLHdGQUFBak8sQ0FBZ0IseUVBQWhCLENBQW5CO0FBQ0FpTyxtQkFBV0ssa0JBQVgsQ0FBOEIsS0FBS0wsVUFBTCxHQUFrQixLQUFLbEMsUUFBckQ7O0FBRUEsY0FBTU0sK0JBQU4sQ0FBc0NwRyxNQUF0QztBQUNIOztBQWxCMkM7QUFBQTtBQUFBOztBQXNCaEQsbURBQUE0RixDQUFLb0IsVUFBTCxDQUFnQixZQUFoQixJQUFnQ3NCLGNBQWhDOztBQUVBLDhHQUFBaFAsQ0FBMkJnUCxjQUEzQixFIiwiZmlsZSI6InB1YmxpYy9qcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxYjdmOTEzYzk1ODdiMTY5NjU4YyIsImltcG9ydCB7YXBwbGljYXRpb25PYmplY3RzfSBmcm9tICcuL09iamVjdHMnXG5pbXBvcnQge3JlbmRlckFsbH0gZnJvbSAnLi9SZW5kZXJpbmcnXG5cbmV4cG9ydCBjb25zdCB1c2VySW50ZXJmYWNlQXdhcmVDbGFzc2VzID0gW11cblxuZXhwb3J0IGNsYXNzIFVzZXJJbnRlcmZhY2VBd2FyZSB7XG5cbiAgICBkZWZhdWx0VXNlckludGVyZmFjZSA9IFsnb2JqZWN0J11cbiAgICB1c2VySW50ZXJmYWNlID0gW11cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAodXNlckludGVyZmFjZUF3YXJlQ2xhc3Nlcy5pbmRleE9mKHRoaXMuY29uc3RydWN0b3IpIDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBZb3UgZm9yZ290IHRvIHJlZ2lzdGVyIGEgdXNlciBpbnRlcmZhY2UgYXdhcmUgY2xhc3MgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9YClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub2JqZWN0ID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgICAgIHRoaXMuZGVzdHJveS5kYW5nZXIgPSB0cnVlXG4gICAgICAgIHRoaXMuZGVzdHJveS5zZXR0aW5nID0gdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge0FycmF5PFN0cmluZz59XG4gICAgICovXG4gICAgb2J0YWluQWxsVXNlckludGVyZmFjZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdFVzZXJJbnRlcmZhY2UuY29uY2F0KHRoaXMudXNlckludGVyZmFjZSlcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IGFwcGxpY2F0aW9uT2JqZWN0cygpLmluZGV4T2YodGhpcylcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uT2JqZWN0cygpLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgIHJlbmRlckFsbCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlVXNlckludGVyZmFjZSgpIHtcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlXG4gICAgfVxuXG4gICAgc2hvd1VzZXJJbnRlcmZhY2UoKSB7XG4gICAgICAgIHRoaXMuaGlkZGVuID0gZmFsc2VcbiAgICB9XG5cbiAgICB1cGRhdGVBZnRlckxvYWQoKSB7fVxuXG59XG5cbmV4cG9ydCBjb25zdCByZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZSA9IGFDbGFzcyA9PiB7XG4gICAgdXNlckludGVyZmFjZUF3YXJlQ2xhc3Nlcy5wdXNoKGFDbGFzcylcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVXNlckludGVyZmFjZUF3YXJlLmpzIiwiaW1wb3J0IHtNeVdvcmt9IGZyb20gJy4vTXlXb3JrJ1xuaW1wb3J0IHtDaGFyYWN0ZXJ9IGZyb20gJy4vY2hhcmFjdGVyL0NoYXJhY3RlcidcbmltcG9ydCB7TmV3VGFza30gZnJvbSAnLi90YXNrcy9OZXdUYXNrJ1xuaW1wb3J0IHtOZXdEaXNlYXNlfSBmcm9tICcuL2Rpc2Vhc2VzL05ld0Rpc2Vhc2UnXG5pbXBvcnQge1NsZWVwfSBmcm9tICcuL3NsZWVwL1NsZWVwJ1xuaW1wb3J0IHtSZXB1dGF0aW9ufSBmcm9tICcuL2NoYXJhY3Rlci9SZXB1dGF0aW9uJ1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbE9iamVjdHMgPSBbXG4gICAgbmV3IE15V29yaygpLFxuICAgIG5ldyBDaGFyYWN0ZXIoKSxcbiAgICBuZXcgTmV3VGFzaygpLFxuICAgIG5ldyBOZXdEaXNlYXNlKCksXG4gICAgbmV3IFNsZWVwKCksXG4gICAgbmV3IFJlcHV0YXRpb24oKSxcbl1cblxubGV0IF9hcHBsaWNhdGlvbk9iamVjdHMgPSBpbml0aWFsT2JqZWN0cy5tYXAoeCA9PiB4KVxuXG5leHBvcnQgY29uc3QgYXBwbGljYXRpb25PYmplY3RzID0gKCkgPT4ge1xuICAgIHJldHVybiBfYXBwbGljYXRpb25PYmplY3RzXG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVBcHBsaWNhdGlvbk9iamVjdHMgPSAob2JqZWN0cykgPT4ge1xuICAgIF9hcHBsaWNhdGlvbk9iamVjdHMgPSBvYmplY3RzXG59XG5cbmV4cG9ydCBjb25zdCBmaW5kRmlyc3RPYmplY3QgPSBvYmplY3RDbGFzcyA9PlxuICAgIGFwcGxpY2F0aW9uT2JqZWN0cygpXG4gICAgICAgIC5maW5kKG9iamVjdCA9PiBvYmplY3QgaW5zdGFuY2VvZiBvYmplY3RDbGFzcylcblxuZXhwb3J0IGNvbnN0IGZpbmRBbGxPYmplY3RzID0gb2JqZWN0Q2xhc3MgPT5cbiAgICBhcHBsaWNhdGlvbk9iamVjdHMoKVxuICAgICAgICAuZmlsdGVyKG9iamVjdCA9PiBvYmplY3QgaW5zdGFuY2VvZiBvYmplY3RDbGFzcylcblxuZXhwb3J0IGNvbnN0IG1ha2VTdXJlSW5pdGlhbE9iamVjdHNBcmVQcmVzZW50ID0gKCkgPT4ge1xuICAgIGluaXRpYWxPYmplY3RzLmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgY29uc3QgZm91bmQgPSBmaW5kRmlyc3RPYmplY3Qob2JqZWN0LmNvbnN0cnVjdG9yKVxuICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbk9iamVjdHMoKS5wdXNoKG9iamVjdClcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCByZXBsYWNlT2JqZWN0ID0gKG9iamVjdCwgbmV3T2JqZWN0KSA9PiB7XG4gICAgX2FwcGxpY2F0aW9uT2JqZWN0cyA9IGFwcGxpY2F0aW9uT2JqZWN0cygpLm1hcChvID0+IHtcbiAgICAgICAgaWYgKG8gPT09IG9iamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ld09iamVjdFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbndpbmRvdy5fYXBwbGljYXRpb25PYmplY3RzID0gYXBwbGljYXRpb25PYmplY3RzXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvT2JqZWN0cy5qcyIsImV4cG9ydCBjb25zdCBjb2xvcmVkTnVtYmVyID0gbnVtYmVyID0+IHtcbiAgICAvL25vaW5zcGVjdGlvbiBKU1ByaW1pdGl2ZVR5cGVXcmFwcGVyVXNhZ2VcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgTnVtYmVyKHBhcnNlRmxvYXQobnVtYmVyKSlcblxuICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgIC8vbm9pbnNwZWN0aW9uIEpTUHJpbWl0aXZlVHlwZVdyYXBwZXJVc2FnZVxuICAgICAgICByZXN1bHQuY29sb3IgPSAncmVkJ1xuICAgIH0gZWxzZSBpZiAobnVtYmVyID4gMCkge1xuICAgICAgICAvL25vaW5zcGVjdGlvbiBKU1ByaW1pdGl2ZVR5cGVXcmFwcGVyVXNhZ2VcbiAgICAgICAgcmVzdWx0LmNvbG9yID0gJ2dyZWVuJ1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGNvbnN0IHRvZGF5ID0gKCkgPT4gZm9ybWF0RGF0ZShuZXcgRGF0ZSgpKVxuXG5leHBvcnQgY29uc3QgeWVzdGVyZGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gMSlcblxuICAgIHJldHVybiBmb3JtYXREYXRlKGRhdGUpXG59XG5cbmNvbnN0IGZvcm1hdERhdGUgPSBkYXRlID0+IHtcbiAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKVxuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMVxuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcblxuICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC5qcyIsImltcG9ydCB7cmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUsIFVzZXJJbnRlcmZhY2VBd2FyZSwgdXNlckludGVyZmFjZUF3YXJlQ2xhc3Nlc30gZnJvbSAnLi9Vc2VySW50ZXJmYWNlQXdhcmUnXG5pbXBvcnQge2FwcGxpY2F0aW9uT2JqZWN0cywgZmluZEZpcnN0T2JqZWN0LCBpbml0aWFsT2JqZWN0cywgdXBkYXRlQXBwbGljYXRpb25PYmplY3RzfSBmcm9tICcuL09iamVjdHMnXG5pbXBvcnQge3JlbmRlckFsbH0gZnJvbSAnLi9SZW5kZXJpbmcnXG5cbmV4cG9ydCBjb25zdCBjb252ZXJ0UmF3VG8gPSAocmF3LCBrbGFzcykgPT4ge1xuICAgIGNvbnN0IHByaXN0aW5lT2JqZWN0ID0gbmV3IGtsYXNzKClcbiAgICBjb25zdCB0YXJnZXQgPSBuZXcga2xhc3MoKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHJhdylcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICB0YXJnZXQudXNlckludGVyZmFjZSA9IHByaXN0aW5lT2JqZWN0LnVzZXJJbnRlcmZhY2VcbiAgICB0YXJnZXQub2JqZWN0ID0gcHJpc3RpbmVPYmplY3Qub2JqZWN0XG5cbiAgICByZXR1cm4gdGFyZ2V0XG59XG5cbmNvbnN0IGNyZWF0ZU9iamVjdEZyb21SYXcgPSAocmF3T2JqZWN0KSA9PiB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gcmF3T2JqZWN0Lm9iamVjdFxuICAgIGNvbnN0IGZvdW5kQ2xhc3MgPSB1c2VySW50ZXJmYWNlQXdhcmVDbGFzc2VzLmZpbmQoYyA9PiBjLm5hbWUgPT09IGNsYXNzTmFtZSlcblxuICAgIGlmIChmb3VuZENsYXNzKSB7XG4gICAgICAgIHJldHVybiBjb252ZXJ0UmF3VG8ocmF3T2JqZWN0LCBmb3VuZENsYXNzKVxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBjbGFzcyBNeVdvcmsgZXh0ZW5kcyBVc2VySW50ZXJmYWNlQXdhcmUge1xuXG4gICAgdXNlckludGVyZmFjZSA9IFsnc2F2ZScsICdzZXR0aW5ncycsICdyZWxvYWQnLCAnaW1wb3J0SXQnLCAncmVzZXQnXVxuICAgIGxvY2FsU3RvcmFnZUtleSA9ICdNeVdvcmsuc2F2ZWRXb3JrJ1xuICAgIHNldHRpbmdzU2hvd24gPSB0cnVlXG4gICAgZXNzZW50aWFsID0gMTAwXG4gICAgZXhwb3J0ID0gJydcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuc2F2ZS5zdWNjZXNzID0gdHJ1ZVxuICAgICAgICB0aGlzLnJlc2V0LmRhbmdlciA9IHRydWVcbiAgICAgICAgdGhpcy5yZWxvYWQuc2V0dGluZyA9IHRydWVcbiAgICAgICAgdGhpcy5yZXNldC5zZXR0aW5nID0gdHJ1ZVxuICAgICAgICB0aGlzLmltcG9ydEl0LnNldHRpbmcgPSB0cnVlXG4gICAgICAgIHRoaXMuaW1wb3J0SXQuZGFuZ2VyID0gdHJ1ZVxuICAgIH1cblxuICAgIHNhdmUoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShhcHBsaWNhdGlvbk9iamVjdHMoKSlcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXksIGRhdGEpXG4gICAgfVxuXG4gICAgaW1wb3J0SXQoZGF0YSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSwgZGF0YSlcbiAgICAgICAgdGhpcy5yZWxvYWQoKVxuICAgIH1cblxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KVxuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgcmF3T2JqZWN0cyA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICAgICAgICAgIGNvbnN0IG9iamVjdHMgPSByYXdPYmplY3RzXG4gICAgICAgICAgICAgICAgLm1hcChjcmVhdGVPYmplY3RGcm9tUmF3KVxuICAgICAgICAgICAgICAgIC5maWx0ZXIob2JqZWN0ID0+IG9iamVjdCAhPT0gbnVsbClcblxuICAgICAgICAgICAgdXBkYXRlQXBwbGljYXRpb25PYmplY3RzKG9iamVjdHMpXG5cbiAgICAgICAgICAgIGFwcGxpY2F0aW9uT2JqZWN0cygpXG4gICAgICAgICAgICAgICAgLmZvckVhY2gobyA9PiBvLnVwZGF0ZUFmdGVyTG9hZCgpKVxuXG4gICAgICAgICAgICBmaW5kRmlyc3RPYmplY3QoTXlXb3JrKS5yZXN0b3JlU2V0dGluZ3NTdGF0ZSgpXG5cbiAgICAgICAgICAgIHJlbmRlckFsbCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdXBkYXRlQXBwbGljYXRpb25PYmplY3RzKGluaXRpYWxPYmplY3RzKVxuICAgICAgICByZW5kZXJBbGwoKVxuICAgIH1cblxuICAgIHNldHRpbmdzKCkge1xuICAgICAgICBpZiAodGhpcy5zZXR0aW5nc1Nob3duKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVTZXR0aW5ncygpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dTZXR0aW5ncygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXN0b3JlU2V0dGluZ3NTdGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3NTaG93bikge1xuICAgICAgICAgICAgdGhpcy5zaG93U2V0dGluZ3MoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oaWRlU2V0dGluZ3MoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZVNldHRpbmdzKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzU2hvd24gPSBmYWxzZVxuXG4gICAgICAgIGFwcGxpY2F0aW9uT2JqZWN0cygpXG4gICAgICAgICAgICAuZmlsdGVyKG8gPT4gby5zZXR0aW5nKVxuICAgICAgICAgICAgLmZvckVhY2gobyA9PiBvLmhpZGVVc2VySW50ZXJmYWNlKCkpXG5cbiAgICAgICAgYXBwbGljYXRpb25PYmplY3RzKClcbiAgICAgICAgICAgIC5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICAgICAgb2JqLm9idGFpbkFsbFVzZXJJbnRlcmZhY2UoKVxuICAgICAgICAgICAgICAgICAgICAubWFwKG5hbWUgPT4gb2JqW25hbWVdKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHByb3AgPT4gcHJvcC5zZXR0aW5nKVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChwcm9wID0+IHByb3AuaGlkZGVuID0gdHJ1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2hvd1NldHRpbmdzKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzU2hvd24gPSB0cnVlXG5cbiAgICAgICAgYXBwbGljYXRpb25PYmplY3RzKClcbiAgICAgICAgICAgIC5maWx0ZXIobyA9PiBvLnNldHRpbmcgfHwgby5oaWRkZW4pXG4gICAgICAgICAgICAuZm9yRWFjaChvID0+IG8uc2hvd1VzZXJJbnRlcmZhY2UoKSlcblxuICAgICAgICBhcHBsaWNhdGlvbk9iamVjdHMoKVxuICAgICAgICAgICAgLmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgICAgICAgICBvYmoub2J0YWluQWxsVXNlckludGVyZmFjZSgpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAobmFtZSA9PiBvYmpbbmFtZV0pXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIocHJvcCA9PiBwcm9wLnNldHRpbmcpXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKHByb3AgPT4gcHJvcC5oaWRkZW4gPSBmYWxzZSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxufVxuXG5yZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZShNeVdvcmspXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL015V29yay5qcyIsImltcG9ydCB7cmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUsIFVzZXJJbnRlcmZhY2VBd2FyZX0gZnJvbSAnLi4vVXNlckludGVyZmFjZUF3YXJlJ1xuaW1wb3J0IHtjaGFuZ2VYcEJ5LCB4cFByZXNlbnRhdGlvbn0gZnJvbSAnLi4veHBDb21ibydcblxuZXhwb3J0IGNsYXNzIENoYXJhY3RlciBleHRlbmRzIFVzZXJJbnRlcmZhY2VBd2FyZSB7XG5cbiAgICB1c2VySW50ZXJmYWNlID0gWyduYW1lJywgJ2x2bCcsICdhdHRyaWJ1dGVQb2ludHMnLCAnaHAnLCAnaHArJywgJ2VwJywgJ2VwKycsICd4cCcsICdjaGFuZ2UnXVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcblxuICAgICAgICB0aGlzLmNoYW5nZS5zZXR0aW5nID0gdHJ1ZVxuICAgICAgICB0aGlzWydocCsnXS5oaWRkZW4gPSB0cnVlXG4gICAgICAgIHRoaXNbJ2VwKyddLmhpZGRlbiA9IHRydWVcbiAgICB9XG5cbiAgICBuYW1lID0gJydcbiAgICBlc3NlbnRpYWwgPSA5MFxuXG4gICAgbHZsID0gMVxuICAgIGF0dHJpYnV0ZVBvaW50cyA9IDBcblxuICAgIF94cCA9IDBcbiAgICBfbWF4WHAgPSA1MFxuICAgIHhwTW9kaWZpZXIgPSAxLjJcbiAgICBnZXQgeHAoKSB7XG4gICAgICAgIHJldHVybiB4cFByZXNlbnRhdGlvbih0aGlzLl94cCwgdGhpcy5fbWF4WHApXG4gICAgfVxuXG4gICAgX21heEhwID0gNVxuICAgIF9ocCA9IDVcbiAgICBnZXQgaHAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckJhcih0aGlzLl9ocCwgdGhpcy5fbWF4SHAsICfimaXvuI8nLCAn4pmhJylcbiAgICB9XG4gICAgWydocCsnXSgpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVQb2ludHMgLT0gMVxuICAgICAgICB0aGlzLl9tYXhIcCArPSAxXG4gICAgICAgIHRoaXMudXBkYXRlQXR0cmlidXRlQnV0dG9ucygpXG4gICAgfVxuXG4gICAgX21heEVwID0gNVxuICAgIF9lcCA9IDVcbiAgICBnZXQgZXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckJhcih0aGlzLl9lcCwgdGhpcy5fbWF4RXAsICfimqHvuI/vuI8nLCAn4pi8JylcbiAgICB9XG4gICAgWydlcCsnXSgpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVQb2ludHMgLT0gMVxuICAgICAgICB0aGlzLl9tYXhFcCArPSAxXG4gICAgICAgIHRoaXMudXBkYXRlQXR0cmlidXRlQnV0dG9ucygpXG4gICAgfVxuXG4gICAgY2hhbmdlKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIH1cblxuICAgIHJlbmRlckJhcihjdXJyZW50LCBtYXgsIGZpbGxlZFN5bWJvbCwgZW1wdHlTeW1ib2wpIHtcbiAgICAgICAgbGV0IGJhclZpZXcgPSAnJ1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5mbG9vcihjdXJyZW50KTsgaSsrKSB7XG4gICAgICAgICAgICBiYXJWaWV3ICs9IGZpbGxlZFN5bWJvbFxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IE1hdGguZmxvb3IoY3VycmVudCk7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICAgICAgYmFyVmlldyArPSBlbXB0eVN5bWJvbFxuICAgICAgICB9XG5cbiAgICAgICAgLy9ub2luc3BlY3Rpb24gSlNQcmltaXRpdmVUeXBlV3JhcHBlclVzYWdlXG4gICAgICAgIGJhclZpZXcgPSBuZXcgU3RyaW5nKGJhclZpZXcpXG4gICAgICAgIC8vbm9pbnNwZWN0aW9uIEpTUHJpbWl0aXZlVHlwZVdyYXBwZXJVc2FnZVxuICAgICAgICBiYXJWaWV3LnRpdGxlID0gYCR7Y3VycmVudH0vJHttYXh9YFxuXG4gICAgICAgIHJldHVybiBiYXJWaWV3XG4gICAgfVxuXG4gICAgY2hhbmdlSHBCeShhbW91bnQpIHtcbiAgICAgICAgdGhpcy5faHAgPSB0aGlzLmNoYW5nZUJ5KHRoaXMuX2hwLCB0aGlzLl9tYXhIcCwgYW1vdW50KVxuICAgIH1cblxuICAgIGNoYW5nZUVwQnkoYW1vdW50KSB7XG4gICAgICAgIHRoaXMuX2VwID0gdGhpcy5jaGFuZ2VCeSh0aGlzLl9lcCwgdGhpcy5fbWF4RXAsIGFtb3VudClcbiAgICB9XG5cbiAgICBjaGFuZ2VYcEJ5KGFtb3VudCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjaGFuZ2VYcEJ5KHRoaXMuX3hwLCBhbW91bnQsIHRoaXMuX21heFhwLCB0aGlzLnhwTW9kaWZpZXIpXG4gICAgICAgIHRoaXMuX3hwID0gcmVzdWx0LnhwXG4gICAgICAgIHRoaXMuX21heFhwID0gcmVzdWx0Lm1heFhwXG4gICAgICAgIHRoaXMuYXR0cmlidXRlUG9pbnRzICs9IHJlc3VsdC5hdHRyaWJ1dGVQb2ludHNcbiAgICAgICAgdGhpcy5sdmwgKz0gcmVzdWx0Lmx2bEluY3JlYXNlXG4gICAgICAgIHRoaXMudXBkYXRlQXR0cmlidXRlQnV0dG9ucygpXG4gICAgfVxuXG4gICAgY2hhbmdlQnkoY3VycmVudCwgbWF4LCBhbW91bnQpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKG1heCwgY3VycmVudCArIGFtb3VudCkpXG4gICAgfVxuXG4gICAgdXBkYXRlQXR0cmlidXRlQnV0dG9ucygpIHtcbiAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlUG9pbnRzID4gMCkge1xuICAgICAgICAgICAgdGhpc1snaHArJ10uaGlkZGVuID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXNbJ2VwKyddLmhpZGRlbiA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzWydocCsnXS5oaWRkZW4gPSB0cnVlXG4gICAgICAgICAgICB0aGlzWydlcCsnXS5oaWRkZW4gPSB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVBZnRlckxvYWQoKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZUFmdGVyTG9hZCgpXG4gICAgICAgIHRoaXMudXBkYXRlQXR0cmlidXRlQnV0dG9ucygpXG4gICAgfVxuXG59XG5cbnJlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlKENoYXJhY3RlcilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2hhcmFjdGVyL0NoYXJhY3Rlci5qcyIsImltcG9ydCB7eWVzdGVyZGF5fSBmcm9tICcuL3V0aWwnXG5cbmV4cG9ydCBjb25zdCBuZXh0WHBDb21ibyA9IChwcmV2aW91c0RhdGUsIHhwQ29tYm8pID0+IHtcbiAgICBpZiAocHJldmlvdXNEYXRlID09PSB5ZXN0ZXJkYXkoKSkge1xuICAgICAgICByZXR1cm4geHBDb21ibyArIDFcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHhwQ29tYm9QcmVzZW50YXRpb24gPSB4cENvbWJvID0+IGB4JHt4cENvbWJvfWBcblxuZXhwb3J0IGNvbnN0IHhwUHJlc2VudGF0aW9uID0gKHhwLCBtYXgpID0+IGAke01hdGguZmxvb3IoeHApfS8ke01hdGguZmxvb3IobWF4KX1gXG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VYcEJ5ID0gKHhwLCBhbW91bnQsIG1heFhwLCB4cE1vZGlmaWVyKSA9PiB7XG4gICAgbGV0IGF0dHJpYnV0ZVBvaW50cyA9IDBcbiAgICBsZXQgbHZsSW5jcmVhc2UgPSAwXG5cbiAgICB4cCArPSBhbW91bnRcblxuICAgIHdoaWxlICh4cCA+PSBtYXhYcCkge1xuICAgICAgICBhdHRyaWJ1dGVQb2ludHMrK1xuICAgICAgICBsdmxJbmNyZWFzZSsrXG4gICAgICAgIHhwIC09IG1heFhwXG4gICAgICAgIG1heFhwID0gTWF0aC5mbG9vcihtYXhYcCAqIHhwTW9kaWZpZXIpXG4gICAgfVxuXG4gICAgaWYgKHhwIDwgMCkge1xuICAgICAgICB4cCA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgeHA6IHhwLFxuICAgICAgICBtYXhYcDogbWF4WHAsXG4gICAgICAgIGF0dHJpYnV0ZVBvaW50czogYXR0cmlidXRlUG9pbnRzLFxuICAgICAgICBsdmxJbmNyZWFzZTogbHZsSW5jcmVhc2UsXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgaW1wcm92ZWRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAobnVtYmVyLCBsdmwpIHtcbiAgICBjb25zdCB0b3BMZXZlbCA9IDMwXG5cbiAgICBpZiAobnVtYmVyID4gMCkge1xuICAgICAgICBudW1iZXIgPSBudW1iZXIgKiAoMSArIChsdmwgLSAxKSAvIHRvcExldmVsKVxuICAgIH1cblxuICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgIG51bWJlciA9IG51bWJlciAvICgxICsgKGx2bCAtIDEpIC8gdG9wTGV2ZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IobnVtYmVyICogMTAwKSAvIDEwMFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3hwQ29tYm8uanMiLCJpbXBvcnQge2FwcGxpY2F0aW9uT2JqZWN0cywgZmluZEZpcnN0T2JqZWN0fSBmcm9tICcuL09iamVjdHMnXG5pbXBvcnQge1VzZXJJbnRlcmZhY2VBd2FyZX0gZnJvbSAnLi9Vc2VySW50ZXJmYWNlQXdhcmUnXG5pbXBvcnQge015V29ya30gZnJvbSAnLi9NeVdvcmsnXG5pbXBvcnQge0ZpbHRlcn0gZnJvbSAnLi9GaWx0ZXInXG5cbmNvbnN0IGFwcENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuXG5jb25zdCB0b29sc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b29scycpXG5cbmV4cG9ydCBjb25zdCBmaWx0ZXJUb29sID0gbmV3IEZpbHRlcigpXG5cbmNvbnN0IGV4dHJhY3RBcmdzU3RyaW5nID0gKGZuU3RyKSA9PiB7XG4gICAgcmV0dXJuIGZuU3RyLnNsaWNlKGZuU3RyLmluZGV4T2YoJygnKSArIDEsIGZuU3RyLmluZGV4T2YoJyknKSlcbn1cblxuY29uc3QgcGFyc2VBcmdzU3RyaW5nID0gKGFyZ1N0cikgPT4ge1xuICAgIHJldHVybiBhcmdTdHIuc3BsaXQoJywnKVxuICAgICAgICAubWFwKHMgPT4gcy50cmltKCkpXG4gICAgICAgIC5maWx0ZXIocyA9PiBzLmxlbmd0aCA+IDApXG59XG5cbmNvbnN0IHBhcnNlRnVuY3Rpb25BcmdzID0gKGZuKSA9PiB7XG4gICAgY29uc3QgZm5TdHIgPSBmbi50b1N0cmluZygpXG4gICAgY29uc3QgYXJnU3RyID0gZXh0cmFjdEFyZ3NTdHJpbmcoZm5TdHIpXG4gICAgcmV0dXJuIHBhcnNlQXJnc1N0cmluZyhhcmdTdHIpXG59XG5cbmNvbnN0IHJlbmRlcklucHV0Rm9yQXJnID0gKG1ldGhvZEZvcm0sIGFyZywgdmFsdWUpID0+IHtcbiAgICBjb25zdCBhcmdJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBtZXRob2RGb3JtLmFwcGVuZENoaWxkKGFyZ0lucHV0KVxuICAgIGFyZ0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICBhcmdJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgYXJnKVxuICAgIGFyZ0lucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICByZXR1cm4gYXJnSW5wdXRcbn1cblxuY29uc3QgaGFuZGxlTWV0aG9kQ2FsbCA9IChvYmplY3QsIHByb3BlcnR5LCBpbnB1dHMsIGNsZWFyID0gdHJ1ZSkgPT4ge1xuICAgIGNvbnN0IGFyZ3MgPSBpbnB1dHMubWFwKGlucHV0ID0+IGlucHV0LnZhbHVlKVxuICAgIGNvbnN0IHJlc3VsdCA9IHByb3BlcnR5LmNhbGwob2JqZWN0LCAuLi5hcmdzKVxuXG4gICAgaWYgKGNsZWFyKSB7XG4gICAgICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IGlucHV0LnZhbHVlID0gJycpXG5cbiAgICAgICAgaWYgKGlucHV0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpbnB1dHNbMF0uZm9jdXMoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFVzZXJJbnRlcmZhY2VBd2FyZSkge1xuICAgICAgICBhcHBsaWNhdGlvbk9iamVjdHMoKS5wdXNoKHJlc3VsdClcbiAgICAgICAgcmVuZGVyT2JqZWN0KHJlc3VsdClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZW5kZXJBbGwoKVxuICAgIH1cbn1cblxuY29uc3QgcmVuZGVyTWV0aG9kID0gKG9iamVjdCwgb2JqZWN0RGl2LCBuYW1lLCBtZXRob2QpID0+IHtcbiAgICBjb25zdCBhcmdzID0gcGFyc2VGdW5jdGlvbkFyZ3MobWV0aG9kKVxuXG4gICAgY29uc3QgbWV0aG9kRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgb2JqZWN0RGl2LmFwcGVuZENoaWxkKG1ldGhvZEZvcm0pXG4gICAgbWV0aG9kRm9ybS5jbGFzc0xpc3QuYWRkKCdwcm9wZXJ0eScpXG4gICAgbWV0aG9kRm9ybS5jbGFzc0xpc3QuYWRkKCdtZXRob2QnKVxuXG4gICAgaWYgKG1ldGhvZC5kYW5nZXIpIHtcbiAgICAgICAgbWV0aG9kRm9ybS5jbGFzc0xpc3QuYWRkKCdkYW5nZXInKVxuICAgIH1cblxuICAgIGlmIChtZXRob2Quc3VjY2Vzcykge1xuICAgICAgICBtZXRob2RGb3JtLmNsYXNzTGlzdC5hZGQoJ3N1Y2Nlc3MnKVxuICAgIH1cblxuICAgIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgbWV0aG9kRm9ybS5jbGFzc0xpc3QuYWRkKCdtdWx0aWxpbmUnKVxuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRBcmdzRm4gPSBvYmplY3RbYCR7bmFtZX0uZGVmYXVsdEFyZ3NgXSB8fCAoKCkgPT4gKHt9KSlcbiAgICBjb25zdCBkZWZhdWx0QXJncyA9IGRlZmF1bHRBcmdzRm4uY2FsbChvYmplY3QpXG5cbiAgICBjb25zdCBpbnB1dHMgPSBhcmdzLm1hcChhcmcgPT4ge1xuICAgICAgICByZXR1cm4gcmVuZGVySW5wdXRGb3JBcmcobWV0aG9kRm9ybSwgYXJnLCBkZWZhdWx0QXJnc1thcmddIHx8ICcnKVxuICAgIH0pXG5cbiAgICBpZiAobWV0aG9kLmF1dG8gJiYgYXJncy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgY29uc3QgaGFuZGxlQXJnQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVNZXRob2RDYWxsKG9iamVjdCwgbWV0aG9kLCBpbnB1dHMsIGZhbHNlKVxuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgaW5wdXQub25jaGFuZ2UgPSBoYW5kbGVBcmdDaGFuZ2VcbiAgICAgICAgICAgIGlucHV0Lm9ua2V5dXAgPSBoYW5kbGVBcmdDaGFuZ2VcbiAgICAgICAgICAgIGlucHV0Lm9ucGFzdGUgPSBoYW5kbGVBcmdDaGFuZ2VcbiAgICAgICAgfSlcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY29uc3QgbWV0aG9kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgIG1ldGhvZEZvcm0uYXBwZW5kQ2hpbGQobWV0aG9kRGl2KVxuICAgICAgICBtZXRob2REaXYudGV4dENvbnRlbnQgPSBgJHtuYW1lfWBcbiAgICAgICAgbWV0aG9kRGl2LnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJylcblxuICAgICAgICBtZXRob2REaXYub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlTWV0aG9kQ2FsbChvYmplY3QsIG1ldGhvZCwgaW5wdXRzKVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmNvbnN0IHJlbmRlclByb3BlcnR5ID0gKG9iamVjdERpdiwgbmFtZSwgcHJvcGVydHkpID0+IHtcbiAgICBjb25zdCBwcm9wZXJ0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgb2JqZWN0RGl2LmFwcGVuZENoaWxkKHByb3BlcnR5RGl2KVxuICAgIHByb3BlcnR5RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb3BlcnR5JylcbiAgICBwcm9wZXJ0eURpdi50ZXh0Q29udGVudCA9IGAke25hbWV9OiAke3Byb3BlcnR5fWBcblxuICAgIGlmIChwcm9wZXJ0eS5jb2xvcikge1xuICAgICAgICBwcm9wZXJ0eURpdi5jbGFzc0xpc3QuYWRkKHByb3BlcnR5LmNvbG9yKVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eS50aXRsZSkge1xuICAgICAgICBwcm9wZXJ0eURpdi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgcHJvcGVydHkudGl0bGUpXG4gICAgfVxufVxuXG5jb25zdCByZW5kZXJVc2VyQ29udHJvbCA9IChvYmplY3QsIG9iamVjdERpdiwgbmFtZSkgPT4ge1xuICAgIGNvbnN0IHByb3BlcnR5ID0gb2JqZWN0W25hbWVdXG4gICAgaWYgKHByb3BlcnR5LmhpZGRlbikge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByb3BlcnR5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJlbmRlck1ldGhvZChvYmplY3QsIG9iamVjdERpdiwgbmFtZSwgcHJvcGVydHkpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyUHJvcGVydHkob2JqZWN0RGl2LCBuYW1lLCBwcm9wZXJ0eSlcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJPYmplY3QgPSAob2JqZWN0LCBjb250YWluZXIgPSBhcHBDb250YWluZXIpID0+IHtcbiAgICBjb25zdCBvYmplY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvYmplY3REaXYpXG4gICAgb2JqZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ29iamVjdCcpXG5cbiAgICBvYmplY3Qub2J0YWluQWxsVXNlckludGVyZmFjZSgpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIHJlbmRlclVzZXJDb250cm9sKG9iamVjdCwgb2JqZWN0RGl2LCBuYW1lKVxuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJUb29sID0gb2JqZWN0ID0+IHtcbiAgICByZW5kZXJPYmplY3Qob2JqZWN0LCB0b29sc0NvbnRhaW5lcilcbn1cblxuY29uc3QgY29udGFpbnMgPSAoc3RyaW5nLCBmaWx0ZXIpID0+IHtcbiAgICBsZXQgbmFtZSA9IHN0cmluZy50b0xvd2VyQ2FzZSgpXG4gICAgbGV0IHNlYXJjaFN0cmluZyA9IGZpbHRlci50b0xvd2VyQ2FzZSgpXG4gICAgcmV0dXJuIG5hbWUuaW5kZXhPZihzZWFyY2hTdHJpbmcpID49IDBcbn1cblxuY29uc3QgY29udGFpbnNJbk9iamVjdCA9IChvYmplY3QsIGZpbHRlcikgPT4ge1xuICAgIHJldHVybiBjb250YWlucyhvYmplY3QuY29uc3RydWN0b3IubmFtZSwgZmlsdGVyKSB8fFxuICAgICAgICAgICAgY29udGFpbnMob2JqZWN0Lm5hbWUgfHwgJycsIGZpbHRlcilcbn1cblxuY29uc3QgZXNzZW50aWFsQ29tcGFyZSA9IChhLCBiKSA9PiB7XG4gICAgcmV0dXJuIChiLmVzc2VudGlhbCB8fCAwKSAtIChhLmVzc2VudGlhbCB8fCAwKVxufVxuXG5jb25zdCBvYmplY3RDb21wYXJlID0gKGEsIGIpID0+IHtcbiAgICBjb25zdCBjb21wYXJlQnlFc3NlbnRpYWwgPSBlc3NlbnRpYWxDb21wYXJlKGEsIGIpXG5cbiAgICBjb25zdCBjb21wYXJlQnlDbGFzcyA9IGEuY29uc3RydWN0b3IubmFtZVxuICAgICAgICAubG9jYWxlQ29tcGFyZShiLmNvbnN0cnVjdG9yLm5hbWUpXG5cbiAgICBjb25zdCBjb21wYXJlQnlOYW1lID0gKGEubmFtZSB8fCAnJylcbiAgICAgICAgLmxvY2FsZUNvbXBhcmUoYi5uYW1lIHx8ICcnKVxuXG4gICAgaWYgKGNvbXBhcmVCeUVzc2VudGlhbCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gY29tcGFyZUJ5RXNzZW50aWFsXG4gICAgfVxuXG4gICAgaWYgKGNvbXBhcmVCeUNsYXNzICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBjb21wYXJlQnlDbGFzc1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlQnlOYW1lXG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJBbGwgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBteVdvcmsgPSBmaW5kRmlyc3RPYmplY3QoTXlXb3JrKVxuICAgIG15V29yay5yZXN0b3JlU2V0dGluZ3NTdGF0ZSgpXG5cbiAgICBhcHBDb250YWluZXIuaW5uZXJIVE1MID0gJydcblxuICAgIGFwcGxpY2F0aW9uT2JqZWN0cygpXG4gICAgICAgIC5maWx0ZXIob2JqZWN0ID0+ICFvYmplY3QuaGlkZGVuKVxuICAgICAgICAuZmlsdGVyKG9iamVjdCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0LmVzc2VudGlhbCB8fFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zSW5PYmplY3Qob2JqZWN0LCBmaWx0ZXJUb29sLmZpbHRlclZhbHVlKVxuICAgICAgICB9KS5zb3J0KG9iamVjdENvbXBhcmUpXG4gICAgICAgIC5mb3JFYWNoKG9iamVjdCA9PiByZW5kZXJPYmplY3Qob2JqZWN0KSlcblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZW5kZXJpbmcuanMiLCJpbXBvcnQge3JlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlLCBVc2VySW50ZXJmYWNlQXdhcmV9IGZyb20gJy4uL1VzZXJJbnRlcmZhY2VBd2FyZSdcbmltcG9ydCB7dG9kYXl9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQge2ZpbmRBbGxPYmplY3RzLCBmaW5kRmlyc3RPYmplY3R9IGZyb20gJy4uL09iamVjdHMnXG5pbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSAnLi4vY2hhcmFjdGVyL0NoYXJhY3RlcidcbmltcG9ydCB7U2xlZXBDb250cm9sfSBmcm9tICcuL1NsZWVwQ29udHJvbCdcblxuXG5leHBvcnQgY2xhc3MgU2xlZXAgZXh0ZW5kcyBVc2VySW50ZXJmYWNlQXdhcmUge1xuXG4gICAgdXNlckludGVyZmFjZSA9IFsnc2xlcHRBdCcsICdhZGQgc2xlZXAgY29udHJvbCddXG5cbiAgICBuYW1lXG4gICAgc2xlcHRBdFxuICAgIGVzc2VudGlhbCA9IDUwXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLnNsZXB0QXQgPSAnJ1xuXG4gICAgICAgIHRoaXNbJ2FkZCBzbGVlcCBjb250cm9sJ10uc2V0dGluZyA9IHRydWVcbiAgICAgICAgdGhpc1snYWRkIHNsZWVwIGNvbnRyb2wnXS5zdWNjZXNzID0gdHJ1ZVxuICAgIH1cblxuICAgIFsnYWRkIHNsZWVwIGNvbnRyb2wnXShuYW1lLCBocCwgZXApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTbGVlcENvbnRyb2wobmFtZSwgaHAsIGVwKVxuICAgIH1cblxuICAgIGFmZmVjdENoYXJhY3RlcihocCwgZXAsIHhwR2Fpbikge1xuICAgICAgICB0aGlzLnNsZXB0QXQgPSB0b2RheSgpXG5cbiAgICAgICAgY29uc3QgY2hhcmFjdGVyID0gZmluZEZpcnN0T2JqZWN0KENoYXJhY3RlcilcbiAgICAgICAgY2hhcmFjdGVyLmNoYW5nZUhwQnkoaHApXG4gICAgICAgIGNoYXJhY3Rlci5jaGFuZ2VFcEJ5KGVwKVxuICAgICAgICBjaGFyYWN0ZXIuY2hhbmdlWHBCeSh4cEdhaW4pXG5cbiAgICAgICAgZmluZEFsbE9iamVjdHMoU2xlZXBDb250cm9sKVxuICAgICAgICAgICAgLmZvckVhY2goY29udHJvbCA9PiBjb250cm9sLnVwZGF0ZUFmdGVyTG9hZCgpKVxuICAgIH1cblxufVxuXG5yZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZShTbGVlcClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2xlZXAvU2xlZXAuanMiLCJpbXBvcnQge3JlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlLCBVc2VySW50ZXJmYWNlQXdhcmV9IGZyb20gJy4uL1VzZXJJbnRlcmZhY2VBd2FyZSdcbmltcG9ydCB7ZmluZEZpcnN0T2JqZWN0LCByZXBsYWNlT2JqZWN0fSBmcm9tICcuLi9PYmplY3RzJ1xuaW1wb3J0IHtDaGFyYWN0ZXJ9IGZyb20gJy4uL2NoYXJhY3Rlci9DaGFyYWN0ZXInXG5pbXBvcnQge2NvbG9yZWROdW1iZXIsIHRvZGF5fSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtuZXh0WHBDb21ibywgeHBDb21ib1ByZXNlbnRhdGlvbn0gZnJvbSAnLi4veHBDb21ibydcbmltcG9ydCB7Y29udmVydFJhd1RvfSBmcm9tICcuLi9NeVdvcmsnXG5cbmV4cG9ydCBjbGFzcyBUYXNrIGV4dGVuZHMgVXNlckludGVyZmFjZUF3YXJlIHtcblxuICAgIHVzZXJJbnRlcmZhY2UgPSBbXG4gICAgICAgICduYW1lJywgJ2hwJywgJ2VwJyxcbiAgICAgICAgJ3hwR2FpbicsICd4cENvbWJvJyxcbiAgICAgICAgJ2NvbXBsZXRlJyxcbiAgICAgICAgJ2NoYW5nZScsICdtYWtlU2tpbGxlZCcsXG4gICAgICAgICdkZXN0cm95JyxcbiAgICBdXG4gICAgbmFtZVxuXG4gICAgX2hwID0gMFxuICAgIGdldCBocCgpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yZWROdW1iZXIodGhpcy5faHApXG4gICAgfVxuXG4gICAgX2VwID0gMFxuICAgIGdldCBlcCgpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yZWROdW1iZXIodGhpcy5fZXApXG4gICAgfVxuXG4gICAgX3hwR2FpbiA9IDBcbiAgICBnZXQgeHBHYWluKCkge1xuICAgICAgICByZXR1cm4gY29sb3JlZE51bWJlcih0aGlzLl94cEdhaW4pXG4gICAgfVxuXG4gICAgX3hwQ29tYm8gPSAxXG4gICAgZ2V0IHhwQ29tYm8oKSB7XG4gICAgICAgIHJldHVybiB4cENvbWJvUHJlc2VudGF0aW9uKHRoaXMuX3hwQ29tYm8pXG4gICAgfVxuXG4gICAgZ2V0IGNvbXBsZXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvU3RyaW5nOiAoKSA9PiAnZG9uZScsXG4gICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGhwLCBlcCwgeHBHYWluKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZSB8fCAnJ1xuICAgICAgICB0aGlzLl9ocCA9IGhwIHx8IDBcbiAgICAgICAgdGhpcy5fZXAgPSBlcCB8fCAwXG4gICAgICAgIHRoaXMuX3hwR2FpbiA9IHhwR2FpbiB8fCAwXG5cbiAgICAgICAgdGhpcy51bmRvLmRhbmdlciA9IHRydWVcbiAgICAgICAgdGhpcy51bmRvLnNldHRpbmcgPSB0cnVlXG4gICAgICAgIHRoaXMuY2hhbmdlLnNldHRpbmcgPSB0cnVlXG4gICAgICAgIHRoaXMubWFrZVNraWxsZWQuc2V0dGluZyA9IHRydWVcbiAgICB9XG5cbiAgICBjaGFuZ2UobmFtZSwgaHAsIGVwLCB4cEdhaW4pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLl9ocCA9IGhwXG4gICAgICAgIHRoaXMuX2VwID0gZXBcbiAgICAgICAgdGhpcy5feHBHYWluID0geHBHYWluXG4gICAgfVxuXG4gICAgWydjaGFuZ2UuZGVmYXVsdEFyZ3MnXSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgIGhwOiB0aGlzLl9ocCxcbiAgICAgICAgICAgIGVwOiB0aGlzLl9lcCxcbiAgICAgICAgICAgIHhwR2FpbjogdGhpcy5feHBHYWluLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIGNvbnN0IGNoYXJhY3RlciA9IGZpbmRGaXJzdE9iamVjdChDaGFyYWN0ZXIpXG5cbiAgICAgICAgaWYgKGNoYXJhY3Rlcikge1xuICAgICAgICAgICAgY2hhcmFjdGVyLmNoYW5nZUhwQnkodGhpcy5ocClcbiAgICAgICAgICAgIGNoYXJhY3Rlci5jaGFuZ2VFcEJ5KHRoaXMuZXApXG5cbiAgICAgICAgICAgIGxldCB4cEFtb3VudCA9IHRoaXMueHBHYWluICogdGhpcy5feHBDb21ib1xuICAgICAgICAgICAgY2hhcmFjdGVyLmNoYW5nZVhwQnkoeHBBbW91bnQpXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVhwQmVmb3JlTWFya2luZ0FzQ29tcGxldGUoeHBBbW91bnQpXG5cbiAgICAgICAgICAgIHRoaXMubWFya0FzQ29tcGxldGVkKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVhwQmVmb3JlTWFya2luZ0FzQ29tcGxldGUoYW1vdW50KSB7XG4gICAgICAgIHRoaXMuX3hwQ29tYm8gPSBuZXh0WHBDb21ibyh0aGlzLmNvbXBsZXRlZEF0LCB0aGlzLl94cENvbWJvKVxuICAgIH1cblxuICAgIG1hcmtBc0NvbXBsZXRlZCgpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWRBdCA9IHRvZGF5KClcbiAgICAgICAgdGhpcy5yZXBsYWNlQ29tcGxldGVXaXRoQ29tcGxldGVkKClcbiAgICB9XG5cbiAgICByZXBsYWNlQ29tcGxldGVXaXRoQ29tcGxldGVkKCkge1xuICAgICAgICBsZXQgaW5kZXhPZkNvbXBsZXRlID0gdGhpcy51c2VySW50ZXJmYWNlLmluZGV4T2YoJ2NvbXBsZXRlJylcbiAgICAgICAgdGhpcy51c2VySW50ZXJmYWNlLnNwbGljZShpbmRleE9mQ29tcGxldGUsIDEsICdjb21wbGV0ZWQnLCAnY29tcGxldGVkQXQnLCAndW5kbycpXG4gICAgfVxuXG4gICAgcmVwbGFjZUNvbXBsZXRlZEF0V2l0aENvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLnJlcGxhY2VDb21wbGV0ZWRXaXRoQ29tcGxldGUoKVxuICAgICAgICB0aGlzLnJlbW92ZVVzZXJJbnRlcmZhY2UoJ2NvbXBsZXRlZEF0JylcbiAgICAgICAgdGhpcy5yZW1vdmVVc2VySW50ZXJmYWNlKCd1bmRvJylcbiAgICB9XG5cbiAgICByZW1vdmVVc2VySW50ZXJmYWNlKHMpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy51c2VySW50ZXJmYWNlLmluZGV4T2YocylcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHRoaXMudXNlckludGVyZmFjZS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuXG4gICAgcmVwbGFjZUNvbXBsZXRlZFdpdGhDb21wbGV0ZSgpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy51c2VySW50ZXJmYWNlLmluZGV4T2YoJ2NvbXBsZXRlZCcpXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB0aGlzLnVzZXJJbnRlcmZhY2Uuc3BsaWNlKGluZGV4LCAxLCAnY29tcGxldGUnKVxuICAgIH1cblxuICAgIHVwZGF0ZUFmdGVyTG9hZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29tcGxldGVkQXQgPT09IHRvZGF5KCkpIHtcbiAgICAgICAgICAgIHRoaXMucmVwbGFjZUNvbXBsZXRlV2l0aENvbXBsZXRlZCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmRvKHJlYXNvbikge1xuICAgICAgICBpZiAocmVhc29uLmxlbmd0aCA8IDEwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnWW91IG5lZWQgdG8gcHJvdmlkZSBhIGdvb2QgcmVhc29uIHRvIHVuZG8gdGhlIHRhc2snKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGFyYWN0ZXIgPSBmaW5kRmlyc3RPYmplY3QoQ2hhcmFjdGVyKVxuICAgICAgICBjaGFyYWN0ZXIuY2hhbmdlSHBCeSgtdGhpcy5ocClcbiAgICAgICAgY2hhcmFjdGVyLmNoYW5nZUVwQnkoLXRoaXMuZXApXG4gICAgICAgIHRoaXMudW5Db21wbGV0ZSgpXG4gICAgfVxuXG4gICAgdW5Db21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWRBdCA9ICcnXG4gICAgICAgIHRoaXMucmVwbGFjZUNvbXBsZXRlZEF0V2l0aENvbXBsZXRlKClcbiAgICB9XG5cbiAgICBtYWtlU2tpbGxlZCgpIHtcbiAgICAgICAgY29uc3Qgc2tpbGxlZFN1YmNsYXNzID0gVGFzay5zdWJjbGFzc2VzWydza2lsbGVkJ11cbiAgICAgICAgY29uc3Qgc2tpbGxlZFRhc2sgPSBjb252ZXJ0UmF3VG8odGhpcywgc2tpbGxlZFN1YmNsYXNzKVxuICAgICAgICByZXBsYWNlT2JqZWN0KHRoaXMsIHNraWxsZWRUYXNrKVxuICAgIH1cbn1cblxuVGFzay5zdWJjbGFzc2VzID0ge31cblxucmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUoVGFzaylcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGFza3MvVGFzay5qcyIsImltcG9ydCB7cmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUsIFVzZXJJbnRlcmZhY2VBd2FyZX0gZnJvbSAnLi9Vc2VySW50ZXJmYWNlQXdhcmUnXG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXIgZXh0ZW5kcyBVc2VySW50ZXJmYWNlQXdhcmUge1xuXG4gICAgdXNlckludGVyZmFjZSA9IFsnc2VhcmNoJ11cblxuICAgIGZpbHRlclZhbHVlID0gJydcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuc2VhcmNoLmF1dG8gPSB0cnVlXG4gICAgfVxuXG4gICAgc2VhcmNoKGZpbHRlcikge1xuICAgICAgICB0aGlzLmZpbHRlclZhbHVlID0gZmlsdGVyXG4gICAgfVxuXG59XG5cbnJlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlKEZpbHRlcilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRmlsdGVyLmpzIiwiaW1wb3J0IHtyZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZSwgVXNlckludGVyZmFjZUF3YXJlfSBmcm9tICcuLi9Vc2VySW50ZXJmYWNlQXdhcmUnXG5pbXBvcnQge2NvbG9yZWROdW1iZXIsIHRvZGF5fSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtmaW5kRmlyc3RPYmplY3R9IGZyb20gJy4uL09iamVjdHMnXG5pbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSAnLi4vY2hhcmFjdGVyL0NoYXJhY3RlcidcblxuZXhwb3J0IGNsYXNzIERpc2Vhc2UgZXh0ZW5kcyBVc2VySW50ZXJmYWNlQXdhcmUge1xuXG4gICAgdXNlckludGVyZmFjZSA9IFsnbmFtZScsICdocCcsICdlcCcsICdhZmZlY3RlZEF0JywgJ2Rlc3Ryb3knXVxuICAgIG5hbWVcbiAgICBhZmZlY3RlZEF0XG5cbiAgICBfaHBcbiAgICBnZXQgaHAoKSB7XG4gICAgICAgIHJldHVybiBjb2xvcmVkTnVtYmVyKHRoaXMuX2hwKVxuICAgIH1cblxuICAgIF9lcFxuICAgIGdldCBlcCgpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yZWROdW1iZXIodGhpcy5fZXApXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IobmFtZSwgaHAsIGVwKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLl9ocCA9IGhwXG4gICAgICAgIHRoaXMuX2VwID0gZXBcbiAgICAgICAgdGhpcy5hZmZlY3RlZEF0ID0gJydcbiAgICB9XG5cbiAgICB1cGRhdGVBZnRlckxvYWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmFmZmVjdGVkQXQgIT09IHRvZGF5KCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWZmZWN0Q2hhcmFjdGVyKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFmZmVjdENoYXJhY3RlcigpIHtcbiAgICAgICAgdGhpcy5hZmZlY3RlZEF0ID0gdG9kYXkoKVxuXG4gICAgICAgIGNvbnN0IGNoYXJhY3RlciA9IGZpbmRGaXJzdE9iamVjdChDaGFyYWN0ZXIpXG4gICAgICAgIGNoYXJhY3Rlci5jaGFuZ2VIcEJ5KHRoaXMuaHApXG4gICAgICAgIGNoYXJhY3Rlci5jaGFuZ2VFcEJ5KHRoaXMuZXApXG4gICAgfVxufVxuXG5yZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZShEaXNlYXNlKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaXNlYXNlcy9EaXNlYXNlLmpzIiwiaW1wb3J0IHtyZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZSwgVXNlckludGVyZmFjZUF3YXJlfSBmcm9tICcuLi9Vc2VySW50ZXJmYWNlQXdhcmUnXG5pbXBvcnQge0Rpc2Vhc2V9IGZyb20gJy4vRGlzZWFzZSdcblxuZXhwb3J0IGNsYXNzIE5ld0Rpc2Vhc2UgZXh0ZW5kcyBVc2VySW50ZXJmYWNlQXdhcmUge1xuXG4gICAgdXNlckludGVyZmFjZSA9IFsnY3JlYXRlJ11cbiAgICBzZXR0aW5nID0gdHJ1ZVxuICAgIGVzc2VudGlhbCA9IDUwXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmNyZWF0ZS5zdWNjZXNzID0gdHJ1ZVxuICAgIH1cblxuICAgIGNyZWF0ZShuYW1lLCBocCwgZXApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEaXNlYXNlKG5hbWUsIGhwLCBlcClcbiAgICB9XG5cbn1cblxucmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUoTmV3RGlzZWFzZSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlzZWFzZXMvTmV3RGlzZWFzZS5qcyIsImltcG9ydCB7ZmlsdGVyVG9vbCwgcmVuZGVyQWxsLCByZW5kZXJUb29sfSBmcm9tICcuL1JlbmRlcmluZydcbmltcG9ydCB7TXlXb3JrfSBmcm9tICcuL015V29yaydcbmltcG9ydCB7bWFrZVN1cmVJbml0aWFsT2JqZWN0c0FyZVByZXNlbnR9IGZyb20gJy4vT2JqZWN0cydcblxubmV3IE15V29yaygpLnJlbG9hZCgpXG5tYWtlU3VyZUluaXRpYWxPYmplY3RzQXJlUHJlc2VudCgpXG5yZW5kZXJUb29sKGZpbHRlclRvb2wpXG5yZW5kZXJBbGwoKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiaW1wb3J0IHtyZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZSwgVXNlckludGVyZmFjZUF3YXJlfSBmcm9tICcuLi9Vc2VySW50ZXJmYWNlQXdhcmUnXG5pbXBvcnQge2NvbG9yZWROdW1iZXIsIHRvZGF5fSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtmaW5kRmlyc3RPYmplY3R9IGZyb20gJy4uL09iamVjdHMnXG5pbXBvcnQge1NsZWVwfSBmcm9tICcuL1NsZWVwJ1xuaW1wb3J0IHtuZXh0WHBDb21ibywgeHBDb21ib1ByZXNlbnRhdGlvbn0gZnJvbSAnLi4veHBDb21ibydcblxuZXhwb3J0IGNsYXNzIFNsZWVwQ29udHJvbCBleHRlbmRzIFVzZXJJbnRlcmZhY2VBd2FyZSB7XG5cbiAgICBuYW1lID0gJydcbiAgICBtZXNzYWdlID0gJ2FscmVhZHkgc2xlcHQnXG5cbiAgICBfaHAgPSAwXG4gICAgZ2V0IGhwKCkge1xuICAgICAgICByZXR1cm4gY29sb3JlZE51bWJlcih0aGlzLl9ocClcbiAgICB9XG5cbiAgICBfZXAgPSAwXG4gICAgZ2V0IGVwKCkge1xuICAgICAgICByZXR1cm4gY29sb3JlZE51bWJlcih0aGlzLl9lcClcbiAgICB9XG5cbiAgICBfeHBHYWluID0gMFxuICAgIGdldCB4cEdhaW4oKSB7XG4gICAgICAgIHJldHVybiBjb2xvcmVkTnVtYmVyKHRoaXMuX3hwR2FpbilcbiAgICB9XG5cbiAgICBfeHBDb21ibyA9IDFcbiAgICBnZXQgeHBDb21ibygpIHtcbiAgICAgICAgcmV0dXJuIHhwQ29tYm9QcmVzZW50YXRpb24odGhpcy5feHBDb21ibylcbiAgICB9XG5cbiAgICBzbGVwdEF0ID0gJydcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGhwLCBlcCwgeHBHYWluKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZSB8fCAnJ1xuICAgICAgICB0aGlzLl9ocCA9IGhwIHx8IDBcbiAgICAgICAgdGhpcy5fZXAgPSBlcCB8fCAwXG4gICAgICAgIHRoaXMuX3hwR2FpbiA9IHhwR2FpbiB8fCAwXG5cbiAgICAgICAgdGhpcy5jaGFuZ2Uuc2V0dGluZyA9IHRydWVcblxuICAgICAgICB0aGlzLnVwZGF0ZUFmdGVyTG9hZCgpXG4gICAgfVxuXG4gICAgdXBkYXRlQWZ0ZXJMb2FkKCkge1xuICAgICAgICBjb25zdCBzbGVlcCA9IGZpbmRGaXJzdE9iamVjdChTbGVlcClcblxuICAgICAgICB0aGlzW3RoaXMubmFtZV0gPSAoKSA9PiB7XG4gICAgICAgICAgICBzbGVlcC5hZmZlY3RDaGFyYWN0ZXIodGhpcy5ocCwgdGhpcy5lcCwgdGhpcy54cEdhaW4gKiB0aGlzLl94cENvbWJvKVxuICAgICAgICAgICAgdGhpcy5feHBDb21ibyA9IG5leHRYcENvbWJvKHRoaXMuc2xlcHRBdCwgdGhpcy5feHBDb21ibylcbiAgICAgICAgICAgIHRoaXMuc2xlcHRBdCA9IHRvZGF5KClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzbGVlcC5zbGVwdEF0ICE9PSB0b2RheSgpKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJJbnRlcmZhY2UgPSB0aGlzLmNvbW1vblVzZXJJbnRlcmZhY2VXaXRoKHRoaXMubmFtZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXNlckludGVyZmFjZSA9IHRoaXMuY29tbW9uVXNlckludGVyZmFjZVdpdGgoJ21lc3NhZ2UnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlKGhwLCBlcCwgeHBHYWluKSB7XG4gICAgICAgIHRoaXMuX2hwID0gaHBcbiAgICAgICAgdGhpcy5fZXAgPSBlcFxuICAgICAgICB0aGlzLl94cEdhaW4gPSB4cEdhaW5cbiAgICB9XG5cbiAgICBbJ2NoYW5nZS5kZWZhdWx0QXJncyddKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHA6IHRoaXMuX2hwLFxuICAgICAgICAgICAgZXA6IHRoaXMuX2VwLFxuICAgICAgICAgICAgeHBHYWluOiB0aGlzLl94cEdhaW4sXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21tb25Vc2VySW50ZXJmYWNlV2l0aCguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiBbJ2hwJywgJ2VwJywgJ3hwR2FpbicsICd4cENvbWJvJywgLi4uYXJncywgJ2NoYW5nZScsICdkZXN0cm95J11cbiAgICB9XG5cbn1cblxucmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUoU2xlZXBDb250cm9sKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zbGVlcC9TbGVlcENvbnRyb2wuanMiLCJpbXBvcnQge3JlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlLCBVc2VySW50ZXJmYWNlQXdhcmV9IGZyb20gJy4uL1VzZXJJbnRlcmZhY2VBd2FyZSdcbmltcG9ydCB7VGFza30gZnJvbSAnLi9UYXNrJ1xuaW1wb3J0IHtTa2lsbGVkVGFza30gZnJvbSAnLi9Ta2lsbGVkVGFzaydcblxuZXhwb3J0IGNsYXNzIE5ld1Rhc2sgZXh0ZW5kcyBVc2VySW50ZXJmYWNlQXdhcmUge1xuXG4gICAgdXNlckludGVyZmFjZSA9IFsnY3JlYXRlJ11cbiAgICBzZXR0aW5nID0gdHJ1ZVxuICAgIGVzc2VudGlhbCA9IDUwXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmNyZWF0ZS5zdWNjZXNzID0gdHJ1ZVxuICAgIH1cblxuICAgIGNyZWF0ZShuYW1lLCBocCwgZXAsIHhwR2FpbiwgaXNTa2lsbGVkKSB7XG4gICAgICAgIGlmIChpc1NraWxsZWQgPT09ICd0cnVlJyB8fCBpc1NraWxsZWQgPT09ICd5ZXMnKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNraWxsZWRUYXNrKG5hbWUsIGhwLCBlcCwgeHBHYWluKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBUYXNrKG5hbWUsIGhwLCBlcCwgeHBHYWluKVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbnJlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlKE5ld1Rhc2spXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Rhc2tzL05ld1Rhc2suanMiLCJpbXBvcnQge3JlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlfSBmcm9tICcuLi9Vc2VySW50ZXJmYWNlQXdhcmUnXG5pbXBvcnQge1Rhc2t9IGZyb20gJy4vVGFzaydcbmltcG9ydCB7Y2hhbmdlWHBCeSwgaW1wcm92ZWRBdHRyaWJ1dGUsIHhwUHJlc2VudGF0aW9ufSBmcm9tICcuLi94cENvbWJvJ1xuaW1wb3J0IHtjb2xvcmVkTnVtYmVyfSBmcm9tICcuLi91dGlsJ1xuXG5leHBvcnQgY2xhc3MgU2tpbGxlZFRhc2sgZXh0ZW5kcyBUYXNrIHtcblxuICAgIGx2bCA9IDFcblxuICAgIGdldCBocCgpIHtcbiAgICAgICAgY29uc3QgaHAgPSBpbXByb3ZlZEF0dHJpYnV0ZSh0aGlzLl9ocCwgdGhpcy5sdmwpXG4gICAgICAgIHJldHVybiBjb2xvcmVkTnVtYmVyKGhwKVxuICAgIH1cblxuICAgIGdldCBlcCgpIHtcbiAgICAgICAgY29uc3QgZXAgPSBpbXByb3ZlZEF0dHJpYnV0ZSh0aGlzLl9lcCwgdGhpcy5sdmwpXG4gICAgICAgIHJldHVybiBjb2xvcmVkTnVtYmVyKGVwKVxuICAgIH1cblxuICAgIGdldCB4cEdhaW4oKSB7XG4gICAgICAgIGNvbnN0IHhwR2FpbiA9IGltcHJvdmVkQXR0cmlidXRlKHRoaXMuX3hwR2FpbiwgdGhpcy5sdmwpXG4gICAgICAgIHJldHVybiBjb2xvcmVkTnVtYmVyKHhwR2FpbilcbiAgICB9XG5cbiAgICBfeHAgPSAwXG4gICAgX21heFhwID0gMjVcbiAgICB4cE1vZGlmaWVyID0gMS4yXG5cbiAgICBnZXQgeHAoKSB7XG4gICAgICAgIHJldHVybiB4cFByZXNlbnRhdGlvbih0aGlzLl94cCwgdGhpcy5fbWF4WHApXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IobmFtZSwgaHAsIGVwLCB4cEdhaW4pIHtcbiAgICAgICAgc3VwZXIobmFtZSwgaHAsIGVwLCB4cEdhaW4pXG4gICAgICAgIHRoaXMudXNlckludGVyZmFjZS5zcGxpY2UoJ25hbWUnLCAwLCAnbHZsJywgJ3hwJylcbiAgICB9XG5cbiAgICB1cGRhdGVYcEJlZm9yZU1hcmtpbmdBc0NvbXBsZXRlKGFtb3VudCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjaGFuZ2VYcEJ5KHRoaXMuX3hwLCBhbW91bnQsIHRoaXMuX21heFhwLCB0aGlzLnhwTW9kaWZpZXIpXG4gICAgICAgIHRoaXMuX3hwID0gcmVzdWx0LnhwXG4gICAgICAgIHRoaXMuX21heFhwID0gcmVzdWx0Lm1heFhwXG4gICAgICAgIHRoaXMubHZsICs9IHJlc3VsdC5sdmxJbmNyZWFzZVxuXG4gICAgICAgIHN1cGVyLnVwZGF0ZVhwQmVmb3JlTWFya2luZ0FzQ29tcGxldGUoYW1vdW50KVxuICAgIH1cblxufVxuXG5UYXNrLnN1YmNsYXNzZXNbJ3NraWxsZWQnXSA9IFNraWxsZWRUYXNrXG5cbnJlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlKFNraWxsZWRUYXNrKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90YXNrcy9Ta2lsbGVkVGFzay5qcyIsImltcG9ydCB7cmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUsIFVzZXJJbnRlcmZhY2VBd2FyZX0gZnJvbSAnLi4vVXNlckludGVyZmFjZUF3YXJlJ1xuaW1wb3J0IHtjaGFuZ2VYcEJ5LCB4cFByZXNlbnRhdGlvbn0gZnJvbSAnLi4veHBDb21ibydcbmltcG9ydCB7UmVwdXRhdGlvblRhc2t9IGZyb20gJy4uL3Rhc2tzL1JlcHV0YXRpb25UYXNrJ1xuXG5leHBvcnQgY2xhc3MgUmVwdXRhdGlvbiBleHRlbmRzIFVzZXJJbnRlcmZhY2VBd2FyZSB7XG5cbiAgICB1c2VySW50ZXJmYWNlID0gWydsdmwnLCAncmVwdXRhdGlvbicsICdjcmVhdGVSZXB1dGF0aW9uVGFzayddXG5cbiAgICBlc3NlbnRpYWwgPSA0MFxuXG4gICAgbHZsID0gMFxuXG4gICAgX3JlcHV0YXRpb24gPSAwXG4gICAgX21heFJlcHV0YXRpb24gPSAxMFxuICAgIHJlcHV0YXRpb25Nb2RpZmllciA9IDEuMlxuXG4gICAgZ2V0IHJlcHV0YXRpb24oKSB7XG4gICAgICAgIHJldHVybiB4cFByZXNlbnRhdGlvbih0aGlzLl9yZXB1dGF0aW9uLCB0aGlzLl9tYXhSZXB1dGF0aW9uKVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuY3JlYXRlUmVwdXRhdGlvblRhc2suc2V0dGluZyA9IHRydWVcbiAgICAgICAgdGhpcy5jcmVhdGVSZXB1dGF0aW9uVGFzay5zdWNjZXNzID0gdHJ1ZVxuICAgIH1cblxuICAgIGNoYW5nZVJlcHV0YXRpb25CeShhbW91bnQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY2hhbmdlWHBCeSh0aGlzLl9yZXB1dGF0aW9uLCBhbW91bnQsIHRoaXMuX21heFJlcHV0YXRpb24sIHRoaXMucmVwdXRhdGlvbk1vZGlmaWVyKVxuICAgICAgICB0aGlzLl9yZXB1dGF0aW9uID0gcmVzdWx0LnhwXG4gICAgICAgIHRoaXMuX21heFJlcHV0YXRpb24gPSByZXN1bHQubWF4WHBcbiAgICAgICAgdGhpcy5sdmwgKz0gcmVzdWx0Lmx2bEluY3JlYXNlXG4gICAgfVxuXG4gICAgY3JlYXRlUmVwdXRhdGlvblRhc2sobmFtZSwgaHAsIGVwLCB4cEdhaW4sIHJlcHV0YXRpb24pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXB1dGF0aW9uVGFzayhuYW1lLCBocCwgZXAsIHhwR2FpbiwgcmVwdXRhdGlvbilcbiAgICB9XG5cbn1cblxucmVnaXN0ZXJVc2VySW50ZXJmYWNlQXdhcmUoUmVwdXRhdGlvbilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2hhcmFjdGVyL1JlcHV0YXRpb24uanMiLCJpbXBvcnQge3JlZ2lzdGVyVXNlckludGVyZmFjZUF3YXJlfSBmcm9tICcuLi9Vc2VySW50ZXJmYWNlQXdhcmUnXG5pbXBvcnQge1Rhc2t9IGZyb20gJy4vVGFzaydcbmltcG9ydCB7aW1wcm92ZWRBdHRyaWJ1dGV9IGZyb20gJy4uL3hwQ29tYm8nXG5pbXBvcnQge2NvbG9yZWROdW1iZXJ9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQge1NraWxsZWRUYXNrfSBmcm9tICcuL1NraWxsZWRUYXNrJ1xuaW1wb3J0IHtmaW5kRmlyc3RPYmplY3R9IGZyb20gJy4uL09iamVjdHMnXG5pbXBvcnQge1JlcHV0YXRpb259IGZyb20gJy4uL2NoYXJhY3Rlci9SZXB1dGF0aW9uJ1xuXG5leHBvcnQgY2xhc3MgUmVwdXRhdGlvblRhc2sgZXh0ZW5kcyBTa2lsbGVkVGFzayB7XG5cbiAgICBfcmVwdXRhdGlvbiA9IDBcbiAgICBnZXQgcmVwdXRhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGltcHJvdmVkQXR0cmlidXRlKHRoaXMuX3JlcHV0YXRpb24sIHRoaXMubHZsKVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGhwLCBlcCwgeHBHYWluLCByZXB1dGF0aW9uKSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIGhwLCBlcCwgeHBHYWluKVxuICAgICAgICB0aGlzLl9yZXB1dGF0aW9uID0gcmVwdXRhdGlvblxuICAgICAgICB0aGlzLnVzZXJJbnRlcmZhY2Uuc3BsaWNlKCduYW1lJywgMCwgJ3JlcHV0YXRpb24nKVxuICAgIH1cblxuICAgIHVwZGF0ZVhwQmVmb3JlTWFya2luZ0FzQ29tcGxldGUoYW1vdW50KSB7XG4gICAgICAgIGNvbnN0IHJlcHV0YXRpb24gPSBmaW5kRmlyc3RPYmplY3QoUmVwdXRhdGlvbilcbiAgICAgICAgcmVwdXRhdGlvbi5jaGFuZ2VSZXB1dGF0aW9uQnkodGhpcy5yZXB1dGF0aW9uICogdGhpcy5feHBDb21ibylcblxuICAgICAgICBzdXBlci51cGRhdGVYcEJlZm9yZU1hcmtpbmdBc0NvbXBsZXRlKGFtb3VudClcbiAgICB9XG5cbn1cblxuVGFzay5zdWJjbGFzc2VzWydyZXB1dGF0aW9uJ10gPSBSZXB1dGF0aW9uVGFza1xuXG5yZWdpc3RlclVzZXJJbnRlcmZhY2VBd2FyZShSZXB1dGF0aW9uVGFzaylcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGFza3MvUmVwdXRhdGlvblRhc2suanMiXSwic291cmNlUm9vdCI6IiJ9