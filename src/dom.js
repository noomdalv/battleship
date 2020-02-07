const game = (ai, player, aiGB, playerGB) => {

  // start game

	const shipStorageDiv = document.getElementById('ship-storage-container');

  const ready = () => {

    if (!playerGB.areShipsPlaced()) {
      alert('You need to place all of your ships!');
    } else {
      start();
    };
  };

  const render = () => {
		const renderShipStorage = () => {
			for (let i = 1; i <= 5; i++) {
				let shipContainer = document.createElement('div');
				shipContainer.id = `ship-${i}`;
				shipContainer.classList = 'ship h-15 w-15 border border-primary';
				shipStorageDiv.appendChild(shipContainer);
			}
		}


    // render gameboards

  }


  const isOver = () => {
    if (playerGB.attacksCounter === 15) {
      // render results 'you lost'
    } else if (aiGB.attacksCounter === 15) {
      // render results 'you won!'
    }
  }





}
