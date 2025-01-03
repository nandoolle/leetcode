class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const numsMap = new Map();

    for (let i in nums) {
      const diff = target - nums[i];
      if (numsMap.has(diff)) {
        return [numsMap.get(diff), i];
      }

      numsMap.set(nums[i], i);
    }

    return [];
  }
}

