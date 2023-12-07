// LC - #3 : Longest Substring

// let s = 'abcbda';
// let s = 'ccccccc';
// let s = '';
let s4 = 'abcbda';
/* ******* BRUTE FORCE SOLUTION  *******
    TC: O(N)
    SC: O(1)
*/
const longestSubstringBruteforceTry = function (s) {
  if (s.length <= 1) return s.length;
  let sMap = {};
  let count = 0;
  //missig edgecase of s4
  for (let i = 0; i < s.length; i++) {
    if (sMap[s[i]]) {
      sMap[s[i]] += 1;
      break;
    } else {
      sMap[s[i]] = 1;
      count++;
      //   count--;
    }
  }
  return count;
};

// console.log(longestSubstringBruteforceTry(s4));

const string = 'abccabb';
// ******* BRUTE FORCE SOLUTION - Two Pointers  *******
// Time: O(N^2);
// Space: O(N)

const lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;

  let longest = 0;

  for (let left = 0; left < s.length; left++) {
    let seenChars = {},
      currentLength = 0;

    for (let right = left; right < s.length; right++) {
      const currentChar = s[right];

      if (!seenChars[currentChar]) {
        currentLength++;
        seenChars[currentChar] = true;
        longest = Math.max(longest, currentLength);
      } else {
        break;
      }
    }
  }

  return longest;
};

// console.log(lengthOfLongestSubstring(string));
/* ******* OPTIMIZED SOLUTION USING Sliding Windp  *******
    TC: O(N)
    SC: O(N)
*/

const lengthOfLongestSubstringOp = function (s) {
  if (s.length <= 1) return s.length;

  const seen = {};
  let left = 0,
    longest = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const previouslySeenChar = seen[currentChar];

    if (previouslySeenChar >= left) {
      left = previouslySeenChar + 1;
    }

    seen[currentChar] = right;

    longest = Math.max(longest, right - left + 1);
  }

  return longest;
};

//Best TC and SC
//TC : O(N)
//SC : O(1)
const longestSubstringUsingSet = function (s) {
  let charSet = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left += 1;
    }
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

console.log(lengthOfLongestSubstringOp(s4));
