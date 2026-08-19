function removeDuplicates(nums: number[]): number {
    if(nums.length < 2) return nums.length;

    let i=2;
    
    for(let j=2; j<nums.length; j++) {
        if(nums[i-2] !== nums[j]) {
            // Set nums[i] to nums[j] & increment i
            nums[i++] = nums[j]
        }
    }

    return i;
};
