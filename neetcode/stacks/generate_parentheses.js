function generateParenthesis(n) {
  const result = new Set();
  const curr = [];
  let openCount = 0;
  let closeCount = 0;

  function backtrack(openCount, closeCount) {
    // by cheking the counts dont pass N we garantee that the number
    // of valid pairs dont passes the N 
    if (openCount === n && closeCount === n) {
      // here we can assume that we reached one the leaves fo our decision
      // so we add the result to the result list 
      result.add(curr.join(''));
      // by only returning here we garantee that all possible 
      // combinations have been discovered
      return;
    }
    // those 2 conditions bellow garantee that all possible
    // combinations will be build, no matter the order
    if (openCount < n) {
      curr.push('(');
      backtrack(openCount + 1, closeCount);
      // here we pop the last char inserted onto our global variable;
      // we only need to pop one at a time and the recursive call 
      // unwinding makes sure make sure the global var was emptied  
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
