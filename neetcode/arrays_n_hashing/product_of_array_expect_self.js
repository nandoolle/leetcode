const productExpectSelf = (nums) => {
  const result = [];
  const prefix = [];
  const postfix = [];

  for (let i = 0, j = nums.length - 1; i < nums.length && j >= 0; i++, j--) {
    if (prefix.length === 0 && postfix.length === 0) {
      prefix.push(nums[i]);
      postfix.push(nums[j]);
      continue;
    }
    prefix.push(nums[i] * prefix[i - 1]);
    postfix.push(nums[j] * postfix[i - 1]);
  }
  postfix.reverse();

  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1) {
      result.push(prefix[i - 1]);
      continue;
    }
    if (i === 0) {
      result.push(postfix[i + 1]);
      continue;
    }
    result.push(prefix[i - 1] * postfix[i + 1]);
  }

  return result;
}
return result;
}
