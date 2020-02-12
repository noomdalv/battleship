import { aiFactory } from './player';
import { gameBoardFactory } from './gameboard';


const Render = (playerGB, aiGB) => {
  const aiUser = aiFactory();

  aiGB.randomPlacement();

  // initialize players and gameboards

  const shipStorageDiv = document.getElementById('ship-storage-container');

  let currentShip;

  const nav = document.getElementById('nav');

  const instructions = document.createElement('div');

  const renderNav = () => {
    instructions.id = 'instructions';
    instructions.innerHTML = `Place your ships clicking on any given ship in the left box and then clicking in any given cell on the board.<br>
                              Your ship's 'head' will always be positioned on the cell you clicked. To switch the direction of the ship, click<br>
                              the button at the top right corner of the left menu. When you're done placing all of your ships, press ready!`;
    instructions.classList = 'text-center mt-5 border border-info bg-light';
    nav.appendChild(instructions);
  };

  const renderShipStorage = (player) => {
    const directionImg = document.createElement('img');
    let direction = 'horizontal';
    directionImg.id = 'direction-img';
    directionImg.src = './icons/arrows-alt-h-solid.svg';
    directionImg.classList = 'float-right mt-3 mr-1';
    shipStorageDiv.appendChild(directionImg);
    const storageContainer = document.createElement('div');
    shipStorageDiv.appendChild(storageContainer);

    for (let i = 1; i <= 5; i++) {
      const shipContainer = document.createElement('div');
      shipContainer.id = `ship-${i}`;
      shipContainer.classList = 'ship m-3';
      storageContainer.appendChild(shipContainer);

      shipContainer.addEventListener('click', () => {
        currentShip = playerGB.shipStorage[i];
        currentShip.setDirection(direction);
      });
    }

    directionImg.addEventListener('click', () => {
      if (direction === 'horizontal') {
        if (currentShip) {
          currentShip.setDirection('vertical');
        }
        directionImg.src = './icons/arrows-alt-v-solid.svg';
        direction = 'vertical';
	    } else if (direction === 'vertical') {
        if (currentShip) {
          currentShip.setDirection('horizontal');
        }
        directionImg.src = './icons/arrows-alt-h-solid.svg';
        direction = 'horizontal';
	    }
    });

    const randomBtn = document.createElement('button');
    randomBtn.innerHTML = 'Random';
    randomBtn.id = 'random-btn';
    randomBtn.classList = 'btn btn-block btn-warning mb-2';
    randomBtn.style = 'background-color: white; color: black;';
    randomBtn.addEventListener('click', () => {
      storageContainer.style.visibility = 'hidden';
      playerGB = gameBoardFactory();
      playerGB.randomPlacement();
      renderBoard();
    });
    shipStorageDiv.appendChild(randomBtn);

    const readyBtn = document.createElement('button');
    readyBtn.innerHTML = 'Ready';
    readyBtn.id = 'ready-btn';
    readyBtn.classList = 'btn btn-block btn-success mb-2';
    readyBtn.style = 'background-color: white; color: #28a745;';
    readyBtn.addEventListener('click', () => {
      if (playerGB.areShipsPlaced()) {
        shipStorageDiv.style.display = 'none';
        renderBoard(player);
        renderBoard(player, attackShipCell, true);
        const instructions = document.getElementById('instructions');
        instructions.innerHTML = 'Click on any given cell on the right board to attack.';
      } else {
        alert('Place all of your ships before starting the game.');
      }
    });
    shipStorageDiv.appendChild(readyBtn);

    const resetBtn = document.createElement('button');
    resetBtn.innerHTML = 'Reset';
    resetBtn.id = 'reset-btn';
    resetBtn.classList = 'btn btn-block btn-secondary mb-2';
    resetBtn.style = 'background-color: white; color: #6c757d';
    resetBtn.addEventListener('click', () => {
      window.location.reload();
    });
    shipStorageDiv.appendChild(resetBtn);
  };

  const renderBoard = (player, cellFunction = false, ai = false) => {
    const currentBoard = ai ? document.getElementById('ai-gameboard') : document.getElementById('player-gameboard');
    currentBoard.innerHTML = '';
    const board = ai ? aiGB : playerGB;
    currentBoard.classList = 'col-5 m-2';

    for (let i = 0; i <= 10; i++) {
      const row = document.createElement('div');
      if (i === 0) {
        for (let k = 0; k <= 10; k++) {
          const cell = document.createElement('div');
          if (k !== 0) {
            cell.innerHTML = String.fromCharCode(64 + k);
            cell.classList = 'text-center';
          }
          row.appendChild(cell);
        }
        row.classList = 'letter-row cellrow';
      } else {
        row.classList = 'cellrow';
      }
      currentBoard.appendChild(row);

      if (i !== 0) {
        for (let j = 0; j <= 10; j++) {
	        const cell = document.createElement('div');
          if (j !== 0) {
		        cell.setAttribute('data-x', i);
            cell.setAttribute('data-y', j);

            if (typeof (board.body[i][j]) === 'object') {
              if (!ai && board.body[i][j].status) {
                cell.classList = 'ship-display';
              } else if (!board.body[i][j].status) {
                cell.classList = 'attack-display';
                cell.innerHTML = 'X';
              } else if (ai && board.body[i][j].status) {
                cell.classList = 'cellcol';
              }
            } else if (board.body[i][j] === 'miss') {
              cell.classList = 'miss-display';
              cell.innerHTML = 'M';
            } else {
              cell.classList = 'cellcol';
            }
          } else if (j === 0 && i !== 0) {
            cell.innerHTML = i;
          }

          row.appendChild(cell);
          const x = parseInt(cell.getAttribute('data-x'), 10);
          const y = parseInt(cell.getAttribute('data-y'), 10);
          if (cellFunction !== false) {
            cell.addEventListener('click', () => {
              cellFunction(board, x, y, player, ai);
            });
          }
        }
      }
    }

    currentBoard.addEventListener('mouseover', () => {
      if (ai || currentShip) {
        currentBoard.style.cursor = 'crosshair';
      } else {
        currentBoard.style.cursor = 'auto';
      }
    });

    document.getElementById('play-again-btn').addEventListener('click', () => {
      window.location.reload();
    });
  };

  const placeShipCell = (board, x, y, player, ai = false) => {
    if (!currentShip && !ai) {
      alert('Select a ship from the left menu before!');
    } else if (board.placeShip(currentShip, x, y)) {
      const shipSize = currentShip.body[1].shipLength;
      const usedShip = document.getElementById(`ship-${shipSize}`);
      usedShip.style.visibility = 'hidden';
      currentShip = false;
      renderBoard(player, placeShipCell);
    } else {
      alert('This is an invalid position.');
    }
  };

  const attackShipCell = (board, x, y, player, ai = false) => {
    const playerBoard = document.getElementById('player-gameboard');
    playerBoard.innerHTML = '';
    const aiBoard = document.getElementById('ai-gameboard');
    aiBoard.innerHTML = '';

    if (player && ai) {
      if (player.attack(x, y, board) === 'miss') {
        let aiHit = 'hit';
        while (aiHit === 'hit') {
          setTimeout(() => {}, 2000);
          aiHit = aiUser.attack(playerGB);

          if (playerGB.isAllSunk()) {
            renderBoard(player);
            renderBoard(player, false, true);
            instructions.innerHTML = 'AI WINS';
            document.getElementById('play-again-btn').classList = 'btn btn-success mt-5 mr-5';
          }
        }
      }
    }
    if (aiGB.isAllSunk()) {
      renderBoard(player);
      renderBoard(player, false, true);
      instructions.innerHTML = 'YOU WIN';
      document.getElementById('play-again-btn').classList = 'btn btn-success mt-5 mr-5';
    } else {
      renderBoard(player);
      renderBoard(player, attackShipCell, true);
    }
  };


  return {
    renderShipStorage, get currentShip() { return currentShip; }, renderBoard, renderNav, attackShipCell, placeShipCell,
  };
};

export { Render };
