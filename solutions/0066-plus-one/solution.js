/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const joinedDigits = digits.join('')
    const incremented = BigInt(joinedDigits || 0)+BigInt(1)
    return (incremented.toString().split('').map(Number))
};
