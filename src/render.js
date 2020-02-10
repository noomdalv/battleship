import { playerFactory } from "./player";

const Render = () => {

  // initialize players and gameboards

  const shipStorageDiv = document.getElementById('ship-storage-container');

  let currentShip;

  const nav = document.getElementById('nav');

  const renderNav = () => {
    let instructions = document.createElement('div');
    instructions.innerHTML = 'Place your ships.';
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
  }


  const renderBoard = (board,cellFunction) => { 
    
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
          });
				}
      }
    }
  }


  const placeShipCell = (x,y) => {
    if (!currentShip) {
      alert('Select a ship from the left menu before!');
    } else { 
      board.placeShip(currentShip, x, y);
      renderBoard(board,placeShipCell);
    }
  }

  const attackShipCell = (x,y) => {
    if (board.isAI) {
      player.attack(x,y);
      renderBoard(board,attackShipCell);
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
