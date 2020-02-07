import { gameBoard } from '../src/gameboard';
import { shipFactory } from '../src/ship';
import { aiFactory, playerFactory } from '../src/player';

const mockGameBoard = gameBoard();
const mockShip = shipFactory(1);

describe('Place ships', () => {
  // test('Checks for current ship selected inside ship storage', () => {
	// 	mockGameBoard.selectShip(mockShip);
  //   expect(mockGameBoard.currentShip).toMatchObject(mockShip);
  // })
	//
  // test('Check if ship is placed correctly', () => {
  //   mockGameBoard.placeShip(mockShip, 1, 1);
  //   expect(mockGameBoard.body[1][1]).toEqual(mockShip.body[1]);
  // })
	//
  // test('Checks if a Ship Body part is attacked', () => {
	// 	mockGameBoard.placeShip(mockShip, 1, 1);
  //   mockGameBoard.receiveAttack(1,1);
	// 	expect(mockShip.body[1].status).toEqual(false);
  //   expect(mockGameBoard.body[1][1].status).toEqual(false);
  // })

	test('Checks if all the ships are sunk(status: false)', () => {
    let gameOver = false;
    let ai = aiFactory();
    let mockGameBoard2 = gameBoard();
    mockGameBoard2.randomPlacement();
    while (!gameOver) {			
      ai.attack(mockGameBoard2)
      gameOver = mockGameBoard2.isSunkAll();
    }
		expect(mockGameBoard2.isSunkAll()).toEqual(true);
  })

});
