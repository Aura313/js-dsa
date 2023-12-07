function mergeTwoSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

function mergeSort(arr) {
  //O(NlogN)
  //Base condition
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  //splitting into halves by recursively calling ~ O(logN)
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeTwoSortedArrays(left, right); //~O(N)
}

// console.log(mergeTwoSortedArrays([180], [2, 100]));
// console.log(mergeTwoSortedArrays([1, 10, 50], [2, 14, 99, 100]));
console.log(mergeSort([1, 10, 50, 2, 14, 99, 100]));
