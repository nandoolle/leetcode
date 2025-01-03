class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const filteredNums = nums.filter((curr, index, arr) => {
      return arr.indexOf(curr) !== index
    });

    return filteredNums.length > 0;
  }
}

