
const playerFactory = () => {
    const attack = (x,y, aiGB) => {
        aiGB.receiveAttack(x,y);
    }

    return { attack };

}

const aiFactory = () => {
    const attack = (playerGB) => {
        let validAttack = false;
        while (!validAttack) {
            let x = Math.floor(Math.random() * Math.floor(10)) + 1;
            let y = Math.floor(Math.random() * Math.floor(10)) + 1;
            validAttack = playerGB.receiveAttack(x,y);
        }
        return true;
    }
    return { attack };
}

export {playerFactory, aiFactory};