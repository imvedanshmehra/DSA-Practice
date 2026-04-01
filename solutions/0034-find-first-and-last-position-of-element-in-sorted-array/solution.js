/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const findBound = (isFirst) => {
        let left = 0;
        let right = nums.length - 1;
        let bound = -1
        
        while(left <= right) {
            let mid = Math.floor((left + right) / 2)
            
            if(target === nums[mid]) {
                bound = mid;
                if(isFirst) {
                    right = mid -1
                } else {
                    left = mid + 1
                }
            } else if(target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1;
            }
        }
        
        return bound;
        
    }
    
    return [findBound(true), findBound(false)]
};
