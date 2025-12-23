/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(!s.length) return false;

    if(s.length === 1) return false; 

    const stack = []

    const mapping = {
        ")": "(",
        "]": "[",
        "}": "{"
    }

    for(let char of s) {
        if(char === "[" || char === "(" || char === "{") {
            stack.push(char);
        } else if(char === "]" || char === ")" || char === "}") {
            let last = stack.pop();
            
            if(!last || mapping[char] !== last) {
                return false
            }
        }
    }

    return stack.length === 0

};
