import { gameBoardFactory } from "./gameboard";
import { playerFactory, aiFactory } from "./player";

// initialize players and gameboards

const playerGB = gameBoardFactory();
const aiGB = gameBoardFactory();
const player = playerFactory();
const ai = aiFactory();
const shipStorageDiv = document.getElementById('ship-storage-container');

// randomly place ships on aiGB

aiGB.randomPlacement();

const render = () => {
	let currentShip;

	const renderShipStorage = () => {
		const switchDirectionBtn = document.createElement('button');
		switchDirectionBtn.innerHTML = "H";
		switchDirectionBtn.classList = "btn btn-primary float-right mt-2 mr-2"
		shipStorageDiv.appendChild(switchDirectionBtn)

		for (let i = 1; i <= 5; i++) {
			let shipContainer = document.createElement('div');
			shipContainer.id = `ship-${i}`;
			shipContainer.classList = 'ship m-3 border border-primary';
			shipStorageDiv.appendChild(shipContainer);

			shipContainer.addEventListener("click", () => {
				currentShip = playerGB.shipStorage[i];
				switchDirectionBtn.innerHTML = "H";				
			})
		}


		switchDirectionBtn.addEventListener("click", () => {
			if (currentShip) {
				if (switchDirectionBtn.innerHTML === "H") {
					switchDirectionBtn.innerHTML = "V";
					currentShip.switchDirection();
				} else if (switchDirectionBtn.innerHTML === "V"){
					switchDirectionBtn.innerHTML = "H";
					currentShip.switchDirection();
				}
				console.log(currentShip);
				console.log(currentShip.direction);
			} else {
				alert("You need to select a ship first");
			}


		})
	}

	return { renderShipStorage, get currentShip() { return currentShip } };

}

let initGame = render();

initGame.renderShipStorage();


// render gameboard
