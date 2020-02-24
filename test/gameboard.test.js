import gameBoardFactory from '../src/gameboard';
import shipFactory from '../src/ship';
import { aiFactory } from '../src/player';

const mockGameBoard = gameBoardFactory();
const mockShip = shipFactory(1);

describe('Place ships', () => {
  test('Check if ship is placed correctly', () => {
    mockGameBoard.placeShip(mockShip, 1, 1);
    expect(mockGameBoard.body[1][1]).toEqual(mockShip.body[1]);
  });

  test('Checks if a Ship Body part is attacked', () => {
    mockGameBoard.placeShip(mockShip, 1, 1);
    mockGameBoard.receiveAttack(1, 1);
    expect(mockShip.body[1].status).toEqual(false);
    expect(mockGameBoard.body[1][1].status).toEqual(false);
  });

  test('Checks if all the ships are sunk(status: false)', () => {
    let gameOver = false;
    const ai = aiFactory();
    const mockGameBoard2 = gameBoardFactory();
    mockGameBoard2.randomPlacement();
    while (!gameOver) {
      ai.attack(mockGameBoard2);
      gameOver = mockGameBoard2.isAllSunk();
    }
    expect(mockGameBoard2.isAllSunk()).toEqual(true);
  });

  test('If areShipsPlaced checks correctly', () => {
    const randomBoard = gameBoardFactory();
    expect(randomBoard.areShipsPlaced()).toEqual(false);
    randomBoard.randomPlacement();
    expect(randomBoard.areShipsPlaced()).toEqual(true);
  });
});
