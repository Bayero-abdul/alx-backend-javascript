// eslint-disable-next-line import/extensions
import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);

    // eslint-disable-next-line no-underscore-dangle
    if (typeof floors === 'number') this._floors = floors;
    else throw new TypeError('Floors must be a number');
  }

  // getter for floors
  get floors() {
    // eslint-disable-next-line no-underscore-dangle
    return this._floors;
  }

  // setter for floors
  set floors(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof value === 'number') this._floors = value;
    else throw new TypeError('Floors must be a number');
  }

  evacuationWarningMessage() {
    // eslint-disable-next-line no-underscore-dangle
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
