function binarySearch(arr, k) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let currEl = arr[mid];
    if (currEl < k) min = mid + 1;
    else if (currEl > k) max = mid - 1;
    else {
      return mid;
    }
  }
  return -1;
}

// console.log(binarySearch([1, 4, 8, 12, 15, 20, 27, 30, 33], 11));

function binarySearchUd(arr, elem) {
  //O(logN)
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (arr[mid] !== elem && start <= end) {
    if (elem < arr[mid]) end = mid - 1;
    else start = mid + 1;
    mid = Math.floor((start + end) / 2);
  }

  return arr[mid] === elem ? mid : -1;
}
console.log(binarySearchUd([1, 2, 3, 4, 5], 4));
