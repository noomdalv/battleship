import { gameBoardFactory } from "./gameboard";

const Render = () => {

  // initialize players and gameboards

  const playerGB = gameBoardFactory();

  const shipStorageDiv = document.getElementById('ship-storage-container');

  let currentShip;

  const renderShipStorage = () => {
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
  }

  const renderPlacementBoard = () => {
    const board = document.getElementById('player-gameboard');
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
      board.appendChild(row);

			if (i !== 0) {
				for (let j = 0; j <= 10; j++) {
	        let cell = document.createElement('div');
					if (j !== 0) {
						cell.classList = 'cellcol';
		        cell.setAttribute('data-x', i);
		        cell.setAttribute('data-y', j);
					} else if (j === 0 && i !== 0){
						cell.innerHTML = i;
					}

	        row.appendChild(cell);
					cell.addEventListener('click', () => {
	          if (!currentShip) {
	            alert('Select a ship from the left menu before!');
	          } else {
	            playerGB.placeShip(currentShip, parseInt(cell.getAttribute('data-x')), parseInt(cell.getAttribute('data-y')));
	          }
	        })
				}
      }
    }
  }

  return { renderShipStorage, get currentShip() { return currentShip }, renderPlacementBoard };

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
