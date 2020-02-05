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
	const checkPosition = (row, col) => {
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




	const spaceAvailable = (ship, x, y) => {
		const shipSize = Object.keys(ship).length;

		if ((x - 1 + shipSize) > 10 && ship.direction === "horizontal" ||
				((y - 1 + shipSize) > 10 && ship.direction === "vertical")) {
			return false;
    };
    
    if (checkPosition(x, y) === 'empty' && ship.direction === "horizontal") {
      for (let i = y-1; i <= (y + shipSize); i++) {
				if (checkPosition(x, i) !== 'empty' || checkPosition(x, i) !== undefined) {
					return false;
        }
        for (let j = x -1; j <= (x + 1); j+= 2) {
          if (checkPosition(j,i) !== 'empty' || checkPosition(j, i) !== undefined) {
            return false;
          }
        }
			}

      return true;
      
		} else if (checkPosition(x, y) === 'empty' && ship.direction === "vertical") {

      for (let i = x-1; i <= (x + shipSize); i++) {
				if (checkPosition(i, y) !== 'empty' || checkPosition(i, y) !== undefined) {
					return false;
        }
        for (let j = y -1; j <= (y + 1); j+= 2) {
          if (checkPosition(i,j) !== 'empty' || checkPosition(i, j) !== undefined) {
            return false;
          }
        }
      }      
				return true;
		}
	}


	//ship placement
	const placeShip = (ship, position) => {

    // evaluate the length of ship and direction

    shipSize = Object.keys(ship).length;






    // nullify cells that are invalid
      // check for cells that don't exist

      //check for nearby ships


    // fill the cells with ship body starting from head of direction

	}

	//received attack


	return { gameBoardBody, checkPosition, shipStorage, placeShip, selectShip, shipFactory,
		get currentShip() { return currentShip }, spaceAvailable }
}

let testBoard = gameBoard();
console.log(testBoard.checkPosition(1,0));
export { gameBoard };
