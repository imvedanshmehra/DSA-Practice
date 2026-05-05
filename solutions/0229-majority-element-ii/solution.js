/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    if(!nums.length) return -1;

    let ele1 = -1, ele2 = -1;
    let count1 = 0, count2 = 0;

    for (let num of nums) {
        if(ele1 === num) {
            count1++
        } else if(ele2 === num) {
            count2++
        } else if(count1 === 0) {
            ele1 = num;
            count1++
        } else if(count2 === 0) {
            ele2 = num
            count2++
        } else {
            count1--;
            count2--
        }
    }

    count1 = 0, count2 = 0;
    let n = nums.length;
    let res = [];

    for (let num of nums) {
        if (num === ele1) {
            count1++
        } else if(num === ele2) {
            count2++
        }
    }

    if(count1 > Math.floor(n/3)) {
        res.push(ele1)
    }
    if(count2 > Math.floor(n/3)) {
        res.push(ele2)
    }

    return res;
 };
