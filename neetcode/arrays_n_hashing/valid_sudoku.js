const trueBoard =
  [["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

const falseBoard =
  [["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "1", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

function isValidSudoku(board) {
  const rows = Array.from({ length: 9 }, () => new Set());
  const columns = Array.from({ length: 9 }, () => new Set());
  const squares = Array.from({ length: 9 }, () => new Set());

  /* rows check */
  for (let i = 0; i < 9; i++) {
    const filteredCurrRow = board[i].filter((val) => val !== '.');
    filteredCurrRow.forEach(rows[i].add, rows[i]);

    if (rows[i].size !== filteredCurrRow.length) {
      return false;
    }
  }

  /* columns check */
  const filteredColumns = Array.from({ length: 9 }, () => new Array());
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const currCell = board[i][j];

      if (currCell !== '.') {
        columns[j].add(currCell);
        filteredColumns[j].push(currCell)
      }
    }
  }
  for (let i = 0; i < 9; i++) {
    if (columns[i].size !== filteredColumns[i].length) {
      return false;
    }
  }

  /* squares check */
  const filteredSquares = Array.from({ length: 9 }, () => new Array());
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const squareCurrIndex = Math.floor((i / 3)) * 3 + Math.floor((j / 3));
      const currCell = board[i][j];

      if (currCell !== '.') {
        squares[squareCurrIndex].add(currCell);
        filteredSquares[squareCurrIndex].push(currCell);
      }
    }
  }
  for (let i = 0; i < 9; i++) {
    if (squares[i].size !== filteredSquares[i].length) {
      return false;
    }
  }

  return true;
}

console.log(isValidSudoku(trueBoard));

console.log(isValidSudoku(falseBoard));
