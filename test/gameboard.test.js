import { gameBoard } from '../src/gameboard';
import { shipFactory } from '../src/ship';

const mockGameBoard = gameBoard();
const mockShip = shipFactory(1);

describe('Place ships', () => {
  test('Checks for current ship selected inside ship storage', () => {
		mockGameBoard.selectShip(mockShip);
    expect(mockGameBoard.currentShip).toMatchObject(mockShip);
  })

  test('Check if space is available to place the ship', () => {
    expect(mockGameBoard.spaceAvailable(mockShip, 10, 1)).toEqual(true);
  })

  test('Check if ship is placed correctly', () => {
    mockGameBoard.placeShip(mockShip, 1, 1);
    expect(mockGameBoard.body[1][1]).toEqual(mockShip.body[1]);
  })

  test('Checks if a Ship Body part is attacked', () => {
		mockGameBoard.placeShip(mockShip, 1, 1);
    mockGameBoard.receiveAttack(1,1);
		expect(mockShip.body[1].status).toEqual(false);
    expect(mockGameBoard.body[1][1].status).toEqual(false);
  })

	test('Checks if all the ships are sunk(status: false)', () => {
		for (let i = 1; i <= mockGameBoard.shipStorage.length; i++) {
			mockGameBoard.shipStorage[i].status === false
		}
		expect(mockGameBoard.isSunkAll()).toEqual(true);
	})
});
