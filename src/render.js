import { playerFactory } from "./player";
import { gameBoardFactory } from './gameboard';



const Render = () => {

  let playerGB = gameBoardFactory();
  let aiGB = gameBoardFactory(true);
  let player = playerFactory();
  aiGB.randomPlacement();

  // initialize players and gameboards

  const shipStorageDiv = document.getElementById('ship-storage-container');

  let currentShip;

  const nav = document.getElementById('nav');

  const renderNav = () => {
    let instructions = document.createElement('div');
    instructions.id = 'instructions';
    instructions.innerHTML = `Place your ships clicking on any given ship in the left box and then clicking in any given cell on the board.<br>
                              Your ship\'s \'head\' will always be positioned on the cell you clicked. To switch the direction of the ship, click<br>
                              the button at the top right corner of the left menu. When you\'re done placing all of your ships, press ready!`;
    instructions.classList = 'text-center mt-5 border border-info bg-light'
    nav.appendChild(instructions);
  };

  const renderShipStorage = () => {
    const switchDirectionBtn = document.createElement('button');
    switchDirectionBtn.innerHTML = "V";
    switchDirectionBtn.classList = "btn direction-btn float-right mt-3 mr-2"
    shipStorageDiv.appendChild(switchDirectionBtn)
    let storageContainer = document.createElement('div');
    shipStorageDiv.appendChild(storageContainer)

    for (let i = 1; i <= 5; i++) {
      let shipContainer = document.createElement('div');
      shipContainer.id = `ship-${i}`;
      shipContainer.classList = 'ship m-3';
      storageContainer.appendChild(shipContainer);

      shipContainer.addEventListener("click", () => {
        currentShip = playerGB.shipStorage[i];
        switchDirectionBtn.innerHTML = currentShip.direction === 'horizontal' ? 'V': 'H';
      })

    }


    switchDirectionBtn.addEventListener("click", () => {
      if (currentShip) {
        if (currentShip.direction === "horizontal") {
          switchDirectionBtn.innerHTML = "H";
          currentShip.switchDirection();
        } else if (currentShip.direction === "vertical"){
          switchDirectionBtn.innerHTML = "V";
          currentShip.switchDirection();
        }
      } else {
        alert("You need to select a ship first");
      }


    })

    const randomBtn = document.createElement('button');
    randomBtn.innerHTML = 'Random';
    randomBtn.id = 'random-btn'
    randomBtn.classList = 'btn btn-block btn-warning mb-2';
    randomBtn.style = 'background-color: white; color: #6c757d'
    randomBtn.addEventListener('click', () => {
      let ships = document.getElementsByClassName('ship');
      storageContainer.style.visibility = 'hidden';
      playerGB = gameBoardFactory();
      playerGB.randomPlacement();
      renderBoard();
    })
    shipStorageDiv.appendChild(randomBtn);

    const readyBtn = document.createElement('button');
    readyBtn.innerHTML = 'Ready';
    readyBtn.id = 'ready-btn'
    readyBtn.classList = 'btn btn-block btn-success mb-2';
    readyBtn.style = 'background-color: white; color: #28a745;'
    readyBtn.addEventListener('click', () => {
      if (playerGB.areShipsPlaced()) {
        shipStorageDiv.style.display = 'none';
        renderBoard();
        renderBoard(attackShipCell, true);
        let instructions = document.getElementById('instructions');
        instructions.innerHTML = 'Click on any given cell on the right board to attack.';
      } else {
        alert('Place all of your ships before starting the game.');
      };

    })
    shipStorageDiv.appendChild(readyBtn);

    const resetBtn = document.createElement('button');
    resetBtn.innerHTML = 'Reset Gameboard';
    resetBtn.id = 'reset-btn'
    resetBtn.classList = 'btn btn-block btn-secondary mb-2';
    resetBtn.style = 'background-color: white; color: #6c757d'
    resetBtn.addEventListener('click', () => {
      window.location.reload();
    })
    shipStorageDiv.appendChild(resetBtn);
  }

  const renderBoard = (cellFunction = false, ai = false) => {
    const currentBoard = ai ? document.getElementById('ai-gameboard') : document.getElementById('player-gameboard');
    currentBoard.innerHTML = '';
    const board = ai ? aiGB : playerGB;
		currentBoard.classList = "col-5 m-2";

    for (let i = 0; i <= 10; i++) {
      let row = document.createElement('div');
			if (i === 0) {
				for (let k = 0; k <=10; k++) {
					let cell = document.createElement('div');
					if (k !== 0) {
						cell.innerHTML = String.fromCharCode(64+k);
						cell.classList = "text-center";
					}
					row.appendChild(cell);
				}
				row.classList = "letter-row cellrow"
			} else {
				row.classList = 'cellrow';
			}
      currentBoard.appendChild(row);

			if (i !== 0) {
				for (let j = 0; j <= 10; j++) {
	        let cell = document.createElement('div');
					if (j !== 0) {
		        cell.setAttribute('data-x', i);
            cell.setAttribute('data-y', j);

            if (typeof(board.body[i][j]) === 'object') {
              if (!ai && board.body[i][j].status) {
                cell.classList = 'ship-display'
              } else if (!board.body[i][j].status) {
                cell.classList = 'attack-display';
              } else if (ai && board.body[i][j].status) {
								cell.classList = 'cellcol'
							}
            } else if (board.body[i][j] === 'miss') {
              cell.classList = 'miss-display';
            } else {
							cell.classList = 'cellcol';
						}

					} else if (j === 0 && i !== 0){
						cell.innerHTML = i;
					}

          row.appendChild(cell);
          let x = parseInt(cell.getAttribute('data-x'));
          let y = parseInt(cell.getAttribute('data-y'))
          if (cellFunction !== false) {
            cell.addEventListener('click', () => {
              cellFunction(currentBoard, board, x, y)
            });
          };
				}
      }
    }
  }

  const placeShipCell = (domBoard, board, x,y) => {
    if (!currentShip) {
      alert('Select a ship from the left menu before!');
    } else {
      if(board.placeShip(currentShip, x, y)) {
        let shipSize = currentShip.body[1].shipLength;
        let usedShip = document.getElementById(`ship-${shipSize}`);
        usedShip.style.visibility = 'hidden';
        renderBoard(placeShipCell);
      } else {
        alert("This is an invalid position.");
      }
    }
  }

  const attackShipCell = (domBoard, board, x,y) => {
      player.attack(x,y, aiGB);
			console.log(aiGB.body);
			domBoard.innerHTML = "";
      renderBoard(Render.attackShipCell, true);
  };


  return { renderShipStorage, get currentShip() { return currentShip }, renderBoard, renderNav, attackShipCell, placeShipCell };

  // const ready = () => {

  //   if (!playerGB.areShipsPlaced()) {
  //     alert('You need to place all of your ships!');
  //   } else {
  //     start();
  //   };
  // };

  // const isOver = () => {
  //   if (playerGB.attacksCounter === 15) {
  //     // render results 'you lost'
  //   } else if (aiGB.attacksCounter === 15) {
  //     // render results 'you won!'
  //   }
  // }

}

export { Render };
