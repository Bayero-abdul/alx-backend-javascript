const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber function', () => {
  it('should round two positive numbers and return their sum', () => {
    const result = calculateNumber(1, 3);
    assert.strictEqual(result, 4);
  });

  it('should round a decimal number and a positive number and return their sum', () => {
    const result = calculateNumber(1, 3.7);
    assert.strictEqual(result, 5);
  });

  it('should round two decimal numbers and return their sum', () => {
    const result = calculateNumber(1.2, 3.7);
    assert.strictEqual(result, 5);
  });

  it('should round a decimal number and a negative number', () => {
    const result = calculateNumber(1.6, -4);
    assert.strictEqual(result, -2);
  });

  it('should round two negative numbers and return their sum', () => {
    const result = calculateNumber(-2, -5);
    assert.strictEqual(result, -7);
  });
});
