/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    const str = String(x)

    let left = 0;
    let right = str.length - 1;
    
    while(left < right) {
         if(str[left] !== str[right]) return false;

           right-= 1;
           left++
    }
    
return true
};

