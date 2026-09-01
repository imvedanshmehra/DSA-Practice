function lengthOfLongestSubstring(s: string): number {
    let maxSubStr = 0;
    let temp = ''

    if(s.length === 1) return 1;

    for(const char of s) {
        const duplicateIdx = temp.indexOf(char)

        if(duplicateIdx !== -1) {
            temp = temp.slice(duplicateIdx + 1)
        }

        temp = temp += char
        maxSubStr = Math.max(maxSubStr, temp.length)
    }

    return maxSubStr;
};

