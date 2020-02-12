import Render from './render';
import { playerFactory } from './player';
import gameBoardFactory from './gameboard';

// randomly place ships on aiGB

const player = playerFactory();
const playerGB = gameBoardFactory();
const aiGB = gameBoardFactory();
const ui = Render(playerGB, aiGB);

ui.renderShipStorage(player);
ui.renderBoard(player, ui.placeShipCell);
ui.renderNav();
