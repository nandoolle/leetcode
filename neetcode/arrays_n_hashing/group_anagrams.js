const strs = ["bdddddddddd", "bbbbbbbbbbc"];

const groupAnagrams = (strs) => {
  const result = {};

  for (let str of strs) {
    const charCount = new Array(26).fill(0);

    for (let char of str) {
      charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }
    const index = charCount.join(',');
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(str);
  }
  const finalResult = Object.values(result);

  console.log(finalResult);

  return finalResult;
}

groupAnagrams(strs);
