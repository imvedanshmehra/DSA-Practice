/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   let arr = s.replace(/[^a-zA-Z0-9]\s/g, ' ').trim().split(' ')
    
    return arr[arr.length-1].length
};
