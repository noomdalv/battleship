const shipFactory = (length) => {

  let body = {};
	let direction = "horizontal";

  for (let i = 1; i <= length; i++) {
    body[i] = {status: true, bodyIndex: i, shipLength: length};
  }

  const hit = (index) => {
    body[index].status = false;
  };

  const isSunk = () => {
    for (let i = 1; i <= length; i++) {
      if (body[i].status) {
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
    }
  };



  return { body, hit, isSunk, get direction() { return direction},
           switchDirection };
}

export { shipFactory };
