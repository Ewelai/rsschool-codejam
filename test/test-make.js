const assert = require('assert');
const inside = require('../src/make');

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}


describe('make function', function () {
  it("Test 1", function () {
    assert.equal(inside(15)(34, 21, 666)(41)(sum), 777);
  });

  it("Test 2", function () {
    assert.equal(inside(sum), 0);
  });

  it("Test 3", function () {
    assert.equal(inside(15)(5)(multiply), 75);
  });

  it("Test 4", function () {
    assert.equal(inside(15)(5)(8, 7, 2)(multiply), 8400);
  });

  it("Test 5", function () {
    assert.equal(inside(8)(156)(1, 7, 4)(multiply), 34944);
  });
});