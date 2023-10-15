/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/extensions
import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);

    if (typeof range === 'string') this._range = range;
    else this._range = undefined;
  }

  get range() {
    return this._range;
  }

  static get [Symbol.species]() {
    return Car;
  }
}
