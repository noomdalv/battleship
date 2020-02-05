import { shipFactory } from './ship';

const gameBoard = () => {

	// board creation
	const gameBoardBody = {};

	for (let i = 1; i <= 10; i++) {
		gameBoardBody[i] = {};
		for (let j = 1; j <= 10; j++) {
			gameBoardBody[i][j] = 'empty';
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
	let currentShip = {};

	const selectShip = (ship) => {
		currentShip = ship
	}

  
	//ship placement
	const placeShip = (ship, position) => {

    // evaluate the length of ship and direction

    shipSize = Object.keys(ship).length;

    if checkCell ()
    



    // nullify cells that are invalid
      // check for cells that don't exist

      //check for nearby ships


    // fill the cells with ship body starting from head of direction

	}

	//received attack


	return { gameBoardBody, checkCell, shipStorage, placeShip, selectShip, shipFactory,
		get currentShip() { return currentShip }}
}

let testBoard = gameBoard();

export { gameBoard };

