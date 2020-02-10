import {Render} from './render';
import {playerFactory, aiFactory} from './player'
import { gameBoardFactory } from './gameboard';

let playerGB = gameBoardFactory();
let aiGB = gameBoardFactory(true);
// randomly place ships on aiGB

let initGame = Render();

initGame.renderShipStorage(playerGB);
initGame.renderBoard(playerGB, initGame.placeShipCell);
initGame.renderNav();


// render gameboard
