import util from 'util';

export default class Airport {
  constructor(name, code) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof code === 'string') this._code = code;
    else throw new TypeError('Code must be a string');

    // eslint-disable-next-line no-underscore-dangle
    if (typeof name === 'string') this._name = name;
    else throw new TypeError('Name must be a string');
  }

  // getter for code
  get code() {
    // eslint-disable-next-line no-underscore-dangle
    return this._code;
  }

  // setter for code
  set code(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof value === 'string') this._code = value;
    else throw new TypeError('Code must be a string');
  }

  // getter for name
  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  // setter for name
  set name(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof value === 'string') this._name = value;
    else throw new TypeError('Name must be a string');
  }

  [util.inspect.custom]() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this.constructor.name} ${this._code} { _name: '${this._name}', _code: '${this._code}' }`;
  }

  toString() {
    // eslint-disable-next-line no-underscore-dangle
    return `[object ${this._code}]`;
  }
}
