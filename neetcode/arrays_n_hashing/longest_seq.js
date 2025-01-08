class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    if (nums === undefined || nums.length === 0) {
      return 0;
    }

    const numsSet = new Set(nums);
    let longestSeq = 1;

    for (let i = 0; i < nums.length; i++) {
      const curr = nums[i];
      if (numsSet.has(curr - 1)) {
        continue;
      }
      let next = curr + 1;
      let currSeq = 1;
      while (numsSet.has(next)) {
        next += 1;
        currSeq += 1;
        if (currSeq > longestSeq) {
          longestSeq = currSeq;
        }
      }
    }
    return longestSeq;
  }
}
