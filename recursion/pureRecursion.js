//pure recursion without external data structure (result in helperMethodPattern.js) or helper function
function collectOddValues(arr) {
  let newArr = []; // here it's reset everytime in helper patter it's outside the recursive fn so it maintains the pushed value,
//    here we're doing that with concat of return value of every step
  if (arr.length === 0) return newArr;

  if (arr[0] % 2 !== 0) newArr.push(arr[0]);

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 6, 7, 8]));
