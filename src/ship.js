const shipFactory = (length) => {

  let body = {};
	let direction = "horizontal";

  for (let i = 1; i <= length; i++) {
    body[i] = true;
  };

  const hit = (bodyCell) => {
    body[bodyCell] = false;
  };

  const isSunk = () => {
    for (let i = 0; i < Object.keys(body).length; i++) {
      if ( body[i] === true ) {
        return false;
      }
    }
    return true;
  };

  const switchDirection = () => {
    if (direction === 'horizontal') {
      direction = 'vertical';
    } else {
      direction = 'horizontal';
    };
  };



  return { body, hit, isSunk, get direction() { return direction},
           switchDirection };
}

export { shipFactory };
