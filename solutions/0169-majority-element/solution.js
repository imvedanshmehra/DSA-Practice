/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const numsCount = {}
     
    for(let num of nums) {
        numsCount[num] = (numsCount[num] || 0) + 1
     }
     
    const majorityNum =  Object.keys(numsCount).find(count => numsCount[count] > nums.length/2)
    return Number(majorityNum || 0)
};
