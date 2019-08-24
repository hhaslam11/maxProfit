const chai = require('chai');
const assert = chai.assert;

const maxProfit = require('../maxProfit');

describe('#maxProfit() returns the maximum trade profit given an array of prices in chronological order', () => {
  it('should return undefined if nothing is passed', () => {
    assert.isUndefined(maxProfit.maxProfit());
  });
  it('should return undefined if any item in the array is not a integer', () => {
    assert.isUndefined(maxProfit.maxProfit([1, 2, 'three', 4]));
  });
  it('should return undefined if passed a value that is not an array', () => {
    assert.isUndefined(maxProfit.maxProfit(10));
  });
  it('should return 0 if there is only one item in the array', () => {
    assert.equal(maxProfit.maxProfit([10]), 0);
  });
  it('should return 16 if passed [45, 24, 35, 31, 40, 38, 11]. (when min is on the left side, and max is on the right side)', () => {
    assert.equal(maxProfit.maxProfit([45, 24, 35, 31, 40, 38, 11]), 16);
  });
  it('should return 16 if passed [45, 40, 43, 50, 24, 38, 40]. (when min and max are both on the right side)', () => {
    assert.equal(maxProfit.maxProfit([45, 40, 43, 50, 24, 38, 40]), 16);
  });
  it('should return 16 if passed [45, 24, 40, 35, 11, 23, 20]. (when min and max are both on the left side)', () => {
    assert.equal(maxProfit.maxProfit([45, 24, 40, 35, 11, 23, 20]), 16);
  });
  
});

describe('#tradeValue() returns the trade value of two given prices', () => {
  it('should return undefined if nothing is passed', () => {
    assert.isUndefined(maxProfit.tradeValue());
  });
  it('should return 0 if only one value is passed', () => {
    assert.equal(maxProfit.tradeValue(10), 0);
  });
  it('should return undefined if values arent integers', () => {
    assert.isUndefined(maxProfit.tradeValue('ten', 'twenty'));
  });
  it('should return undefined if either value is negative', () => {
    assert.isUndefined(maxProfit.tradeValue());
  });
  it('should return 0 if buyPrice is greater than sellPrice', () => {
    assert.equal(maxProfit.tradeValue(20, 10), 0);
  });
  it('should return 10 if buyPrice is 20 and sellPrice is 30', () => {
    assert.equal(maxProfit.tradeValue(20, 30), 10);
  });
});

/*
it('', () => {

  });


*/