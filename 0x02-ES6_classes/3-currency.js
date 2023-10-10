export default class Currency {
  constructor(code, name) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof code === 'string') this._code = code;
    else throw new TypeError('Code must be a string');

    // eslint-disable-next-line no-underscore-dangle
    if (typeof name === 'string') this._name = name;
    else throw new TypeError('Name must be a string');
  }

  displayFullCurrency() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._name} (${(this._code)})`;
  }
}
