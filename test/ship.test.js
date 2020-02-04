import {shipFactory} from '../src/ship';

const mockShip = shipFactory(4);

describe('Ship Object', () => {
  it('Ship size should be the same as length input', () => {
    expect(Object.keys(mockShip.body).length).toEqual(4);
  });

  it('Ship body should change state when hit', () => {

    expect(mockShip.body[2]).toEqual(true);

    mockShip.hit(2);

    expect(mockShip.body[2]).toEqual(false);
  });

  it('isSunk returns true only if all the body is hit', () => {

    expect(mockShip.isSunk()).toEqual(false);

    mockShip.hit(1);
    mockShip.hit(2);
    mockShip.hit(3);
    mockShip.hit(4);

    expect(mockShip.isSunk()).toEqual(true);

  });
})
