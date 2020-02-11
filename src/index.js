import {Render} from './render';

// randomly place ships on aiGB

let game = Render();

game.renderShipStorage();
game.renderBoard(game.placeShipCell);
game.renderNav();



// render gameboard
