/* eslint-disable no-underscore-dangle */
export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand === 'string') this._brand = brand;
    else this._brand = undefined;

    if (typeof motor === 'string') this._motor = motor;
    else this._motor = undefined;

    if (typeof color === 'string') this._color = color;
    else this._color = undefined;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    const returnValue = new Species();
    return returnValue;
  }
}
