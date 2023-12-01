const assert = require('assert');

describe('Example Test Suite', function () {
  it('should return true', function () {
    assert.strictEqual(true, true);
  });

  it('should perform another assertion', function () {
    assert.notEqual(2 + 2, 5);
  });
});

