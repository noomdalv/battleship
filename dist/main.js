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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/*! exports provided: gameBoardFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameBoardFactory\", function() { return gameBoardFactory; });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\r\n\r\n\r\nconst gameBoardFactory = () => {\r\n\r\n\t// board creation\r\n\tconst body = {};\r\n\r\n\tfor (let i = 1; i <= 10; i++) {\r\n\t\tbody[i] = {};\r\n\t\tfor (let j = 1; j <= 10; j++) {\r\n\t\t\tbody[i][j] = 'empty';\r\n\t\t}\r\n\t}\r\n\r\n\tlet attacksCounter = 0;\r\n\r\n\t//position check\r\n\tconst checkPosition = (row, col) => {\r\n    if (row === 0 || row > 10 || col === 0 || col > 10) {\r\n      return undefined;\r\n    }\r\n\t\treturn body[row][col];\r\n\t}\r\n\r\n\t//ship storage\r\n\tconst shipStorage = {\r\n\t\t1: Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"shipFactory\"])(1),\r\n\t\t2: Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"shipFactory\"])(2),\r\n\t\t3: Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"shipFactory\"])(3),\r\n\t\t4: Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"shipFactory\"])(4),\r\n\t\t5: Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"shipFactory\"])(5),\r\n\t}\r\n\r\n\r\n\tconst spaceAvailable = (ship, x, y) => {\r\n\t\tconst shipSize = Object.keys(ship.body).length;\r\n\r\n    if (((y - 1 + shipSize) > 10 && ship.direction === \"horizontal\") ||\r\n        ((x - 1 + shipSize) > 10 && ship.direction === \"vertical\")) {\r\n          return false;\r\n    }\r\n\r\n    if (checkPosition(x, y) === 'empty' && ship.direction === \"horizontal\") {\r\n      for (let i = y-1; i <= (y + shipSize); i++) {\r\n\t\t\t\tif (checkPosition(x, i) !== 'empty' && checkPosition(x, i) !== undefined) {\r\n\t\t\t\t\treturn false;\r\n        }\r\n        for (let j = x -1; j <= (x + 1); j+= 2) {\r\n          if (checkPosition(j,i) !== 'empty' && checkPosition(j, i) !== undefined) {\r\n            return false;\r\n          }\r\n        }\r\n\t\t\t}\r\n      return true;\r\n\r\n\t\t} else if (checkPosition(x, y) === 'empty' && ship.direction === \"vertical\") {\r\n\r\n      for (let i = x-1; i <= (x + shipSize); i++) {\r\n\t\t\t\tif (checkPosition(i, y) !== 'empty' && checkPosition(i, y) !== undefined) {\r\n\t\t\t\t\treturn false;\r\n        }\r\n        for (let j = y -1; j <= (y + 1); j+= 2) {\r\n          if (checkPosition(i,j) !== 'empty' && checkPosition(i, j) !== undefined) {\r\n            return false;\r\n          }\r\n        }\r\n      }\r\n\t\t\treturn true;\r\n\t\t}\r\n\t}\r\n\r\n\r\n\t//ship placement\r\n\tconst placeShip = (ship, x, y) => {\r\n\t\tconst shipSize = Object.keys(ship.body).length;\r\n    // evaluate the length of ship and direction\r\n\t\tlet bodyCounter = 1;\r\n\t\tif (spaceAvailable(ship, x, y)) {\r\n\t\t\tif (ship.direction === \"horizontal\") {\r\n\t\t\t\tif (checkPosition(x,y-1) !== undefined) {body[x][y-1] = 'filled'}\r\n        \t\tif (checkPosition(x,y+shipSize) !== undefined) {body[x][y+shipSize] = 'filled'}\r\n\r\n\t\t\t\tfor (let i = y; i < (y + shipSize); i++) {\r\n\t\t\t\t\tbody[x][i] = ship.body[bodyCounter];\r\n\t\t\t\t\tif (checkPosition(x-1,i) !== undefined) {body[x-1][i] = 'filled'}\r\n          \t\t\tif (checkPosition(x+1,i) !== undefined) {body[x+1][i] = 'filled'}\r\n\t\t\t\t\tbodyCounter++;\r\n\t\t\t\t}\r\n\t\t\t} else {\r\n\t\t\t\tif (checkPosition(x-1,y) !== undefined) {body[x-1][y] = 'filled'}\r\n        \t\tif (checkPosition(x+shipSize,y) !== undefined) {body[x+shipSize][y] = 'filled'}\r\n\r\n\t\t\t\tfor (let i = x; i < (x + shipSize); i++) {\r\n\t\t\t\t\tbody[i][y] = ship.body[bodyCounter];\r\n\t\t\t\t\tif (checkPosition(i,y+1) !== undefined) {body[i][y+1] = 'filled'}\r\n          \t\t\tif (checkPosition(i,y-1) !== undefined) {body[i][y-1] = 'filled'}\r\n\t\t\t\t\tbodyCounter++;\r\n\t\t\t\t}\r\n\t  \t\t}\r\n\t  \t\treturn true;\r\n\t\t} else {\r\n\t\t\treturn false;\r\n\t\t}\r\n\t}\r\n\r\n\tconst randomPlacement = () => {\r\n\r\n\t\tfor (let i = 5; i >= 1; i--) {\r\n\t\t\tlet placed = false\r\n\t\t\tif (Math.floor(Math.random() * Math.floor(2)) === 0) {\r\n\t\t\t\tshipStorage[i].switchDirection()\r\n\t\t\t}\r\n\r\n\t\t\twhile (!placed) {\r\n\t\t\t\tlet x = Math.floor(Math.random() * Math.floor(10)) + 1;\r\n\t\t\t\tlet y = Math.floor(Math.random() * Math.floor(10)) + 1;\r\n\t\t\t\tplaced = placeShip(shipStorage[i], x, y);\r\n\t\t\t}\r\n\t\t};\r\n\t\treturn true\r\n\t};\r\n\r\n\tconst receiveAttack = (x,y) => {\r\n\t\tif (body[x][y] === 'empty' || body[x][y] === 'filled' || typeof(body[x][y]) === 'object' && body[x][y].status === true) {\r\n\r\n\t\t\t// change value to false if there's a ship\r\n\r\n\t\t\tif (typeof(body[x][y]) === 'string') {\r\n\t\t\t\tbody[x][y] = 'miss';\r\n\t\t\t\treturn 'miss';\r\n\t\t\t} else {\r\n\t\t\t\tbody[x][y].status = false;\r\n\t\t\t\tshipStorage[body[x][y].shipLength].hit(body[x][y].bodyIndex);\r\n\t\t\t\tattacksCounter++;\r\n\t\t\t\treturn 'hit';\r\n\t\t\t};\r\n\r\n\t\t} else {\r\n\t\t\t// alert('You can\\'t hit this spot again.');\r\n\t\t\treturn false;\r\n\t\t}\r\n\t};\r\n\r\n\tconst isSunkAll = () => {\r\n\t\tfor (let i = 1; i <= 5; i++) {\r\n\t\t\tif (!shipStorage[i].isSunk()) {\r\n\t\t\t\treturn false\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn true\r\n\t}\r\n\r\n\tconst areShipsPlaced = () => {\r\n\t\tlet shipBodyCounter = 0\r\n\t\tfor (let i = 1; i <= 10; i++) {\r\n\t\t\tfor (let j = 1; j <= 10; j++) {\r\n\t\t\t\tif (typeof(body[i][j]) === 'object' && body[i][j].status) {\r\n\t\t\t\t\tshipBodyCounter++;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\tif (shipBodyCounter === 15) {\r\n\t\t\treturn true;\r\n\t\t} else {\r\n\t\t\treturn false;\r\n\t\t}\r\n\t}\r\n\r\n\treturn { body, placeShip, receiveAttack,\r\n\t\t\t randomPlacement, isSunkAll, areShipsPlaced, get attacksCounter() {return attacksCounter}, get shipStorage() {return shipStorage} }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\r\n\r\n\r\n// initialize players and gameboards\r\n\r\nconst playerGB = Object(_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"gameBoardFactory\"])();\r\nconst aiGB = Object(_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"gameBoardFactory\"])();\r\nconst player = Object(_player__WEBPACK_IMPORTED_MODULE_1__[\"playerFactory\"])();\r\nconst ai = Object(_player__WEBPACK_IMPORTED_MODULE_1__[\"aiFactory\"])();\r\nconst shipStorageDiv = document.getElementById('ship-storage-container');\r\n\r\n// randomly place ships on aiGB\r\n\r\naiGB.randomPlacement();\r\n\r\nconst render = () => {\r\n\tlet currentShip;\r\n\r\n\tconst renderShipStorage = () => {\r\n\t\tconst switchDirectionBtn = document.createElement('button');\r\n\t\tswitchDirectionBtn.innerHTML = \"H\";\r\n\t\tswitchDirectionBtn.classList = \"btn btn-primary float-right mt-2 mr-2\"\r\n\t\tshipStorageDiv.appendChild(switchDirectionBtn)\r\n\r\n\t\tfor (let i = 1; i <= 5; i++) {\r\n\t\t\tlet shipContainer = document.createElement('div');\r\n\t\t\tshipContainer.id = `ship-${i}`;\r\n\t\t\tshipContainer.classList = 'ship m-3 border border-primary';\r\n\t\t\tshipStorageDiv.appendChild(shipContainer);\r\n\r\n\t\t\tshipContainer.addEventListener(\"click\", () => {\r\n\t\t\t\tcurrentShip = playerGB.shipStorage[i];\r\n\t\t\t\tswitchDirectionBtn.innerHTML = \"H\";\t\t\t\t\r\n\t\t\t})\r\n\t\t}\r\n\r\n\r\n\t\tswitchDirectionBtn.addEventListener(\"click\", () => {\r\n\t\t\tif (currentShip) {\r\n\t\t\t\tif (switchDirectionBtn.innerHTML === \"H\") {\r\n\t\t\t\t\tswitchDirectionBtn.innerHTML = \"V\";\r\n\t\t\t\t\tcurrentShip.switchDirection();\r\n\t\t\t\t} else if (switchDirectionBtn.innerHTML === \"V\"){\r\n\t\t\t\t\tswitchDirectionBtn.innerHTML = \"H\";\r\n\t\t\t\t\tcurrentShip.switchDirection();\r\n\t\t\t\t}\r\n\t\t\t\tconsole.log(currentShip);\r\n\t\t\t\tconsole.log(currentShip.direction);\r\n\t\t\t} else {\r\n\t\t\t\talert(\"You need to select a ship first\");\r\n\t\t\t}\r\n\r\n\r\n\t\t})\r\n\t}\r\n\r\n\treturn { renderShipStorage, get currentShip() { return currentShip } };\r\n\r\n}\r\n\r\nlet initGame = render();\r\n\r\ninitGame.renderShipStorage();\r\n\r\n\r\n// render gameboard\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: playerFactory, aiFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playerFactory\", function() { return playerFactory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aiFactory\", function() { return aiFactory; });\nconst playerFactory = () => {\r\n    const attack = (x,y, aiGB) => {\r\n        aiGB.receiveAttack(x,y);\r\n    }\r\n\r\n    return { attack };\r\n\r\n}\r\n\r\nconst aiFactory = () => {\r\n    const attack = (playerGB) => {\r\n        let validAttack = false;\r\n        while (!validAttack) {\r\n            let x = Math.floor(Math.random() * Math.floor(10)) + 1;\r\n            let y = Math.floor(Math.random() * Math.floor(10)) + 1;\t\t\t\t\t\t\r\n            validAttack = playerGB.receiveAttack(x,y);\r\n        }\r\n        return validAttack;\r\n    }\r\n    return { attack };\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! exports provided: shipFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shipFactory\", function() { return shipFactory; });\nconst shipFactory = (length) => {\r\n\r\n  let body = {};\r\n\tlet direction = \"horizontal\";\r\n\r\n  for (let i = 1; i <= length; i++) {\r\n    body[i] = {status: true, bodyIndex: i, shipLength: length};\r\n  }\r\n\r\n  const hit = (index) => {\r\n    body[index].status = false;\r\n  };\r\n\r\n  const isSunk = () => {\r\n    for (let i = 1; i <= length; i++) {\r\n      if (body[i].status) {\r\n        return false;\r\n      }\r\n    }\r\n    return true;\r\n  };\r\n\r\n  const switchDirection = () => {\r\n    if (direction === 'horizontal') {\r\n      direction = 'vertical';\r\n    } else {\r\n      direction = 'horizontal';\r\n    }\r\n  };\r\n\r\n\r\n\r\n  return { body, hit, isSunk, get direction() { return direction},\r\n           switchDirection };\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ })

/******/ });