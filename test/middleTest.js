
const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [1, 2, 3] for [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });


});





// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [2, 3])