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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameBoardFactory\", function() { return gameBoardFactory; });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\n\nconst gameBoardFactory = (ai = false) => {\n\n\tconst isAI = ai;\n\n\t// board creation\n\tconst body = {};\n\n\tfor (let i = 1; i <= 10; i++) {\n\t\tbody[i] = {};\n\t\tfor (let j = 1; j <= 10; j++) {\n\t\t\tbody[i][j] = 'empty';\n\t\t}\n\t}\n\n\tlet attacksCounter = 0;\n\n\t//position check\n\tconst checkPosition = (row, col) => {\n    if (row === 0 || row > 10 || col === 0 || col > 10) {\n      return undefined;\n    }\n\t\treturn body[row][col];\n\t}\n\n\t//ship storage\n\tconst shipStorage = {\n\t\t1: Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"shipFactory\"])(1),\n\t\t2: Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"shipFactory\"])(2),\n\t\t3: Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"shipFactory\"])(3),\n\t\t4: Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"shipFactory\"])(4),\n\t\t5: Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"shipFactory\"])(5),\n\t}\n\n\n\tconst spaceAvailable = (ship, x, y) => {\n\t\tconst shipSize = Object.keys(ship.body).length;\n\n    if (((y - 1 + shipSize) > 10 && ship.direction === \"horizontal\") ||\n        ((x - 1 + shipSize) > 10 && ship.direction === \"vertical\")) {\n          return false;\n    }\n\n    if (typeof(checkPosition(x, y)) === 'string' && ship.direction === \"horizontal\") {\n      for (let i = y-1; i <= (y + shipSize); i++) {\n\t\t\t\tif (typeof(checkPosition(x, i)) !== 'string' && checkPosition(x, i) !== undefined) {\n\t\t\t\t\treturn false;\n        }\n        for (let j = x -1; j <= (x + 1); j+= 2) {\n          if (typeof(checkPosition(j, i)) !== 'string' && checkPosition(j, i) !== undefined) {\n            return false;\n          }\n        }\n\t\t\t}\n      return true;\n\n\t\t} else if (typeof(checkPosition(x, y)) === 'string' && ship.direction === \"vertical\") {\n\n      for (let i = x-1; i <= (x + shipSize); i++) {\n\t\t\t\tif (typeof(checkPosition(i, y)) !== 'string' && checkPosition(i, y) !== undefined) {\n\t\t\t\t\treturn false;\n        }\n        for (let j = y -1; j <= (y + 1); j+= 2) {\n          if (typeof(checkPosition(i,j)) !== 'string' && checkPosition(i, j) !== undefined) {\n            return false;\n          }\n        }\n      }\n\t\t\treturn true;\n\t\t}\n\t}\n\n\n\t//ship placement\n\tconst placeShip = (ship, x, y) => {\n\t\tconst shipSize = Object.keys(ship.body).length;\n    // evaluate the length of ship and direction\n\t\tlet bodyCounter = 1;\n\t\tif (spaceAvailable(ship, x, y)) {\n\t\t\tif (ship.direction === \"horizontal\") {\n\t\t\t\tif (checkPosition(x,y-1) !== undefined) {body[x][y-1] = 'filled'}\n\t\t\t\tif (checkPosition(x+1,y-1) !== undefined) {body[x+1][y-1] = 'filled'}\n\t\t\t\tif (checkPosition(x-1,y-1) !== undefined) {body[x-1][y-1] = 'filled'}\n\t\t\t\tif (checkPosition(x,y+shipSize) !== undefined) {body[x][y+shipSize] = 'filled'}\n\t\t\t\tif (checkPosition(x+1,y+shipSize) !== undefined) {body[x+1][y+shipSize] = 'filled'}\n\t\t\t\tif (checkPosition(x-1,y+shipSize) !== undefined) {body[x-1][y+shipSize] = 'filled'}\n\t\t\t\t\n\n\t\t\t\tfor (let i = y; i < (y + shipSize); i++) {\n\t\t\t\t\tbody[x][i] = ship.body[bodyCounter];\n\t\t\t\t\tif (checkPosition(x-1,i) !== undefined) {body[x-1][i] = 'filled'}\n          \t\t\tif (checkPosition(x+1,i) !== undefined) {body[x+1][i] = 'filled'}\n\t\t\t\t\tbodyCounter++;\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tif (checkPosition(x-1,y) !== undefined) {body[x-1][y] = 'filled'}\n\t\t\t\tif (checkPosition(x-1,y+1) !== undefined) {body[x-1][y+1] = 'filled'}\n\t\t\t\tif (checkPosition(x-1,y-1) !== undefined) {body[x-1][y-1] = 'filled'}\n\t\t\t\tif (checkPosition(x+shipSize,y) !== undefined) {body[x+shipSize][y] = 'filled'}\n\t\t\t\tif (checkPosition(x+shipSize,y+1) !== undefined) {body[x+shipSize][y+1] = 'filled'}\n\t\t\t\tif (checkPosition(x+shipSize,y-1) !== undefined) {body[x+shipSize][y-1] = 'filled'}\n\n\t\t\t\tfor (let i = x; i < (x + shipSize); i++) {\n\t\t\t\t\tbody[i][y] = ship.body[bodyCounter];\n\t\t\t\t\tif (checkPosition(i,y+1) !== undefined) {body[i][y+1] = 'filled'}\n          \t\t\tif (checkPosition(i,y-1) !== undefined) {body[i][y-1] = 'filled'}\n\t\t\t\t\tbodyCounter++;\n\t\t\t\t}\n\t  \t\t}\n\t  \t\treturn true;\n\t\t} else {\n\t\t\treturn false;\n\t\t}\n\t}\n\n\tconst randomPlacement = () => {\n\n\t\tfor (let i = 5; i >= 1; i--) {\n\t\t\tlet placed = false\n\t\t\tif (Math.floor(Math.random() * Math.floor(2)) === 0) {\n\t\t\t\tshipStorage[i].switchDirection()\n\t\t\t}\n\n\t\t\twhile (!placed) {\n\t\t\t\tlet x = Math.floor(Math.random() * Math.floor(10)) + 1;\n\t\t\t\tlet y = Math.floor(Math.random() * Math.floor(10)) + 1;\n\t\t\t\tplaced = placeShip(shipStorage[i], x, y);\n\t\t\t}\n\t\t};\n\t\treturn true\n\t};\n\n\tconst receiveAttack = (x,y) => {\n\t\tif (body[x][y] === 'empty' || body[x][y] === 'filled' || typeof(body[x][y]) === 'object' && body[x][y].status === true) {\n\n\t\t\t// change value to false if there's a ship\n\n\t\t\tif (typeof(body[x][y]) === 'string') {\n\t\t\t\tbody[x][y] = 'miss';\n\t\t\t\treturn 'miss';\n\t\t\t} else {\n\t\t\t\tbody[x][y].status = false;\n\t\t\t\tshipStorage[body[x][y].shipLength].hit(body[x][y].bodyIndex);\n\t\t\t\tattacksCounter++;\n\t\t\t\treturn 'hit';\n\t\t\t};\n\n\t\t} else {\n\t\t\t// alert('You can\\'t hit this spot again.');\n\t\t\treturn false;\n\t\t}\n\t};\n\n\tconst isSunkAll = () => {\n\t\tfor (let i = 1; i <= 5; i++) {\n\t\t\tif (!shipStorage[i].isSunk()) {\n\t\t\t\treturn false\n\t\t\t}\n\t\t}\n\t\treturn true\n\t}\n\n\tconst areShipsPlaced = () => {\n\t\tlet shipBodyCounter = 0\n\t\tfor (let i = 1; i <= 10; i++) {\n\t\t\tfor (let j = 1; j <= 10; j++) {\n\t\t\t\tif (typeof(body[i][j]) === 'object' && body[i][j].status) {\n\t\t\t\t\tshipBodyCounter++;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tif (shipBodyCounter === 15) {\n\t\t\treturn true;\n\t\t} else {\n\t\t\treturn false;\n\t\t}\n\t}\n\n\treturn { body, placeShip, receiveAttack,\n\t\t\t randomPlacement, isSunkAll, areShipsPlaced,\n\t\t\t get attacksCounter() {return attacksCounter}, get shipStorage() {return shipStorage}, get isAI() {return isAI} }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\n\n\nlet playerGB = Object(_gameboard__WEBPACK_IMPORTED_MODULE_2__[\"gameBoardFactory\"])();\nlet aiGB = Object(_gameboard__WEBPACK_IMPORTED_MODULE_2__[\"gameBoardFactory\"])(true);\n// randomly place ships on aiGB\n\nlet initGame = Object(_render__WEBPACK_IMPORTED_MODULE_0__[\"Render\"])();\n\ninitGame.renderShipStorage(playerGB);\ninitGame.renderBoard(playerGB, initGame.placeShipCell);\ninitGame.renderNav();\n\n\n// render gameboard\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: playerFactory, aiFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playerFactory\", function() { return playerFactory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aiFactory\", function() { return aiFactory; });\nconst playerFactory = () => {\n    const attack = (x,y, aiGB) => {\n        aiGB.receiveAttack(x,y);\n    }\n\n    return { attack };\n\n}\n\nconst aiFactory = () => {\n    const attack = (playerGB) => {\n        let validAttack = false;\n        while (!validAttack) {\n            let x = Math.floor(Math.random() * Math.floor(10)) + 1;\n            let y = Math.floor(Math.random() * Math.floor(10)) + 1;\t\t\t\t\t\t\n            validAttack = playerGB.receiveAttack(x,y);\n        }\n        return validAttack;\n    }\n    return { attack };\n}\n\n\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: Render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Render\", function() { return Render; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\nconst Render = () => {\n\n  // initialize players and gameboards\n\n  const shipStorageDiv = document.getElementById('ship-storage-container');\n\n  let currentShip;\n\n  const nav = document.getElementById('nav');\n\n  const renderNav = () => {\n    let instructions = document.createElement('div');\n    instructions.innerHTML = `Place your ships clicking on any given ship in the left box and then clicking in any given cell on the board.<br>\n                              Your ship\\'s \\'head\\' will always be positioned on the cell you clicked. To switch the direction of the ship, click<br> \n                              the button at the top right corner of the left menu. When you\\'re done placing all of your ships, press ready!`;\n    instructions.classList = 'text-center mt-5 border border-info bg-light'\n    nav.appendChild(instructions);\n  };\n\n  const renderShipStorage = (board) => {\n    const switchDirectionBtn = document.createElement('button');\n    switchDirectionBtn.innerHTML = \"V\";\n    switchDirectionBtn.classList = \"btn direction-btn float-right mt-3 mr-2\"\n    shipStorageDiv.appendChild(switchDirectionBtn)\n\n    for (let i = 1; i <= 5; i++) {\n      let shipContainer = document.createElement('div');\n      shipContainer.id = `ship-${i}`;\n      shipContainer.classList = 'ship m-3';\n      shipStorageDiv.appendChild(shipContainer);\n\n      shipContainer.addEventListener(\"click\", () => {\n        currentShip = board.shipStorage[i];\n        switchDirectionBtn.innerHTML = currentShip.direction === 'horizontal' ? 'V': 'H';\n      })\n\n    }\n\n\n    switchDirectionBtn.addEventListener(\"click\", () => {\n      if (currentShip) {\n        if (currentShip.direction === \"horizontal\") {\n          switchDirectionBtn.innerHTML = \"H\";\n          currentShip.switchDirection();\n        } else if (currentShip.direction === \"vertical\"){\n          switchDirectionBtn.innerHTML = \"V\";\n          currentShip.switchDirection();\n        }\n      } else {\n        alert(\"You need to select a ship first\");\n      }\n\n\n    })\n\n    const readyBtn = document.createElement('button');\n    readyBtn.innerHTML = 'Ready';\n    readyBtn.id = 'ready-btn'\n    readyBtn.classList = 'btn btn-block btn-success mb-2';\n    readyBtn.style = 'background-color: white; color: #28a745;'\n    readyBtn.addEventListener('click', () => {\n      // start game\n    })\n    shipStorageDiv.appendChild(readyBtn);\n\n    const resetBtn = document.createElement('button');\n    resetBtn.innerHTML = 'Reset Gameboard';\n    resetBtn.id = 'reset-btn'\n    resetBtn.classList = 'btn btn-block btn-secondary mb-2';\n    resetBtn.style = 'background-color: white; color: #6c757d'\n    resetBtn.addEventListener('click', () => {\n      window.location.reload();      \n    })\n    shipStorageDiv.appendChild(resetBtn);\n  }\n\n  const renderBoard = (board, cellFunction) => {\n\n    const currentBoard = board.isAI ? document.getElementById('ai-gameboard') : document.getElementById('player-gameboard');\n\n    for (let i = 0; i <= 10; i++) {\n      let row = document.createElement('div');\n\t\t\tif (i === 0) {\n\t\t\t\tfor (let k = 0; k <=10; k++) {\n\t\t\t\t\tlet cell = document.createElement('div');\n\t\t\t\t\tif (k !== 0) {\n\t\t\t\t\t\tcell.innerHTML = String.fromCharCode(64+k);\n\t\t\t\t\t\tcell.classList = \"text-center\";\n\t\t\t\t\t}\n\t\t\t\t\trow.appendChild(cell);\n\t\t\t\t}\n\t\t\t\trow.classList = \"letter-row cellrow\"\n\t\t\t} else {\n\t\t\t\trow.classList = 'cellrow';\n\t\t\t}\n      currentBoard.appendChild(row);\n\n\t\t\tif (i !== 0) {\n\t\t\t\tfor (let j = 0; j <= 10; j++) {\n\t        let cell = document.createElement('div');\n\t\t\t\t\tif (j !== 0) {\n\t\t        cell.setAttribute('data-x', i);\n            cell.setAttribute('data-y', j);\n\n            if (typeof(board.body[i][j]) === 'object') {\n              if ( !board.isAi && board.body[i][j].status) {\n                cell.classList = 'ship-display'\n              } else {\n                cell.classList = 'attack-display';\n              };\n            } else if (board.body[i][j] === 'miss') {\n              cell.classList = 'miss-display';\n            } else {\n              cell.classList = 'cellcol';\n            }\n\n\t\t\t\t\t} else if (j === 0 && i !== 0){\n\t\t\t\t\t\tcell.innerHTML = i;\n\t\t\t\t\t}\n\n          row.appendChild(cell);\n          let x = parseInt(cell.getAttribute('data-x'));\n          let y = parseInt(cell.getAttribute('data-y'))\n          cell.addEventListener('click', () => {\n\t\t\t\t\t\tconsole.log(board.body);\n\t\t\t\t\t\tcellFunction(currentBoard, board, x, y)\n          });\n\t\t\t\t}\n      }\n    }\n\n\n  }\n\n\n  const placeShipCell = (domBoard, board, x,y) => {\n    if (!currentShip) {\n      alert('Select a ship from the left menu before!');\n    } else {\n      if(board.placeShip(currentShip, x, y)) {\n        let shipSize = currentShip.body[1].shipLength;\n        let usedShip = document.getElementById(`ship-${shipSize}`);\n        usedShip.style.visibility = 'hidden';\n        domBoard.innerHTML = \"\";\n        renderBoard(board, placeShipCell);\n      } else {\n        alert(\"This is an invalid position.\");\n      }\n    }\n  }\n\n  const attackShipCell = (board, x,y) => {\n    if (board.isAI) {\n      player.attack(x,y);\n\t\t\tdomBoard.innerHTML = \"\";\n      renderBoard(board, attackShipCell);\n    }\n  };\n\n\n  return { renderShipStorage, get currentShip() { return currentShip }, renderBoard, renderNav, attackShipCell, placeShipCell };\n\n  // const ready = () => {\n\n  //   if (!playerGB.areShipsPlaced()) {\n  //     alert('You need to place all of your ships!');\n  //   } else {\n  //     start();\n  //   };\n  // };\n\n  // const isOver = () => {\n  //   if (playerGB.attacksCounter === 15) {\n  //     // render results 'you lost'\n  //   } else if (aiGB.attacksCounter === 15) {\n  //     // render results 'you won!'\n  //   }\n  // }\n\n}\n\n\n\n\n//# sourceURL=webpack:///./src/render.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! exports provided: shipFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shipFactory\", function() { return shipFactory; });\nconst shipFactory = (length) => {\n\n  let body = {};\n\tlet direction = \"horizontal\";\n\n  for (let i = 1; i <= length; i++) {\n    body[i] = {status: true, bodyIndex: i, shipLength: length};\n  }\n\n  const hit = (index) => {\n    body[index].status = false;\n  };\n\n  const isSunk = () => {\n    for (let i = 1; i <= length; i++) {\n      if (body[i].status) {\n        return false;\n      }\n    }\n    return true;\n  };\n\n  const switchDirection = () => {\n    if (direction === 'horizontal') {\n      direction = 'vertical';\n    } else {\n      direction = 'horizontal';\n    }\n  };\n\n\n\n  return { body, hit, isSunk, get direction() { return direction},\n           switchDirection };\n}\n\n\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ })

/******/ });