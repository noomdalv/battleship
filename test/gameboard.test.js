import { gameBoard } from '../src/gameboard';
import { shipFactory } from '../src/ship';

const mockGameBoard = gameBoard();
const mockShip = shipFactory(4);

describe('GameBoard Factory', () => {
  test('Checks for current ship selected inside ship storage', () => {
		mockGameBoard.selectShip(mockShip);
    expect(mockGameBoard.currentShip).toMatchObject(mockShip);
  })
});
