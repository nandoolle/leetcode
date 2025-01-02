class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length != t.length) {
      return false;
    }

    const alphabetArray = 'abcdefgihjlmopqestuvxyz'.split('');

    const sLetters = countLetter(s.split(''), alphabetArray);
    const tLetters = countLetter(t.split(''), alphabetArray);

    let result = true;

    alphabetArray.forEach((val) => {
      if (sLetters[val] != tLetters[val]) {
        result = false;
      }
    });

    return result;
  }
}

function countLetter(wordArray, alphabetArray) {
  const alphabetMap = alphabetArray.reduce(
    (prev, cur) => ({ ...prev, [cur]: 0 }),
    {}
  );
  wordArray.forEach((val) => {
    alphabetMap[val] += 1
  });
  return alphabetMap;
}

