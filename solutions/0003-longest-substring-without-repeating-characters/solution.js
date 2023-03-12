/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  if(!s.length) return 0;

  let start = 0;
  let end = 0;
  let maxSum = 0;
  let set = new Set();

  while(end < s.length) {
    if(!set.has(s[end])) {
      set.add(s[end]);
      end++;
      maxSum = Math.max(maxSum, end-start)
    } else {
      set.delete(s[start]);
      start++;
    }
  }
  return maxSum;
}

// test cases 
lengthOfLongestSubstring('pwwkew')
