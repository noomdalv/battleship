import { gameBoard } from '../src/gameboard';
import { shipFactory } from '../src/ship';

const mockGameBoard = gameBoard();
const mockShip = shipFactory(2);

describe('Place ships', () => {
  test('Checks for current ship selected inside ship storage', () => {
		mockGameBoard.selectShip(mockShip);
    expect(mockGameBoard.currentShip).toMatchObject(mockShip);
  })

  test('Check if space is available to place the ship', () => {
    expect(mockGameBoard.spaceAvailable(mockShip, 10, 1)).toEqual(false);
  })
});
