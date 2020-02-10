import { playerFactory } from "./player";

const Render = () => {

  // initialize players and gameboards

  const shipStorageDiv = document.getElementById('ship-storage-container');

  let currentShip;

  const nav = document.getElementById('nav');

  const renderNav = () => {
    let instructions = document.createElement('div');
    instructions.innerHTML = `Place your ships clicking on any given ship in the left box and then clicking in any given cell on the board.<br>
                              Your ship\'s \'head\' will always be positioned on the cell you clicked. To switch the direction of the ship, click<br> 
                              the button at the top right corner of the left menu. When you\'re done placing all of your ships, press ready!`;
    instructions.classList = 'text-center mt-5 border border-info bg-light'
    nav.appendChild(instructions);
  };

  const renderShipStorage = (board) => {
    const switchDirectionBtn = document.createElement('button');
    switchDirectionBtn.innerHTML = "V";
    switchDirectionBtn.classList = "btn direction-btn float-right mt-3 mr-2"
    shipStorageDiv.appendChild(switchDirectionBtn)

    for (let i = 1; i <= 5; i++) {
      let shipContainer = document.createElement('div');
      shipContainer.id = `ship-${i}`;
      shipContainer.classList = 'ship m-3';
      shipStorageDiv.appendChild(shipContainer);

      shipContainer.addEventListener("click", () => {
        currentShip = board.shipStorage[i];
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

    const readyBtn = document.createElement('button');
    readyBtn.innerHTML = 'Ready';
    readyBtn.id = 'ready-btn'
    readyBtn.classList = 'btn btn-block btn-success mb-2';
    readyBtn.style = 'background-color: white; color: #28a745;'
    readyBtn.addEventListener('click', () => {
      // start game
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

  const renderBoard = (board, cellFunction) => {

    const currentBoard = board.isAI ? document.getElementById('ai-gameboard') : document.getElementById('player-gameboard');

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
              if ( !board.isAi && board.body[i][j].status) {
                cell.classList = 'ship-display'
              } else {
                cell.classList = 'attack-display';
              };
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
          cell.addEventListener('click', () => {
						console.log(board.body);
						cellFunction(currentBoard, board, x, y)
          });
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
        domBoard.innerHTML = "";
        renderBoard(board, placeShipCell);
      } else {
        alert("This is an invalid position.");
      }
    }
  }

  const attackShipCell = (board, x,y) => {
    if (board.isAI) {
      player.attack(x,y);
			domBoard.innerHTML = "";
      renderBoard(board, attackShipCell);
    }
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
