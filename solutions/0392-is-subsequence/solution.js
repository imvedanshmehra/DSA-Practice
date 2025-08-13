/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let count = 0

    for(const letter of t) {
        if(s[count] === letter) {
            count++

           if (count === s.length) return true;
        } 
    }

    return count >= s.length 
};
