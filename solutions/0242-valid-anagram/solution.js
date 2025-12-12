/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const obj = {}
    
    for(let char of s) {
        obj[char] = (obj[char] || 0) + 1
    }
    
    for(let char of t) {
        obj[char] = (obj[char]) - 1
    }
    
    return Object.values(obj)?.every(val => val === 0)
};
