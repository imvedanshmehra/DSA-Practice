/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq = new Map();

    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    for(let key of freq.keys()) {
        if(Math.floor(freq.get(key)) >= nums.length/2) {
            return key;
        }
    }
};



