/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let total = 0
    let i = 0;

    while(i<s.length) {
        if(s[i] === "I" && (s[i+1] === "V" || s[i+1] === "X")) {
            if(s[i+1] === "V") {
                total += 4
            } 
            if(s[i+1] === "X") {
                total += 9
            }

            i+=2;
            continue;
        } 

        if(s[i] === "X" && (s[i+1] === "L" || s[i+1] === "C")) {
            if(s[i+1] === "L") {
                total += 40
            } 
            if(s[i+1] === "C") {
                total += 90
            }

            i+=2;
            continue;
        }

        if(s[i] === "C" && (s[i+1] === "D" || s[i+1] === "M")) {
            if(s[i+1] === "D") {
                total += 400
            } 
            if(s[i+1] === "M") {
                total += 900
            }

            i+=2;
            continue;
        }

        total += map[s[i]]
        i++
    }

    return total;
};
