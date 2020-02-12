import {Render} from './render';
import { playerFactory } from './player';
import { gameBoardFactory } from './gameboard';

// randomly place ships on aiGB

let player = playerFactory();
let playerGB = gameBoardFactory();
let aiGB = gameBoardFactory();
let ui = Render(playerGB, aiGB);

ui.renderShipStorage(player);
ui.renderBoard(player, ui.placeShipCell);
ui.renderNav();
