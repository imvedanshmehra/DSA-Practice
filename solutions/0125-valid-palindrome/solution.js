/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let plainStr = s.replace(/[^0-9a-z]/gi, '')
    plainStr = plainStr.toLowerCase()
   
    for(let i=0; i<plainStr.length/2; i++) {
        if(plainStr[i] === plainStr[plainStr.length-(i+1)]) {
            continue;
        } else {
            return false
        }
        
    }
    
    return true;
};
