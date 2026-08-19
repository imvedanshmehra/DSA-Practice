function majorityElement(nums: number[]): number {
    if(!nums.length) return -1;
    if(nums.length === 1) return nums[0];
    
    let count = 0;
    let candidate: number;

    for(const num of nums) {
        if(count === 0) {
            candidate = num;
            count++
        } else if(num === candidate) {
            count++
        } else {
            count--
        }
    }

    return candidate;
};
