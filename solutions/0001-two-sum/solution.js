/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        for(let i = left+1; i<nums.length; i++) {
            if(nums[left] + nums[i] === target) {
                return [left, i]
            }
        }
        
        left++;
    }
};
