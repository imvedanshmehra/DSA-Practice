/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    let maxSubStr = 0
    let tempString = ''
    
    if(s.length === 1 ) return 1;
    
    for(let char of s) {
        const duplicateIdx = tempString.indexOf(char)
        
        if(duplicateIdx !== -1) {
            tempString = tempString.slice(duplicateIdx+1)
        }
        
        tempString = tempString += char
        maxSubStr = Math.max(maxSubStr, tempString.length)
    }
    
    return maxSubStr
};
