function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
//O(N^2)
function selectionSort(arr) {
  // let min = 0;

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if(i !== min) swap(arr, i, min);
  }
  return arr;
}
console.log(selectionSort([5, 1, 9, 6, 2, 8]));
