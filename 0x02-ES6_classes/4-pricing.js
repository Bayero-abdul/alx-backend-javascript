// eslint-disable-next-line import/extensions
import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof amount === 'number') this._amount = amount;
    else throw new TypeError('Amount must be a number');

    // eslint-disable-next-line no-underscore-dangle
    if (currency instanceof Currency) this._currency = currency;
    else throw new TypeError('currency must be of type Currency');
  }

  // getter for amount
  get amount() {
    // eslint-disable-next-line no-underscore-dangle
    return this._amount;
  }

  // setter for amount
  set amount(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof value === 'number') this._amount = value;
    else throw new TypeError('Amount must be a number');
  }

  // getter for currency
  get currency() {
    // eslint-disable-next-line no-underscore-dangle
    return this._currency;
  }

  // setter for currency
  set currency(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (value instanceof Currency) this._currency = value;
    else throw new TypeError('currency must be of type Currency');
  }

  displayFullPrice() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  // eslint-disable-next-line class-methods-use-this
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') throw new TypeError('Amount must be a number');
    if (typeof conversionRate !== 'number') throw new TypeError('Conversion Rate must be a number');

    return amount * conversionRate;
  }
}
