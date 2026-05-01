/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m-1; // Tracks the last "actual" value of num1
    let j = n-1; // Tracks the last value of nums2
    let k = m+n-1 // Tracks the last position where the new value should be entered

    // Loop till all the values of num2 are merged into num1
    while(j >= 0) {
        // Compare i & j and insert the bigger value at the end
        if(nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--]
        } else {
            nums1[k--] = nums2[j--]
        }
    }
};
