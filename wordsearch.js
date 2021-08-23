// Worked with Chioma for the Pair Programming - Word Search Challenge

const transpose = matrix => {
  // transposes the matrix across the diagonal
  return matrix[0].map((col, colIndex) => matrix.map((row, rowIndex) => matrix[rowIndex][colIndex]));
};

const wordSearch = (letters, word) => {
  // check to see if the word is horizontal, left to right
  let horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  // check to see if the word is horizontal, right to left
  horizontalJoin = letters.map(ls => ls.reverse().join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  // transpose the array to check for vertical matches
  const transposedLetters = transpose(letters);

  // check to see if the word is vertical, top to bottom
  let verticalJoin = transposedLetters.map(ls => ls.join(''));
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  // check to see if the word is vertical, bottom to top
  verticalJoin = transposedLetters.map(ls => ls.reverse().join(''));
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;