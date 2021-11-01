const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  
  it("returns [4, 5] for [3, 4, 5]", () => {
    assert.deepEqual(tail([3, 4, 5]), [4, 5]);
  });


});

