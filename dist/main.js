/* eslint-disable */
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameBoardFactory\", function() { return gameBoardFactory; });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\n\nconst gameBoardFactory = (ai = false) => {\n  // board creation\n  const body = {};\n\n  for (let i = 1; i <= 10; i++) {\n    body[i] = {};\n    for (let j = 1; j <= 10; j++) {\n      body[i][j] = 'empty';\n    }\n  }\n\n  let attacksCounter = 0;\n\n  // position check\n  const checkPosition = (row, col) => {\n    if (row === 0 || row > 10 || col === 0 || col > 10) {\n      return undefined;\n    }\n    return body[row][col];\n  };\n\n  // ship storage\n  const shipStorage = {\n    1: Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"shipFactory\"])(1),\n    2: Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"shipFactory\"])(2),\n    3: Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"shipFactory\"])(3),\n    4: Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"shipFactory\"])(4),\n    5: Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"shipFactory\"])(5),\n  };\n\n\n  const spaceAvailable = (ship, x, y) => {\n    const shipSize = Object.keys(ship.body).length;\n\n    if (((y - 1 + shipSize) > 10 && ship.direction === 'horizontal')\n        || ((x - 1 + shipSize) > 10 && ship.direction === 'vertical')) {\n      return false;\n    }\n\n    if (typeof (checkPosition(x, y)) === 'string' && ship.direction === 'horizontal') {\n      for (let i = y - 1; i <= (y + shipSize); i++) {\n        if (typeof (checkPosition(x, i)) !== 'string' && checkPosition(x, i) !== undefined) {\n          return false;\n        }\n        for (let j = x - 1; j <= (x + 1); j += 2) {\n          if (typeof (checkPosition(j, i)) !== 'string' && checkPosition(j, i) !== undefined) {\n            return false;\n          }\n        }\n      }\n      return true;\n    } if (typeof (checkPosition(x, y)) === 'string' && ship.direction === 'vertical') {\n      for (let i = x - 1; i <= (x + shipSize); i++) {\n        if (typeof (checkPosition(i, y)) !== 'string' && checkPosition(i, y) !== undefined) {\n          return false;\n        }\n        for (let j = y - 1; j <= (y + 1); j += 2) {\n          if (typeof (checkPosition(i, j)) !== 'string' && checkPosition(i, j) !== undefined) {\n            return false;\n          }\n        }\n      }\n      return true;\n    }\n  };\n\n\n  // ship placement\n  const placeShip = (ship, x, y) => {\n    const shipSize = Object.keys(ship.body).length;\n    // evaluate the length of ship and direction\n    let bodyCounter = 1;\n    if (spaceAvailable(ship, x, y)) {\n      if (ship.direction === 'horizontal') {\n        if (checkPosition(x, y - 1) !== undefined) { body[x][y - 1] = 'filled'; }\n        if (checkPosition(x + 1, y - 1) !== undefined) { body[x + 1][y - 1] = 'filled'; }\n        if (checkPosition(x - 1, y - 1) !== undefined) { body[x - 1][y - 1] = 'filled'; }\n        if (checkPosition(x, y + shipSize) !== undefined) { body[x][y + shipSize] = 'filled'; }\n        if (checkPosition(x + 1, y + shipSize) !== undefined) { body[x + 1][y + shipSize] = 'filled'; }\n        if (checkPosition(x - 1, y + shipSize) !== undefined) { body[x - 1][y + shipSize] = 'filled'; }\n\n\n        for (let i = y; i < (y + shipSize); i++) {\n          body[x][i] = ship.body[bodyCounter];\n          if (checkPosition(x - 1, i) !== undefined) { body[x - 1][i] = 'filled'; }\n          \t\t\tif (checkPosition(x + 1, i) !== undefined) { body[x + 1][i] = 'filled'; }\n          bodyCounter++;\n        }\n      } else {\n        if (checkPosition(x - 1, y) !== undefined) { body[x - 1][y] = 'filled'; }\n        if (checkPosition(x - 1, y + 1) !== undefined) { body[x - 1][y + 1] = 'filled'; }\n        if (checkPosition(x - 1, y - 1) !== undefined) { body[x - 1][y - 1] = 'filled'; }\n        if (checkPosition(x + shipSize, y) !== undefined) { body[x + shipSize][y] = 'filled'; }\n        if (checkPosition(x + shipSize, y + 1) !== undefined) { body[x + shipSize][y + 1] = 'filled'; }\n        if (checkPosition(x + shipSize, y - 1) !== undefined) { body[x + shipSize][y - 1] = 'filled'; }\n\n        for (let i = x; i < (x + shipSize); i++) {\n          body[i][y] = ship.body[bodyCounter];\n          if (checkPosition(i, y + 1) !== undefined) { body[i][y + 1] = 'filled'; }\n          \t\t\tif (checkPosition(i, y - 1) !== undefined) { body[i][y - 1] = 'filled'; }\n          bodyCounter++;\n        }\n\t  \t\t}\n\t  \t\treturn true;\n    }\n    return false;\n  };\n\n  const randomPlacement = () => {\n    for (let i = 5; i >= 1; i--) {\n      let placed = false;\n      if (Math.floor(Math.random() * Math.floor(2)) === 0) {\n        shipStorage[i].setDirection('vertical');\n      }\n\n      while (!placed) {\n        const x = Math.floor(Math.random() * Math.floor(10)) + 1;\n        const y = Math.floor(Math.random() * Math.floor(10)) + 1;\n        placed = placeShip(shipStorage[i], x, y);\n      }\n    }\n    return true;\n  };\n\n  const receiveAttack = (x, y) => {\n    if (body[x][y] === 'empty' || body[x][y] === 'filled' || typeof (body[x][y]) === 'object' && body[x][y].status === true) {\n      // change value to false if there's a ship\n\n      if (typeof (body[x][y]) === 'string') {\n        body[x][y] = 'miss';\n        return 'miss';\n      }\n      body[x][y].status = false;\n      shipStorage[body[x][y].shipLength].hit(body[x][y].bodyIndex);\n      attacksCounter++;\n      return 'hit';\n    }\n    // alert('You can\\'t hit this spot again.');\n    return false;\n  };\n\n  const isAllSunk = () => {\n    if (attacksCounter === 15) {\n      return true;\n    }\n    return false;\n  };\n\n  const areShipsPlaced = () => {\n    let shipBodyCounter = 0;\n    for (let i = 1; i <= 10; i++) {\n      for (let j = 1; j <= 10; j++) {\n        if (typeof (body[i][j]) === 'object' && body[i][j].status) {\n          shipBodyCounter++;\n        }\n      }\n    }\n    if (shipBodyCounter === 15) {\n      return true;\n    }\n    return false;\n  };\n\n  return {\n    body,\n    placeShip,\n    receiveAttack,\n\t\t\t randomPlacement,\n    isAllSunk,\n    areShipsPlaced,\n    get shipStorage() { return shipStorage; },\n  };\n};\n\n\n\n\n//# sourceURL=webpack:///./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\n\n\n// randomly place ships on aiGB\n\nconst player = Object(_player__WEBPACK_IMPORTED_MODULE_1__[\"playerFactory\"])();\nconst playerGB = Object(_gameboard__WEBPACK_IMPORTED_MODULE_2__[\"gameBoardFactory\"])();\nconst aiGB = Object(_gameboard__WEBPACK_IMPORTED_MODULE_2__[\"gameBoardFactory\"])();\nconst ui = Object(_render__WEBPACK_IMPORTED_MODULE_0__[\"Render\"])(playerGB, aiGB);\n\nui.renderShipStorage(player);\nui.renderBoard(player, ui.placeShipCell);\nui.renderNav();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: playerFactory, aiFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playerFactory\", function() { return playerFactory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aiFactory\", function() { return aiFactory; });\nconst playerFactory = () => {\n  const attack = (x, y, aiGB) => aiGB.receiveAttack(x, y);\n\n  return { attack };\n};\n\nconst aiFactory = () => {\n  const attack = (playerGB) => {\n    let validAttack = false;\n    while (!validAttack) {\n      const x = Math.floor(Math.random() * Math.floor(10)) + 1;\n      const y = Math.floor(Math.random() * Math.floor(10)) + 1;\n      validAttack = playerGB.receiveAttack(x, y);\n    }\n    return validAttack;\n  };\n  return { attack };\n};\n\n\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: Render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Render\", function() { return Render; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\n\n\nconst Render = (playerGB, aiGB) => {\n  const aiUser = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"aiFactory\"])();\n\n  aiGB.randomPlacement();\n\n  // initialize players and gameboards\n\n  const shipStorageDiv = document.getElementById('ship-storage-container');\n\n  let currentShip;\n\n  const nav = document.getElementById('nav');\n\n  const renderNav = () => {\n    const instructions = document.createElement('div');\n    instructions.id = 'instructions';\n    instructions.innerHTML = `Place your ships clicking on any given ship in the left box and then clicking in any given cell on the board.<br>\n                              Your ship\\'s \\'head\\' will always be positioned on the cell you clicked. To switch the direction of the ship, click<br>\n                              the button at the top right corner of the left menu. When you\\'re done placing all of your ships, press ready!`;\n    instructions.classList = 'text-center mt-5 border border-info bg-light';\n    nav.appendChild(instructions);\n  };\n\n  const renderShipStorage = (player) => {\n    const directionImg = document.createElement('img');\n    let direction = 'horizontal';\n    directionImg.id = 'direction-img';\n    directionImg.src = '../src/icons/arrows-alt-h-solid.svg';\n    directionImg.classList = 'float-right mt-3 mr-1';\n    shipStorageDiv.appendChild(directionImg);\n    const storageContainer = document.createElement('div');\n    shipStorageDiv.appendChild(storageContainer);\n\n    for (let i = 1; i <= 5; i++) {\n      const shipContainer = document.createElement('div');\n      shipContainer.id = `ship-${i}`;\n      shipContainer.classList = 'ship m-3';\n      storageContainer.appendChild(shipContainer);\n\n      shipContainer.addEventListener('click', () => {\n        currentShip = playerGB.shipStorage[i];\n        currentShip.setDirection(direction);\n      });\n    }\n\n    directionImg.addEventListener('click', () => {\n      if (direction === 'horizontal') {\n        if (currentShip) {\n          currentShip.setDirection('vertical');\n        }\n        directionImg.src = '../src/icons/arrows-alt-v-solid.svg';\n        direction = 'vertical';\n\t    } else if (direction === 'vertical') {\n        if (currentShip) {\n          currentShip.setDirection('horizontal');\n        }\n        directionImg.src = '../src/icons/arrows-alt-h-solid.svg';\n        direction = 'horizontal';\n\t    }\n    });\n\n    const randomBtn = document.createElement('button');\n    randomBtn.innerHTML = 'Random';\n    randomBtn.id = 'random-btn';\n    randomBtn.classList = 'btn btn-block btn-warning mb-2';\n    randomBtn.style = 'background-color: white; color: black;';\n    randomBtn.addEventListener('click', () => {\n      storageContainer.style.visibility = 'hidden';\n      playerGB = Object(_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"gameBoardFactory\"])();\n      playerGB.randomPlacement();\n      renderBoard();\n    });\n    shipStorageDiv.appendChild(randomBtn);\n\n    const readyBtn = document.createElement('button');\n    readyBtn.innerHTML = 'Ready';\n    readyBtn.id = 'ready-btn';\n    readyBtn.classList = 'btn btn-block btn-success mb-2';\n    readyBtn.style = 'background-color: white; color: #28a745;';\n    readyBtn.addEventListener('click', () => {\n      if (playerGB.areShipsPlaced()) {\n        shipStorageDiv.style.display = 'none';\n        renderBoard(player);\n        renderBoard(player, attackShipCell, true);\n        const instructions = document.getElementById('instructions');\n        instructions.innerHTML = 'Click on any given cell on the right board to attack.';\n      } else {\n        alert('Place all of your ships before starting the game.');\n      }\n    });\n    shipStorageDiv.appendChild(readyBtn);\n\n    const resetBtn = document.createElement('button');\n    resetBtn.innerHTML = 'Reset';\n    resetBtn.id = 'reset-btn';\n    resetBtn.classList = 'btn btn-block btn-secondary mb-2';\n    resetBtn.style = 'background-color: white; color: #6c757d';\n    resetBtn.addEventListener('click', () => {\n      window.location.reload();\n    });\n    shipStorageDiv.appendChild(resetBtn);\n  };\n\n  const renderBoard = (player, cellFunction = false, ai = false) => {\n    const currentBoard = ai ? document.getElementById('ai-gameboard') : document.getElementById('player-gameboard');\n    currentBoard.innerHTML = '';\n    const board = ai ? aiGB : playerGB;\n    currentBoard.classList = 'col-5 m-2';\n\n    for (let i = 0; i <= 10; i++) {\n      const row = document.createElement('div');\n      if (i === 0) {\n        for (let k = 0; k <= 10; k++) {\n          const cell = document.createElement('div');\n          if (k !== 0) {\n            cell.innerHTML = String.fromCharCode(64 + k);\n            cell.classList = 'text-center';\n          }\n          row.appendChild(cell);\n        }\n        row.classList = 'letter-row cellrow';\n      } else {\n        row.classList = 'cellrow';\n      }\n      currentBoard.appendChild(row);\n\n      if (i !== 0) {\n        for (let j = 0; j <= 10; j++) {\n\t        const cell = document.createElement('div');\n          if (j !== 0) {\n\t\t        cell.setAttribute('data-x', i);\n            cell.setAttribute('data-y', j);\n\n            if (typeof (board.body[i][j]) === 'object') {\n              if (!ai && board.body[i][j].status) {\n                cell.classList = 'ship-display';\n              } else if (!board.body[i][j].status) {\n                cell.classList = 'attack-display';\n                cell.innerHTML = 'X';\n              } else if (ai && board.body[i][j].status) {\n                cell.classList = 'cellcol';\n              }\n            } else if (board.body[i][j] === 'miss') {\n              cell.classList = 'miss-display';\n              cell.innerHTML = 'M';\n            } else {\n              cell.classList = 'cellcol';\n            }\n          } else if (j === 0 && i !== 0) {\n            cell.innerHTML = i;\n          }\n\n          row.appendChild(cell);\n          const x = parseInt(cell.getAttribute('data-x'));\n          const y = parseInt(cell.getAttribute('data-y'));\n          if (cellFunction !== false) {\n            cell.addEventListener('click', () => {\n              cellFunction(board, x, y, player, ai);\n            });\n          }\n        }\n      }\n    }\n\n    currentBoard.addEventListener('mouseover', () => {\n      if (ai || currentShip) {\n        currentBoard.style.cursor = 'crosshair';\n      } else {\n        currentBoard.style.cursor = 'auto';\n      }\n    });\n\n    document.getElementById('play-again-btn').addEventListener('click', () => {\n      window.location.reload();\n    });\n  };\n\n  const placeShipCell = (board, x, y, player, ai = false) => {\n    if (!currentShip && !ai) {\n      alert('Select a ship from the left menu before!');\n    } else if (board.placeShip(currentShip, x, y)) {\n      const shipSize = currentShip.body[1].shipLength;\n      const usedShip = document.getElementById(`ship-${shipSize}`);\n      usedShip.style.visibility = 'hidden';\n      currentShip = false;\n      renderBoard(player, placeShipCell);\n    } else {\n      alert('This is an invalid position.');\n    }\n  };\n\n  const attackShipCell = (board, x, y, player, ai = false) => {\n    const playerBoard = document.getElementById('player-gameboard');\n    playerBoard.innerHTML = '';\n    const aiBoard = document.getElementById('ai-gameboard');\n    aiBoard.innerHTML = '';\n\n    if (player && ai) {\n      if (player.attack(x, y, board) === 'miss') {\n        let aiHit = 'hit';\n        while (aiHit === 'hit') {\n          setTimeout(() => {}, 2000);\n          aiHit = aiUser.attack(playerGB);\n\n          if (playerGB.isAllSunk()) {\n            renderBoard(player);\n            renderBoard(player, false, true);\n            instructions.innerHTML = 'AI WINS';\n            document.getElementById('play-again-btn').classList = 'btn btn-success mt-5 mr-5';\n          }\n        }\n      }\n    }\n    if (aiGB.isAllSunk()) {\n      renderBoard(player);\n      renderBoard(player, false, true);\n      instructions.innerHTML = 'YOU WIN';\n      document.getElementById('play-again-btn').classList = 'btn btn-success mt-5 mr-5';\n    } else {\n      renderBoard(player);\n      renderBoard(player, attackShipCell, true);\n    }\n  };\n\n  const displayResult = (winner) => {\n    if (winner === 'player') {\n      alert('You have won!');\n    } else {\n      alert('You have lost!');\n    }\n    window.location.reload();\n  };\n\n\n  return {\n    renderShipStorage, get currentShip() { return currentShip; }, renderBoard, renderNav, attackShipCell, placeShipCell,\n  };\n\n  // const isOver = () => {\n  //   if (playerGB.attacksCounter === 15) {\n  //     // render results 'you lost'\n  //   } else if (aiGB.attacksCounter === 15) {\n  //     // render results 'you won!'\n  //   }\n  // }\n};\n\n\n\n\n//# sourceURL=webpack:///./src/render.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! exports provided: shipFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shipFactory\", function() { return shipFactory; });\nconst shipFactory = (length) => {\n  const body = {};\n  let direction = 'horizontal';\n\n  for (let i = 1; i <= length; i++) {\n    body[i] = { status: true, bodyIndex: i, shipLength: length };\n  }\n\n  const hit = (index) => {\n    body[index].status = false;\n  };\n\n  const isSunk = () => {\n    for (let i = 1; i <= length; i++) {\n      if (body[i].status) {\n        return false;\n      }\n    }\n    return true;\n  };\n\n  const setDirection = (newDirection) => {\n    direction = newDirection;\n  };\n\n\n  return {\n    body,\n    hit,\n    isSunk,\n    get direction() { return direction; },\n    setDirection,\n  };\n};\n\n\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ })

/******/ });
