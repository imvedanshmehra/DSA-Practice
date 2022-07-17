/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false
    }
    
    let lookupObj = {}
    
    for(let val of s) {
        lookupObj[val] = (lookupObj[val] || 0) + 1
    }
   
   for(let val of t) {
       if(!lookupObj[val]){
           return false
       } else {
           lookupObj[val] -= 1
       }
   }
   return true
};
