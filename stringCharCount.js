//Restate Problem
// count the number of every character in the string
//What are the inputs?
// string, string with spaces, special chars, lowercase uppercase same or different

//What are the outputs?
// object (k,v) => (strChar, charCount)
//Do i have enough info?
// yes
//label inputs
// ip - "str", op- obj

//abca
//{a:2, b: 1, c:1}

//empty input return -1

function stringCharCounter(str) {
  let obj = {};
  if (!str.length || typeof str != 'string') return -1;
  str = str.replace(/\s/g, '');
  console.log(str, 'ststst');
  for (let s of str) {
    if (!obj[s]) obj[s] = 1;
    else obj[s] = obj[s] + 1;
  }
  return obj;
}

//only alphanumber chars iggone rest
function charCount(str) {
  var result = {};

  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) result[char]++;
      else result[char] = 1;
    }
  }
  return result;
}

//REFACTORED ABOVE⬆ CODE only alphanumber chars iggone rest
function charCountRefactored(str) {
  var result = {};

  for (let char of str) {
    if (isAlphaNumberic(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}

function isAlphaNumberic(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}
console.log(charCountRefactored('Hi there!'));
