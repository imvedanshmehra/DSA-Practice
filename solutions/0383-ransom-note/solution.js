/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length > magazine.length) return false;

    let count = Array(26).fill(0);

    for(let i=0; i<magazine.length; i++) {
        count[magazine.charCodeAt(i) - 97]++;
    }

    for(let i=0; i<ransomNote.length; i++) {
        if(--count[ransomNote.charCodeAt(i) - 97] < 0) {
            return false
        }
    }

    return true;
};
