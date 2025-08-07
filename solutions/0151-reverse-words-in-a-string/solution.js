/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // remove extra spaces from s and store it in a variable
    let cleanedSentence = s.replace(/\s+/g, ' ').trim();
    const words = cleanedSentence.split(" ");
    console.log(words)
    const wordsLen = words.length
    // loop over half of the cleanedSentence
    for(let i=0; i<words.length/2; i++) {
        const temp = words[i]
        words[i] = words[wordsLen-(i+1)]
        words[wordsLen - (i+1)] = temp
    }

    return words.join(' ');
};
