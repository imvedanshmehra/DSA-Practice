/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    const tempObj = {}

    for(let val of s) {
        tempObj[val] = (tempObj[val] || 0) + 1;
    }
    for(let i =0; i < t.length; i++) {
        const letter = t[i];
        
        if(!tempObj[letter]) return false;
        tempObj[letter] -= 1
    }

    return true;
};
