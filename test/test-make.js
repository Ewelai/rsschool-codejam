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
    assert.equal(inside(15)(2)(multiply), 30);
  });

  it("Test 4", function () {
    assert.equal(inside(15)(2)(1, 1, 2)(multiply), 60);
  });

  it("Test 5", function () {
    assert.equal(inside(5)(2)(2, 3, 4)(multiply), 240);
  });
});