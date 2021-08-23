const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is found horizontally, left to right", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is found horizontally, right to left", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'U', 'L', 'A', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'VALUES');

    assert.isTrue(result);
  });

  it("should return true if the word is found vertically, top to bottom", function() {
    const result = wordSearch([
      ['A', 'W', 'A', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'R', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'I', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'E', 'L', 'A', 'V', 'R', 'G'],
      ['W', 'H', 'L', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'L', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'E', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ARIELLE');

    assert.isTrue(result);
  });

  it("should return true if the word is found vertically, bottom to top", function() {
    const result = wordSearch([
      ['A', 'W', 'A', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'R', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'I', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'E', 'L', 'A', 'V', 'R', 'G'],
      ['W', 'H', 'L', 'S', 'Y', 'C', 'R', 'L'],
      ['B', 'F', 'A', 'E', 'N', 'I', 'Y', 'B'],
      ['U', 'B', 'M', 'W', 'A', 'G', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'A', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'M', 'A', 'L'],
    ], 'MAGIC');


    assert.isTrue(result);
  });
});
