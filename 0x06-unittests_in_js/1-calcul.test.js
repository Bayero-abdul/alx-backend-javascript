const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber function', () => {
  describe('SUM operation', () => {
    it('should round two positve numbers and return their sum', () => {
      const result = calculateNumber('SUM', 1.4, 4.5);
      assert.strictEqual(result, 6);
    });

    it('should round a positive number and a negative number and return their sum', () => {
      const result = calculateNumber('SUM', 1.4, -4.5);
      assert.strictEqual(result, -3);
    });

    if('should round two negative numbers and return their sum', () => {
      const result = calculateNumber('SUM', -1.4, -4.5);
      assert.strictEqual(result, -5);
    });

    if('should round two decimal numbers and return their sum', () => {
      const result = calculateNumber('SUM', 1.2, 3.7);
      assert.strictEqual(result, 5);
    });

    it('should round two large numbers and return their sum', () => {
      const result = calculateNumber('SUM', 1000.123, 5000.789);
      assert.strictEqual(result, 6001);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should round two positive numbers and return the results of subtraction', () => {
      const result = calculateNumber('SUBTRACT', 1.4, 4.5);
      assert.strictEqual(result, -4);
    });

    it('should round a negative number and a positive number and return the result of subtraction', () => {
      const result = calculateNumber('SUBTRACT', -1.4, 4.5);
      assert.strictEqual(result, -6);
    });

    it('should round two negative numbers and return the result of subtraction', () => {
      const result = calculateNumber('SUBTRACT', -1.4, -4.5);
      assert.strictEqual(result, 3);
    });

    it('should round two decimal numbers and return the result of subtraction', () => {
      const result = calculateNumber('SUBTRACT', 1000.123, 5000.789);
      assert.strictEqual(result, -4001);
    });
  });

  describe('DIVIDE operation', () => {
    it('should round two positve numbers and return the result of division', () => {
      const result = calculateNumber('DIVIDE', 1.4, 4.5);
      assert.strictEqual(result, 0.2);
    });

    it('should round a negative number and a positive number and return the result of division', () => {
      const result = calculateNumber('DIVIDE', -1.4, 4.5);
      assert.strictEqual(result, -0.2);
    });

    it('should round two negative numbers and return the result of division', () => {
      const result = calculateNumber('DIVIDE', -1.4, -4.5);
      assert.strictEqual(result, 0.2);
    });

    it('should round two decimal numbers and return the result of division', () => {
      const result = calculateNumber('DIVIDE', 1.2, 3,7);
      assert.strictEqual(result, 0.3);
    });

    it('should round two large numbers and return the result of division', () => {
      const result = calculateNumber('DIVIDE', 1.2, 3.7);
      assert.strictEqual(result, 0.3);
    });

    it('should return "Error" if the rounded divisor is 0', () => {
      const result = calculateNumber('DIVIDE', 1.4, 0);
      assert.strictEqual(result, 'Error');
    });
  });
	
  describe('Invalid operation type', () => {
    it('should throw an error for an invalid operation type', () => {
      assert.throws(() => calculateNumber('INVALID_OPERATION', 1.4, 4.5), Error);
    });
  });

});
