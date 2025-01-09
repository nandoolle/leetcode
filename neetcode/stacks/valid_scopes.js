function isValid(s) {
  const opening = '[({';
  const closing = '})]';

  const checkStack = [];

  for (let i = 0; i < s.length; i++) {
    const currChar = s.charAt(i);

    if (opening.includes(currChar)) {
      checkStack.push(currChar)
    }
    if (closing.includes(currChar)) {
      const poppedChar = checkStack.pop();
      if (currChar === ']' && poppedChar !== '[') {
        return false;
      }
      if (currChar === '}' && poppedChar !== '{') {
        return false;
      }
      if (currChar === ')' && poppedChar !== '(') {
        return false;
      }
    }
  }

  return checkStack.length === 0 ? true : false;
}

const caseOne = "((";
const caseTwo = "";
const caseThree = "[(])";
const caseFour = "([{}])";

console.log(
  isValid(caseOne),
  isValid(caseTwo),
  isValid(caseThree),
  isValid(caseFour)
);
