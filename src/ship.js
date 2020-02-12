const shipFactory = (length) => {
  const body = {};
  let direction = 'horizontal';

  for (let i = 1; i <= length; i += 1) {
    body[i] = { status: true, bodyIndex: i, shipLength: length };
  }

  const hit = (index) => {
    body[index].status = false;
  };

  const isSunk = () => {
    for (let i = 1; i <= length; i += 1) {
      if (body[i].status) {
        return false;
      }
    }
    return true;
  };

  const setDirection = (newDirection) => {
    direction = newDirection;
  };


  return {
    body,
    hit,
    isSunk,
    get direction() { return direction; },
    setDirection,
  };
};

export { shipFactory as default };
