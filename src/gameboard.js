import { shipFactory } from './ship';


const gameBoardFactory = () => {
  // board creation
  const body = {};

  for (let i = 1; i <= 10; i++) {
    body[i] = {};
    for (let j = 1; j <= 10; j++) {
      body[i][j] = 'empty';
    }
  }

  let attacksCounter = 0;

  // position check
  const checkPosition = (row, col) => {
    if (row === 0 || row > 10 || col === 0 || col > 10) {
      return undefined;
    }
    return body[row][col];
  };

  // ship storage
  const shipStorage = {
    1: shipFactory(1),
    2: shipFactory(2),
    3: shipFactory(3),
    4: shipFactory(4),
    5: shipFactory(5),
  };


  const spaceAvailable = (ship, x, y) => {
    const shipSize = Object.keys(ship.body).length;

    if (((y - 1 + shipSize) > 10 && ship.direction === 'horizontal')
        || ((x - 1 + shipSize) > 10 && ship.direction === 'vertical')) {
      return false;
    }

    if (typeof (checkPosition(x, y)) === 'string' && ship.direction === 'horizontal') {
      for (let i = y - 1; i <= (y + shipSize); i++) {
        if (typeof (checkPosition(x, i)) !== 'string' && checkPosition(x, i) !== undefined) {
          return false;
        }
        for (let j = x - 1; j <= (x + 1); j += 2) {
          if (typeof (checkPosition(j, i)) !== 'string' && checkPosition(j, i) !== undefined) {
            return false;
          }
        }
      }
      return true;
    } if (typeof (checkPosition(x, y)) === 'string' && ship.direction === 'vertical') {
      for (let i = x - 1; i <= (x + shipSize); i++) {
        if (typeof (checkPosition(i, y)) !== 'string' && checkPosition(i, y) !== undefined) {
          return false;
        }
        for (let j = y - 1; j <= (y + 1); j += 2) {
          if (typeof (checkPosition(i, j)) !== 'string' && checkPosition(i, j) !== undefined) {
            return false;
          }
        }
      }
      return true;
    }
  };


  // ship placement
  const placeShip = (ship, x, y) => {
    const shipSize = Object.keys(ship.body).length;
    // evaluate the length of ship and direction
    let bodyCounter = 1;
    if (spaceAvailable(ship, x, y)) {
      if (ship.direction === 'horizontal') {
        if (checkPosition(x, y - 1) !== undefined) { body[x][y - 1] = 'filled'; }
        if (checkPosition(x + 1, y - 1) !== undefined) { body[x + 1][y - 1] = 'filled'; }
        if (checkPosition(x - 1, y - 1) !== undefined) { body[x - 1][y - 1] = 'filled'; }
        if (checkPosition(x, y + shipSize) !== undefined) { body[x][y + shipSize] = 'filled'; }
        if (checkPosition(x + 1, y + shipSize) !== undefined) { body[x + 1][y + shipSize] = 'filled'; }
        if (checkPosition(x - 1, y + shipSize) !== undefined) { body[x - 1][y + shipSize] = 'filled'; }


        for (let i = y; i < (y + shipSize); i++) {
          body[x][i] = ship.body[bodyCounter];
          if (checkPosition(x - 1, i) !== undefined) { body[x - 1][i] = 'filled'; }
          			if (checkPosition(x + 1, i) !== undefined) { body[x + 1][i] = 'filled'; }
          bodyCounter++;
        }
      } else {
        if (checkPosition(x - 1, y) !== undefined) { body[x - 1][y] = 'filled'; }
        if (checkPosition(x - 1, y + 1) !== undefined) { body[x - 1][y + 1] = 'filled'; }
        if (checkPosition(x - 1, y - 1) !== undefined) { body[x - 1][y - 1] = 'filled'; }
        if (checkPosition(x + shipSize, y) !== undefined) { body[x + shipSize][y] = 'filled'; }
        if (checkPosition(x + shipSize, y + 1) !== undefined) { body[x + shipSize][y + 1] = 'filled'; }
        if (checkPosition(x + shipSize, y - 1) !== undefined) { body[x + shipSize][y - 1] = 'filled'; }

        for (let i = x; i < (x + shipSize); i++) {
          body[i][y] = ship.body[bodyCounter];
          if (checkPosition(i, y + 1) !== undefined) { body[i][y + 1] = 'filled'; }
          			if (checkPosition(i, y - 1) !== undefined) { body[i][y - 1] = 'filled'; }
          bodyCounter++;
        }
	  		}
	  		return true;
    }
    return false;
  };

  const randomPlacement = () => {
    for (let i = 5; i >= 1; i--) {
      let placed = false;
      if (Math.floor(Math.random() * Math.floor(2)) === 0) {
        shipStorage[i].setDirection('vertical');
      }

      while (!placed) {
        const x = Math.floor(Math.random() * Math.floor(10)) + 1;
        const y = Math.floor(Math.random() * Math.floor(10)) + 1;
        placed = placeShip(shipStorage[i], x, y);
      }
    }
    return true;
  };

  const receiveAttack = (x, y) => {
    if (body[x][y] === 'empty' || body[x][y] === 'filled' || typeof (body[x][y]) === 'object' && body[x][y].status === true) {
      // change value to false if there's a ship

      if (typeof (body[x][y]) === 'string') {
        body[x][y] = 'miss';
        return 'miss';
      }
      body[x][y].status = false;
      shipStorage[body[x][y].shipLength].hit(body[x][y].bodyIndex);
      attacksCounter++;
      return 'hit';
    }
    // alert('You can\'t hit this spot again.');
    return false;
  };

  const isAllSunk = () => {
    if (attacksCounter === 15) {
      return true;
    }
    return false;
  };

  const areShipsPlaced = () => {
    let shipBodyCounter = 0;
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        if (typeof (body[i][j]) === 'object' && body[i][j].status) {
          shipBodyCounter++;
        }
      }
    }
    if (shipBodyCounter === 15) {
      return true;
    }
    return false;
  };

  return {
    body,
    placeShip,
    receiveAttack,
			 randomPlacement,
    isAllSunk,
    areShipsPlaced,
    get shipStorage() { return shipStorage; },
  };
};

export { gameBoardFactory };
