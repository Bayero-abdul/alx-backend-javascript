export default class Building {
  constructor(sqft) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof sqft === 'number') this._sqft = sqft;
    else throw new TypeError('Sqft must be a number');

    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // getter for sqft
  get sqft() {
    // eslint-disable-next-line no-underscore-dangle
    return this._sqft;
  }

  // setter for sqft
  set sqft(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof value === 'number') this._sqft = value;
    else throw new TypeError('Sqft must be a number');
  }
}
