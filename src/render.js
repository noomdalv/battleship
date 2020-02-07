import { gameBoardFactory } from "./gameboard";

const Render = () => {

  // initialize players and gameboards

  const playerGB = gameBoardFactory();

  const shipStorageDiv = document.getElementById('ship-storage-container');
  shipStorageDiv.classList = 'col-6'
  
  let currentShip;
  
  const renderShipStorage = () => {
    const switchDirectionBtn = document.createElement('button');
    switchDirectionBtn.innerHTML = "V";
    switchDirectionBtn.classList = "btn btn-primary float-right mt-2 mr-2"
    shipStorageDiv.appendChild(switchDirectionBtn)

    for (let i = 1; i <= 5; i++) {
      let shipContainer = document.createElement('div');
      shipContainer.id = `ship-${i}`;
      shipContainer.classList = 'ship m-3 border border-primary';
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
    board.classList = 'container col-6';
    for (let i = 1; i <= 10; i++) {
      let row = document.createElement('div');
      row.classList = 'row';
      board.appendChild(row);
      for (let j = 1; j <= 10; j++) {
        let cell = document.createElement('div');
        cell.classList = 'col cell border border-secondary';
        cell.setAttribute('data-x', i);
        cell.setAttribute('data-y', j);
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