import { shipFactory } from './ship';

const gameBoard = () => {

	// board creation
	const gameBoardBody = {};

	for (let i = 1; i <= 10; i++) {
		gameBoardBody[i] = {};
		for (let j = 1; j <= 10; j++) {
			gameBoardBody[i][j] = null;
		}
	}

	//position check
	const checkCell = (row, col) => {
		return gameBoardBody[row][col];
	}

	//ship storage
	let shipStorage = {
		1: {1: shipFactory(1), 2: shipFactory(1), 3: shipFactory(1), 4: shipFactory(1)},
		2: {1: shipFactory(2), 2: shipFactory(2), 3: shipFactory(2)},
		3: {1: shipFactory(3), 2: shipFactory(3)},
		4: {1: shipFactory(4)}
	}

	//ship selection
	let currentShip;

	const selectShip = (ship) => {
		currentShip = { ship };
	}

	//change ship direction

	//ship placement
	const placeShip = (ship, position) => {

	}

	//received attack


	return { gameBoardBody, checkCell, shipStorage, placeShip, currentShip, selectShip, shipFactory }
}

let testBoard = gameBoard();

export { gameBoard };
