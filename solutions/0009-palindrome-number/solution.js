/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const temp = [];
  const temp1 = []
  const str = String(x);
    for(let i=0; i<str.length; i++) {
      temp.push(str[i])
    }
  
    for(let i=str.length -1; i >= 0; i--) {
      temp1.push(str[i])
    }

  return JSON.stringify(temp) === JSON.stringify(temp1)
};
