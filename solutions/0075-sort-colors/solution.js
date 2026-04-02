/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


function swap(arr, current, target) {
    let temp = arr[current];
    arr[current] = arr[target]
    arr[target] = temp;
}

var sortColors = function(nums) {
    let lo = 0;
    let mid = 0;
    let hi = nums.length-1;

    
    while(mid <= hi) {
        switch(nums[mid]) {
            case 0:
                swap(nums, lo, mid)
                lo++;
                mid++
                
                break;
            case 1:
                mid++;
                break;
            case 2:
                swap(nums, hi, mid)
                hi--;

                break;

        }
    }
};
 
