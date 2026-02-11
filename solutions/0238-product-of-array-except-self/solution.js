/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length
    let leftProduct = Array(n).fill(1)
    let rightProduct = Array(n).fill(1)
    let result = Array(n).fill(0);

    // Calculate all the left product before self
    for(let i=1; i<n; i++) {
        leftProduct[i] = leftProduct[i-1] * nums[i-1]
    }

    // Calculate all right product before self
    for(let i=n-2; i>=0; i--) {
        rightProduct[i] = rightProduct[i+1] * nums[i+1]
    }

    for(let i=0; i<n; i++) {
        result[i] = leftProduct[i] * rightProduct[i]
    }

    return result;
};
