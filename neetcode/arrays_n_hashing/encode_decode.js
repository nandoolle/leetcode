function encode(strs) {
  if (strs === undefined || strs.length === 0) {
    return [];
  }

  return strs.map((str) => {
    return str.length + '#' + str
  }).join('');
}

function decode(str) {
  if (str === undefined || str.length === 0) {
    return [];
  }

  let resultArray = [];

  while (str.length > 0) {
    let count = 0;
    let wordLengthStr = '';

    while (str.charAt(count) !== '#') {
      let currChar = str.charAt(count);
      if (currChar === '#') {
        break;
      }
      wordLengthStr = wordLengthStr.concat(currChar);
      count += 1;
    }

    let wordLength = Number(wordLengthStr);
    let padding = wordLengthStr.length + 1;

    let resultWord = str.slice(padding, wordLength + padding);

    resultArray.push(resultWord);

    str = str.slice(padding + resultWord.length, str.length);
  }
  return resultArray;
}

console.log(
  decode(encode(["we", "say", ":", "yes"]))
);

console.log(
  decode(encode([]))
);


