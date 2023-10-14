export default class HolbertonClass {
  constructor(size, location) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof size === 'number') this._size = size;
    else throw new TypeError('Size must be a number');

    // eslint-disable-next-line no-underscore-dangle
    if (typeof location === 'string') this._location = location;
    else throw new TypeError('Location must be a string');
  }

  // getter for size
  get size() {
    // eslint-disable-next-line no-underscore-dangle
    return this._size;
  }

  // setter for size
  set size(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof value === 'number') this._size = value;
    else throw new TypeError('Size must be a number');
  }

  // getter for location
  get location() {
    // eslint-disable-next-line no-underscore-dangle
    return this._location;
  }

  // setter for location
  set location(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof value === 'string') this._location = value;
    else throw new TypeError('Location must be a string');
  }

  toString() {
    // eslint-disable-next-line no-underscore-dangle
    return this._location;
  }

  valueOf() {
    // eslint-disable-next-line no-underscore-dangle
    return this._size;
  }
}
