/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let storedWater = 0;
    let leftMax = -1
    let rightMax = -1
    let left = 0
    let right = height.length - 1;
    
    while(left < right) {
        leftMax = height[left] > leftMax ? height[left] : leftMax;
        rightMax = height[right] > rightMax ? height[right] : rightMax;
        
        if(leftMax > rightMax) {
            storedWater += rightMax - height[right]
            right--
        } else {
            storedWater += leftMax - height[left]
            left++
        }
    }

    return storedWater;
};
