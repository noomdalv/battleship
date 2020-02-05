// import { shipFactory } from './ship';

const shipFactory = (length) => {

  let body = {};
	let direction = "horizontal";

  for (let i = 1; i <= length; i++) {
    body[i] = true;
  };

  const hit = (bodyCell) => {
    body[bodyCell] = false;
  };

  const isSunk = () => {
    for (let i = 0; i < Object.keys(body).length; i++) {
      if ( body[i] === true ) {
        return false;
      }
    }
    return true;
  };

  const switchDirection = () => {
    if (direction === 'horizontal') {
      direction = 'vertical';
    } else {
      direction = 'horizontal';
    };
  };



  return { body, hit, isSunk, get direction() { return direction},
           switchDirection };
}

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
		shipSize = Object.keys(ship).length;

		if (((x + shipsize) > 10 && ship.direction === "horizontal") ||
				((y + shipsize) > 10 && ship.direction === "vertical") {
			return false;
		}


		if (checkPosition(x, y) === 'empty' && ship.direction === "horizontal") {

			for (let i = 0; i < shipSize; i++) {
				if (checkposition(x, i) !== 'empty') {
					return false;
				}
			}

			return true;
		} else if (checkPosition(x, y) === 'empty' && ship.direction === "vertical") {

				for (let i = 0; i < shipSize; i++) {
					if (checkposition(i, y) !== 'empty') {
						return false;
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
		get currentShip() { return currentShip }}
}

let testBoard = gameBoard();
console.log(testBoard.gameBoardBody);
// export { gameBoard };
