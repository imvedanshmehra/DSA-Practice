/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;

    if(nums.length < 2) return nums.length;
    

    for(let j=1; j < nums.length; j++) {
        if(nums[i] === nums[j] && nums[i-1] !== nums[i]) {
            nums[++i] = nums[j]
        } else if(nums[i] !== nums[j]) {
            nums[++i] = nums[j]
        }
    }

    return i+1;

};

