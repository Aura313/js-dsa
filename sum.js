function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}

const arr = [1, 2, 2, 5, 8];
console.log(sum(arr));


//Space : O(1), only constant variables