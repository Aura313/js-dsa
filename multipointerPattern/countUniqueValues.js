function countUniqueValues(arr) {
  let uniqueVals = new Set(arr);
  return uniqueVals.size;
}

const arr = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];

function countUniqueValuesUsingPointers(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    // O(N) - 1 loop
    if (arr[i] !== arr[j]) {
      i++;
      //we're updating the arr so that it cotains only unique values
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValuesUsingPointers([]));
