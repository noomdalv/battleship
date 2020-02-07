import { gameBoardFactory } from "./gameboard";
import { playerFactory, aiFactory } from "./player";

// initialize players and gameboards

const playerGB = gameBoardFactory();
const aiGB = gameBoardFactory();
const player = playerFactory();
const ai = aiFactory();

// randomly place ships on aiGB

aiGB.randomPlacement();


// render gameboard




