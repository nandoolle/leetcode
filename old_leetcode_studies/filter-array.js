/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = (nums) => { 
    return nums.filter((item, pos, self) => {
        return self.indexOf(item) == pos;
    })
};

const array = [1,1,2,3];

console.log(removeDuplicates(array));
