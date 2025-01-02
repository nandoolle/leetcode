/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  let rows = grid.length;
  let cols = grid[0].length;
  let slots = rows * cols;
  let maxGold = 0;

  function explore(i, j, visitCount) {
    if (i < 0 || i >= rows || j < 0 || j >= cols) {
      return 0;
    }

    // if already found max, no need to explore further
    if (hasCoveredAllSlots) {
      return 0;
    }

    // if all slots are visited, no need to explore further
    if (visitCount === slots) {
      hasCoveredAllSlots = true;
      return 0;
    }

    if (grid[i][j] === 0) {
      return 0;
    }

    const gold = grid[i][j];
    grid[i][j] = 0;
    visitCount += 1;
    const up = explore(i - 1, j, visitCount);
    const down = explore(i + 1, j, visitCount);
    const left = explore(i, j - 1, visitCount);
    const right = explore(i, j + 1, visitCount);
    grid[i][j] = gold;

    return gold + Math.max(up, down, left, right);
  }

  let hasCoveredAllSlots = false;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] !== 0) {
        maxGold = Math.max(maxGold, explore(i, j, 0));
      }
    }
  }

  return maxGold;
};
