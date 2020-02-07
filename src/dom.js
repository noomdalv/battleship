const game = (ai,player,aiGB,playerGB) => {

    // start game

    const ready = () => {

        if (!playerGB.areShipsPlaced()) {
            alert('You need to place all of your ships!');
        } else {
            start(); 
        };
    };

    const render = () => {
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


