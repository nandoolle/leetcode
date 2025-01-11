function generateParenthesis(n) {
  const result = new Set();
  const curr = [];
  let openCount = 0;
  let closeCount = 0;

  function backtrack(openCount, closeCount) {
    if (openCount === n && closeCount === n) {
      result.add(curr.join(''));
      return;
    }
    if (openCount < n) {
      curr.push('(');
      backtrack(openCount + 1, closeCount);
      curr.pop();
    }
    if (openCount > closeCount) {
      curr.push(')');
      backtrack(openCount, closeCount + 1);
      curr.pop();
    }
  }

  backtrack(openCount, closeCount);
  return result;
}

console.log(generateParenthesis(4));
