const shipFactory = (length) => {

  let body = {};

  for (let i = 0; i < length; i++) {
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


  return { body, hit, isSunk };
}

export {shipFactory};

