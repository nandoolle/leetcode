function evalRPN(tokens) {
  const stack = [];
  for (const c of tokens) {
    if (c === '+') {
      stack.push(stack.pop() + stack.pop());
    } else if (c === '-') {
      const a = stack.pop();
      const b = stack.pop();
      stack.push(b - a);
    } else if (c === '*') {
      stack.push(stack.pop() * stack.pop());
    } else if (c === '/') {
      const a = stack.pop();
      const b = stack.pop();
      stack.push(Math.trunc(b / a));
    } else {
      stack.push(parseInt(c));
    }
  }
  return stack.pop();
}

const caseOne = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];

console.log(evalRPN(caseOne));
