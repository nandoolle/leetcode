/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) {
    return [1]
  }

  if (rowIndex === 1) {
    return [1, 1]
  }

  return buildTree(rowIndex, [[1], [1, 1]]).at(-1)
};

const buildTree = (index, arr) => {

  if (index <= 1) {
    return arr
  }

  arr.push(calculateRow([1], arr.at(-1)))

  buildTree(index - 1, arr);
  return arr

}

const calculateRow = (currRow, prevRow) => {
  if (prevRow.length) {
    const curr = prevRow.shift();
    const result = prevRow[0] ? curr + prevRow[0] : 1;
    currRow.push(result)
    return calculateRow(currRow, prevRow ?? [])
  }
  return currRow;
}
