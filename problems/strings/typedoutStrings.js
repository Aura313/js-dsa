// LC - #844 : BackSpace Compare

let s = 'ab#c';
let t = 'az#c';

// let s = 'abc#d';
// let t = 'acc#c';

// let s = 'x#y#z#';
// let t = 'a#';

// let s = 'a###b';
// let t = 'b';

/* ******* BRUTE FORCE SOLUTION  *******
    TC: O(a + b)
    SC: O(a + b)
*/
const backspaceCompare = function (s, t) {
  let arr1 = buildStr(s);
  let arr2 = buildStr(t);
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) return false;
  }

  return true;
};

const buildStr = function (str) {
  const builtArray = [];

  for (let i of str) {
    if (i !== '#') {
      builtArray.push(i);
    } else {
      builtArray.pop();
    }
  }

  return builtArray;
};

// console.log(backspaceCompare(s, t));

/* ******* OPTIMIZED SOLUTION USING Two--Ponters on each fn argument  *******
    TC: O(a + b)
    SC: O(1)
*/

const backspaceCompareOp = function (S, T) {
  let p1 = S.length - 1,
    p2 = T.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (S[p1] === '#' || T[p2] === '#') {
      if (S[p1] === '#') {
        let backCount = 2;

        while (backCount > 0) {
          p1--;
          backCount--;

          if (S[p1] === '#') {
            backCount += 2;
          }
        }
      }

      if (T[p2] === '#') {
        let backCount = 2;

        while (backCount > 0) {
          p2--;
          backCount--;

          if (T[p2] === '#') {
            backCount += 2;
          }
        }
      }
    } else {
      if (S[p1] !== T[p2]) {
        return false;
      } else {
        p1--;
        p2--;
      }
    }
  }

  return true;
};

var backspaceCompareII = function (s, t) {
  let s1 = getWordWithoutBackspace(s);
  let t1 = getWordWithoutBackspace(t);
  console.log({ s1 });
  console.log({ t1 });

  return s1 === t1;
};

function getWordWithoutBackspace(str) {
  let result = '';
  let counter = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === '#') {
      counter++;
    } else {
      if (counter > 0) {
        counter--;
      } else {
        result += str[i];
      }
    }
  }
  return result;
}

console.log(backspaceCompareII(s, t));
