//linear search, go through the array and return the index when you find the value

function search(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) return i;
  }
  return -1;
}

//binary search
function searchBS(arr, k) {
    // O(logN)
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

console.log(searchBS([1, 2, 3, 4, 5, 6], 4));
