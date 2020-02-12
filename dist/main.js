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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameBoardFactory\", function() { return gameBoardFactory; });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\r\n\r\n\r\nconst gameBoardFactory = (ai = false) => {\r\n\r\n\t// board creation\r\n\tconst body = {};\r\n\r\n\tfor (let i = 1; i <= 10; i++) {\r\n\t\tbody[i] = {};\r\n\t\tfor (let j = 1; j <= 10; j++) {\r\n\t\t\tbody[i][j] = 'empty';\r\n\t\t}\r\n\t}\r\n\r\n\tlet attacksCounter = 0;\r\n\r\n\t//position check\r\n\tconst checkPosition = (row, col) => {\r\n    if (row === 0 || row > 10 || col === 0 || col > 10) {\r\n      return undefined;\r\n    }\r\n\t\treturn body[row][col];\r\n\t}\r\n\r\n\t//ship storage\r\n\tconst shipStorage = {\r\n\t\t1: Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"shipFactory\"])(1),\r\n\t\t2: Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"shipFactory\"])(2),\r\n\t\t3: Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"shipFactory\"])(3),\r\n\t\t4: Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"shipFactory\"])(4),\r\n\t\t5: Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"shipFactory\"])(5),\r\n\t}\r\n\r\n\r\n\tconst spaceAvailable = (ship, x, y) => {\r\n\t\tconst shipSize = Object.keys(ship.body).length;\r\n\r\n    if (((y - 1 + shipSize) > 10 && ship.direction === \"horizontal\") ||\r\n        ((x - 1 + shipSize) > 10 && ship.direction === \"vertical\")) {\r\n          return false;\r\n    }\r\n\r\n    if (typeof(checkPosition(x, y)) === 'string' && ship.direction === \"horizontal\") {\r\n      for (let i = y-1; i <= (y + shipSize); i++) {\r\n\t\t\t\tif (typeof(checkPosition(x, i)) !== 'string' && checkPosition(x, i) !== undefined) {\r\n\t\t\t\t\treturn false;\r\n        }\r\n        for (let j = x -1; j <= (x + 1); j+= 2) {\r\n          if (typeof(checkPosition(j, i)) !== 'string' && checkPosition(j, i) !== undefined) {\r\n            return false;\r\n          }\r\n        }\r\n\t\t\t}\r\n      return true;\r\n\r\n\t\t} else if (typeof(checkPosition(x, y)) === 'string' && ship.direction === \"vertical\") {\r\n\r\n      for (let i = x-1; i <= (x + shipSize); i++) {\r\n\t\t\t\tif (typeof(checkPosition(i, y)) !== 'string' && checkPosition(i, y) !== undefined) {\r\n\t\t\t\t\treturn false;\r\n        }\r\n        for (let j = y -1; j <= (y + 1); j+= 2) {\r\n          if (typeof(checkPosition(i,j)) !== 'string' && checkPosition(i, j) !== undefined) {\r\n            return false;\r\n          }\r\n        }\r\n      }\r\n\t\t\treturn true;\r\n\t\t}\r\n\t}\r\n\r\n\r\n\t//ship placement\r\n\tconst placeShip = (ship, x, y) => {\r\n\t\tconst shipSize = Object.keys(ship.body).length;\r\n    // evaluate the length of ship and direction\r\n\t\tlet bodyCounter = 1;\r\n\t\tif (spaceAvailable(ship, x, y)) {\r\n\t\t\tif (ship.direction === \"horizontal\") {\r\n\t\t\t\tif (checkPosition(x,y-1) !== undefined) {body[x][y-1] = 'filled'}\r\n\t\t\t\tif (checkPosition(x+1,y-1) !== undefined) {body[x+1][y-1] = 'filled'}\r\n\t\t\t\tif (checkPosition(x-1,y-1) !== undefined) {body[x-1][y-1] = 'filled'}\r\n\t\t\t\tif (checkPosition(x,y+shipSize) !== undefined) {body[x][y+shipSize] = 'filled'}\r\n\t\t\t\tif (checkPosition(x+1,y+shipSize) !== undefined) {body[x+1][y+shipSize] = 'filled'}\r\n\t\t\t\tif (checkPosition(x-1,y+shipSize) !== undefined) {body[x-1][y+shipSize] = 'filled'}\r\n\r\n\r\n\t\t\t\tfor (let i = y; i < (y + shipSize); i++) {\r\n\t\t\t\t\tbody[x][i] = ship.body[bodyCounter];\r\n\t\t\t\t\tif (checkPosition(x-1,i) !== undefined) {body[x-1][i] = 'filled'}\r\n          \t\t\tif (checkPosition(x+1,i) !== undefined) {body[x+1][i] = 'filled'}\r\n\t\t\t\t\tbodyCounter++;\r\n\t\t\t\t}\r\n\t\t\t} else {\r\n\t\t\t\tif (checkPosition(x-1,y) !== undefined) {body[x-1][y] = 'filled'}\r\n\t\t\t\tif (checkPosition(x-1,y+1) !== undefined) {body[x-1][y+1] = 'filled'}\r\n\t\t\t\tif (checkPosition(x-1,y-1) !== undefined) {body[x-1][y-1] = 'filled'}\r\n\t\t\t\tif (checkPosition(x+shipSize,y) !== undefined) {body[x+shipSize][y] = 'filled'}\r\n\t\t\t\tif (checkPosition(x+shipSize,y+1) !== undefined) {body[x+shipSize][y+1] = 'filled'}\r\n\t\t\t\tif (checkPosition(x+shipSize,y-1) !== undefined) {body[x+shipSize][y-1] = 'filled'}\r\n\r\n\t\t\t\tfor (let i = x; i < (x + shipSize); i++) {\r\n\t\t\t\t\tbody[i][y] = ship.body[bodyCounter];\r\n\t\t\t\t\tif (checkPosition(i,y+1) !== undefined) {body[i][y+1] = 'filled'}\r\n          \t\t\tif (checkPosition(i,y-1) !== undefined) {body[i][y-1] = 'filled'}\r\n\t\t\t\t\tbodyCounter++;\r\n\t\t\t\t}\r\n\t  \t\t}\r\n\t  \t\treturn true;\r\n\t\t} else {\r\n\t\t\treturn false;\r\n\t\t}\r\n\t}\r\n\r\n\tconst randomPlacement = () => {\r\n\r\n\t\tfor (let i = 5; i >= 1; i--) {\r\n\t\t\tlet placed = false\r\n\t\t\tif (Math.floor(Math.random() * Math.floor(2)) === 0) {\r\n\t\t\t\tshipStorage[i].setDirection(\"vertical\");\r\n\t\t\t}\r\n\r\n\t\t\twhile (!placed) {\r\n\t\t\t\tlet x = Math.floor(Math.random() * Math.floor(10)) + 1;\r\n\t\t\t\tlet y = Math.floor(Math.random() * Math.floor(10)) + 1;\r\n\t\t\t\tplaced = placeShip(shipStorage[i], x, y);\r\n\t\t\t}\r\n\t\t};\r\n\t\treturn true\r\n\t};\r\n\r\n\tconst receiveAttack = (x,y) => {\r\n\t\tif (body[x][y] === 'empty' || body[x][y] === 'filled' || typeof(body[x][y]) === 'object' && body[x][y].status === true) {\r\n\r\n\t\t\t// change value to false if there's a ship\r\n\r\n\t\t\tif (typeof(body[x][y]) === 'string') {\r\n\t\t\t\tbody[x][y] = 'miss';\r\n\t\t\t\treturn 'miss';\r\n\t\t\t} else {\r\n\t\t\t\tbody[x][y].status = false;\r\n\t\t\t\tshipStorage[body[x][y].shipLength].hit(body[x][y].bodyIndex);\r\n\t\t\t\tattacksCounter++;\r\n\t\t\t\treturn 'hit';\r\n\t\t\t};\r\n\t\t} else {\r\n\t\t\t// alert('You can\\'t hit this spot again.');\r\n\t\t\treturn false;\r\n\t\t}\r\n\t};\r\n\r\n\tconst isAllSunk = () => {\r\n\t\tif (attacksCounter === 15) {\r\n\t\t\treturn true;\r\n\t\t} else {\r\n\t\t\treturn false;\r\n\t\t};\r\n\t}\r\n\r\n\tconst areShipsPlaced = () => {\r\n\t\tlet shipBodyCounter = 0\r\n\t\tfor (let i = 1; i <= 10; i++) {\r\n\t\t\tfor (let j = 1; j <= 10; j++) {\r\n\t\t\t\tif (typeof(body[i][j]) === 'object' && body[i][j].status) {\r\n\t\t\t\t\tshipBodyCounter++;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\tif (shipBodyCounter === 15) {\r\n\t\t\treturn true;\r\n\t\t} else {\r\n\t\t\treturn false;\r\n\t\t}\r\n\t}\r\n\r\n\treturn { body, placeShip, receiveAttack,\r\n\t\t\t randomPlacement, isAllSunk, areShipsPlaced,\r\n\t\t\tget shipStorage() {return shipStorage} }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\r\n\r\n\r\n\r\n// randomly place ships on aiGB\r\n\r\nlet player = Object(_player__WEBPACK_IMPORTED_MODULE_1__[\"playerFactory\"])();\r\nlet playerGB = Object(_gameboard__WEBPACK_IMPORTED_MODULE_2__[\"gameBoardFactory\"])();\r\nlet aiGB = Object(_gameboard__WEBPACK_IMPORTED_MODULE_2__[\"gameBoardFactory\"])();\r\nlet ui = Object(_render__WEBPACK_IMPORTED_MODULE_0__[\"Render\"])(playerGB, aiGB);\r\n\r\nui.renderShipStorage(player);\r\nui.renderBoard(player, ui.placeShipCell);\r\nui.renderNav();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: playerFactory, aiFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playerFactory\", function() { return playerFactory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aiFactory\", function() { return aiFactory; });\nconst playerFactory = () => {\r\n    const attack = (x, y, aiGB) => {\r\n        return aiGB.receiveAttack(x,y);\r\n    }\r\n\r\n    return { attack };\r\n}\r\n\r\nconst aiFactory = () => {\r\n    const attack = (playerGB) => {\r\n        let validAttack = false;\r\n        while (!validAttack) {\r\n            let x = Math.floor(Math.random() * Math.floor(10)) + 1;\r\n            let y = Math.floor(Math.random() * Math.floor(10)) + 1;\r\n            validAttack = playerGB.receiveAttack(x,y);\r\n        }\r\n        return validAttack;\r\n    }\r\n    return { attack };\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: Render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Render\", function() { return Render; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\r\n\r\n\r\n\r\n\r\nconst Render = (playerGB,aiGB) => {\r\n\r\n  let aiUser = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"aiFactory\"])();\r\n\r\n  aiGB.randomPlacement();\r\n\r\n  // initialize players and gameboards\r\n\r\n  const shipStorageDiv = document.getElementById('ship-storage-container');\r\n\r\n  let currentShip;\r\n\r\n  const nav = document.getElementById('nav');\r\n\r\n  const renderNav = () => {\r\n    let instructions = document.createElement('div');\r\n    instructions.id = 'instructions';\r\n    instructions.innerHTML = `Place your ships clicking on any given ship in the left box and then clicking in any given cell on the board.<br>\r\n                              Your ship\\'s \\'head\\' will always be positioned on the cell you clicked. To switch the direction of the ship, click<br>\r\n                              the button at the top right corner of the left menu. When you\\'re done placing all of your ships, press ready!`;\r\n    instructions.classList = 'text-center mt-5 border border-info bg-light'\r\n    nav.appendChild(instructions);\r\n  };\r\n\r\n  const renderShipStorage = (player) => {\r\n\t\tconst directionImg = document.createElement('img');\r\n\t\tlet direction = \"horizontal\";\r\n\t\tdirectionImg.id = \"direction-img\"\r\n\t\tdirectionImg.src = '../src/icons/arrows-alt-h-solid.svg'\r\n    directionImg.classList = \"float-right mt-3 mr-1\"\r\n    shipStorageDiv.appendChild(directionImg)\r\n    let storageContainer = document.createElement('div');\r\n    shipStorageDiv.appendChild(storageContainer)\r\n\r\n    for (let i = 1; i <= 5; i++) {\r\n      let shipContainer = document.createElement('div');\r\n      shipContainer.id = `ship-${i}`;\r\n      shipContainer.classList = 'ship m-3';\r\n      storageContainer.appendChild(shipContainer);\r\n\r\n      shipContainer.addEventListener(\"click\", () => {\r\n        currentShip = playerGB.shipStorage[i];\r\n\t\t\t\tcurrentShip.setDirection(direction);\r\n      })\r\n    }\r\n\r\n    directionImg.addEventListener(\"click\", () => {\r\n\t\t\tif (direction === \"horizontal\") {\r\n\t\t\t\tif (currentShip) {\r\n\t\t\t\t\tcurrentShip.setDirection(\"vertical\");\r\n\t\t\t\t}\r\n\t\t\t\tdirectionImg.src = '../src/icons/arrows-alt-v-solid.svg';\r\n\t\t\t\tdirection = \"vertical\";\r\n\t    } else if (direction === \"vertical\") {\r\n\t\t\t\tif (currentShip) {\r\n\t\t\t\t\tcurrentShip.setDirection(\"horizontal\");\r\n\t\t\t\t}\r\n\t\t\t\tdirectionImg.src = '../src/icons/arrows-alt-h-solid.svg'\r\n\t\t\t\tdirection = \"horizontal\";\r\n\t    }\r\n    })\r\n\r\n    const randomBtn = document.createElement('button');\r\n    randomBtn.innerHTML = 'Random';\r\n    randomBtn.id = 'random-btn'\r\n    randomBtn.classList = 'btn btn-block btn-warning mb-2';\r\n    randomBtn.style = 'background-color: white; color: black;'\r\n    randomBtn.addEventListener('click', () => {\r\n      storageContainer.style.visibility = 'hidden';\r\n      playerGB = Object(_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"gameBoardFactory\"])();\r\n      playerGB.randomPlacement();\r\n      renderBoard();\r\n    })\r\n    shipStorageDiv.appendChild(randomBtn);\r\n\r\n    const readyBtn = document.createElement('button');\r\n    readyBtn.innerHTML = 'Ready';\r\n    readyBtn.id = 'ready-btn'\r\n    readyBtn.classList = 'btn btn-block btn-success mb-2';\r\n    readyBtn.style = 'background-color: white; color: #28a745;'\r\n    readyBtn.addEventListener('click', () => {\r\n      if (playerGB.areShipsPlaced()) {\r\n        shipStorageDiv.style.display = 'none';\r\n        renderBoard(player);\r\n        renderBoard(player, attackShipCell, true);\r\n        let instructions = document.getElementById('instructions');\r\n        instructions.innerHTML = 'Click on any given cell on the right board to attack.';\r\n      } else {\r\n        alert('Place all of your ships before starting the game.');\r\n      };\r\n\r\n    })\r\n    shipStorageDiv.appendChild(readyBtn);\r\n\r\n\t\tconst resetBtn = document.createElement('button');\r\n\t\tresetBtn.innerHTML = 'Reset';\r\n\t\tresetBtn.id = 'reset-btn'\r\n\t\tresetBtn.classList = 'btn btn-block btn-secondary mb-2';\r\n\t\tresetBtn.style = 'background-color: white; color: #6c757d'\r\n\t\tresetBtn.addEventListener('click', () => {\r\n\t\t\twindow.location.reload();\r\n\t\t})\r\n    shipStorageDiv.appendChild(resetBtn);\r\n  }\r\n\r\n  const renderBoard = (player, cellFunction = false, ai = false,) => {\r\n    const currentBoard = ai ? document.getElementById('ai-gameboard') : document.getElementById('player-gameboard');\r\n    currentBoard.innerHTML = '';\r\n    const board = ai ? aiGB : playerGB;\r\n\t\tcurrentBoard.classList = \"col-5 m-2\";\r\n\r\n    for (let i = 0; i <= 10; i++) {\r\n      let row = document.createElement('div');\r\n\t\t\tif (i === 0) {\r\n\t\t\t\tfor (let k = 0; k <=10; k++) {\r\n\t\t\t\t\tlet cell = document.createElement('div');\r\n\t\t\t\t\tif (k !== 0) {\r\n\t\t\t\t\t\tcell.innerHTML = String.fromCharCode(64+k);\r\n\t\t\t\t\t\tcell.classList = \"text-center\";\r\n\t\t\t\t\t}\r\n\t\t\t\t\trow.appendChild(cell);\r\n\t\t\t\t}\r\n\t\t\t\trow.classList = \"letter-row cellrow\"\r\n\t\t\t} else {\r\n\t\t\t\trow.classList = 'cellrow';\r\n\t\t\t}\r\n      currentBoard.appendChild(row);\r\n\r\n\t\t\tif (i !== 0) {\r\n\t\t\t\tfor (let j = 0; j <= 10; j++) {\r\n\t        let cell = document.createElement('div');\r\n\t\t\t\t\tif (j !== 0) {\r\n\t\t        cell.setAttribute('data-x', i);\r\n            cell.setAttribute('data-y', j);\r\n\r\n            if (typeof(board.body[i][j]) === 'object') {\r\n              if (!ai && board.body[i][j].status) {\r\n                cell.classList = 'ship-display'\r\n              } else if (!board.body[i][j].status) {\r\n                cell.classList = 'attack-display';\r\n\t\t\t\t\t\t\t\tcell.innerHTML = \"X\";\r\n              } else if (ai && board.body[i][j].status) {\r\n\t\t\t\t\t\t\t\tcell.classList = 'cellcol'\r\n\t\t\t\t\t\t\t}\r\n            } else if (board.body[i][j] === 'miss') {\r\n              cell.classList = 'miss-display';\r\n\t\t\t\t\t\t\tcell.innerHTML = \"M\";\r\n            } else {\r\n\t\t\t\t\t\t\tcell.classList = 'cellcol';\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t} else if (j === 0 && i !== 0){\r\n\t\t\t\t\t\tcell.innerHTML = i;\r\n\t\t\t\t\t}\r\n\r\n          row.appendChild(cell);\r\n          let x = parseInt(cell.getAttribute('data-x'));\r\n          let y = parseInt(cell.getAttribute('data-y'))\r\n          if (cellFunction !== false) {\r\n            cell.addEventListener('click', () => {\r\n              cellFunction(board, x, y, player, ai)\r\n            });\r\n          };\r\n\t\t\t\t}\r\n      }\r\n    }\r\n\r\n\t\tcurrentBoard.addEventListener(\"mouseover\", () => {\r\n\t\t\tif (ai || currentShip) {\r\n\t\t\t\tcurrentBoard.style.cursor = \"crosshair\";\r\n\t\t\t} else {\r\n\t\t\t\tcurrentBoard.style.cursor = \"auto\";\r\n\t\t\t}\r\n\t\t})\r\n\r\n\t\tdocument.getElementById('play-again-btn').addEventListener('click', () => {\r\n\t\t\twindow.location.reload();\r\n\t\t})\r\n  }\r\n\r\n  const placeShipCell = (board, x,y, player, ai = false) => {\r\n    if (!currentShip && !ai) {\r\n      alert('Select a ship from the left menu before!');\r\n    } else {\r\n      if(board.placeShip(currentShip, x, y)) {\r\n        let shipSize = currentShip.body[1].shipLength;\r\n        let usedShip = document.getElementById(`ship-${shipSize}`);\r\n        usedShip.style.visibility = 'hidden';\r\n\t\t\t\tcurrentShip = false;\r\n        renderBoard(player, placeShipCell);\r\n      } else {\r\n        alert(\"This is an invalid position.\");\r\n      }\r\n    }\r\n  }\r\n\r\n  const attackShipCell = (board, x,y, player, ai = false) => {\r\n      let playerBoard = document.getElementById('player-gameboard');\r\n      playerBoard.innerHTML = \"\";\r\n      let aiBoard = document.getElementById('ai-gameboard');\r\n      aiBoard.innerHTML = \"\";\r\n\r\n      if (player && ai) {\r\n        if (player.attack(x,y, board) === 'miss') {\r\n          let aiHit = 'hit'\r\n          while (aiHit === 'hit') {\r\n\t\t\t\t\t\tsetTimeout(function() {}, 2000);\r\n            aiHit = aiUser.attack(playerGB);\r\n\r\n\t\t\t\t\t\tif (playerGB.isAllSunk()) {\r\n\t\t\t\t\t\t\trenderBoard(player);\r\n\t\t\t\t\t\t\trenderBoard(player, false, true);\r\n\t\t\t\t\t\t\tinstructions.innerHTML = \"AI WINS\"\r\n\t\t\t\t\t\t\tdocument.getElementById('play-again-btn').classList = \"btn btn-success mt-5 mr-5\";\r\n\t\t\t\t\t\t}\r\n          }\r\n        };\r\n      }\r\n\t\t\tif (aiGB.isAllSunk()) {\r\n\t\t\t\trenderBoard(player);\r\n\t\t\t\trenderBoard(player, false, true);\r\n\t\t\t\tinstructions.innerHTML = \"YOU WIN\";\r\n\t\t\t\tdocument.getElementById('play-again-btn').classList = \"btn btn-success mt-5 mr-5\";\r\n\t\t\t} else {\r\n\t\t\t\trenderBoard(player);\r\n\t\t\t\trenderBoard(player, attackShipCell, true);\r\n\t\t\t}\r\n  };\r\n\r\n  const displayResult = (winner) => {\r\n    if (winner === 'player') {\r\n      alert('You have won!');\r\n    } else {\r\n      alert('You have lost!');\r\n    }\r\n\t\twindow.location.reload();\r\n  }\r\n\r\n\r\n  return { renderShipStorage, get currentShip() { return currentShip }, renderBoard, renderNav, attackShipCell, placeShipCell };\r\n\r\n  // const isOver = () => {\r\n  //   if (playerGB.attacksCounter === 15) {\r\n  //     // render results 'you lost'\r\n  //   } else if (aiGB.attacksCounter === 15) {\r\n  //     // render results 'you won!'\r\n  //   }\r\n  // }\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/render.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! exports provided: shipFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shipFactory\", function() { return shipFactory; });\nconst shipFactory = (length) => {\r\n\r\n  let body = {};\r\n\tlet direction = \"horizontal\";\r\n\r\n  for (let i = 1; i <= length; i++) {\r\n    body[i] = {status: true, bodyIndex: i, shipLength: length};\r\n  }\r\n\r\n  const hit = (index) => {\r\n    body[index].status = false;\r\n  };\r\n\r\n  const isSunk = () => {\r\n    for (let i = 1; i <= length; i++) {\r\n      if (body[i].status) {\r\n        return false;\r\n      }\r\n    }\r\n    return true;\r\n  };\r\n\r\n  const setDirection = (newDirection) => {\r\n    direction = newDirection;\r\n  };\r\n\r\n\r\n\r\n  return { body, hit, isSunk, get direction() { return direction},\r\n           setDirection };\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ })

/******/ });