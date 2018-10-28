const assert = require('assert');
const inside = require('./make');
const sumOfOther = require('./sum-of-other');

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

describe('sumOfOther', function () {
  it('Test 1', function () {
      assert.equal(JSON.stringify(sumOfOther([2, 3, 4, 1])), JSON.stringify([8, 7, 6, 9]));
  });

  it('Test 2', function () {
      assert.notEqual(JSON.stringify(sumOfOther([2, 3, 4, 0])), JSON.stringify([8, 7, 6, 9]));
  });

  it('Test 3', () => {
      assert.equal(sumOfOther([1, 2]).length, 2);
      assert.equal(sumOfOther(['a', 'b', 'c']).length, 3);
  });

  it ('Test 4', () => {
      assert.equal(sumOfOther([]).length, 0);
  });

  it('Test 5', () => {
      assert.deepEqual(sumOfOther([1, 2]), [2, 1]);
      assert.deepEqual(sumOfOther([1, 2, 3, 4, 5]), [14, 13, 12, 11, 10]);
      assert.deepEqual(sumOfOther(['abc', 'def']), ['def', 'abc']);
      assert.deepEqual(sumOfOther(['abc', 'def', 'ghi']), ['defghi', 'abcghi', 'abcdef']);
  });
});