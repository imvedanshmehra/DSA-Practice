/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while(left < right) {
        let leftVal = height[left];
        let rightVal = height[right];
        let smallPointer = Math.min(leftVal, rightVal);

        // Find total water that can be stored between left & right.
        let newMaxWater = smallPointer * (right - left)
        maxWater = Math.max(newMaxWater, maxWater)

        // Move the smallest pointer by 1
        if(leftVal < rightVal) {
            left++
        } else {
            right--;
        }
    }

    return maxWater;
};
