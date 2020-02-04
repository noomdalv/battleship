import { gameBoard } from '../src/gameboard';
import { shipFactory } from '../src/ship';

const mockGameBoard = gameBoard();

describe('GameBoard Factory', () => {
  it('Checks for current ship selected inside ship storage', () => {
		mockGameBoard.selectShip(mockGameBoard.shipStorage[4][1]);
		console.log(mockGameBoard.shipStorage[4][1]);
		console.log(mockGameBoard.currentShip);
    expect(mockGameBoard.currentShip).toEqual(shipFactory(4));
  })
});
