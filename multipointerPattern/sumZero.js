function sumZero(arr) {
  //   console.log(arr, 'ks');
  //sorted array so we know smallest number is at the start and largest is at the end
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    //O(N)
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    //not just comparing to zero because we need to identigy which ponter to move
    else if (sum > 0) {
      end--;
    } else {
      right++;
    }
  }
}

const arr = [-3, -2, -1, 0, 1, 2, 3];
// const arr = [1, 2, 3];
console.log(sumZero(arr));
