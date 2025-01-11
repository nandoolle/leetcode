function generateParenthesis(n) {
  const result = [];
  let openCount = 0;
  let closeCount = 0;

  function backtrack(openN, closedN, n, result, stack) {
    if (openN === closedN && openN === n) {
      result.push(stack);
      return;
    }

    if (openN < n) {
      backtrack(openN + 1, closedN, n, result, stack + '(');
    }
    if (closedN < openN) {
      backtrack(openN, closedN + 1, n, result, stack + ')');
    }
  }

  backtrack(openCount, closeCount, n, result, '');
  return result;
}

console.log(generateParenthesis(4));
