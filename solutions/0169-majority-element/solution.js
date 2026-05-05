/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // Boyer-Moore voting algorithm
    if(!nums.length) return -1;
    if(nums.length === 1) return nums[0];

    let count = 0;
    let candidate = -1;

    for (let i=0; i < nums.length; i++) {
        if(count === 0) {
            candidate = nums[i];
            count++;
        } else if(candidate === nums[i]) {
            count++;
        } else {
            count--;
        }
    }

    count = 0;

    for(let i=0; i < nums.length; i++) {
        if(nums[i] === candidate) {
            count++
        }
    }

    return count > nums.length/2 ? candidate : -1;
};
