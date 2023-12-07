//max sub arrsum of consequetive numbers
//non optimal method
function maxSubArrSum(arr, n) {
  if (n > arr.length) return null;
  let sum = -Infinity; //if the arr consists of only negative numbers then sum will also be negative, hence start with -infinity instead of 0

  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (temp > sum) {
      sum = temp;
    }
  }

  return sum;
}
const arr = [1, 2, 5, 2, 8, 1, 5];

function maxSubArrSumSlidingWindow(arr, n) {
  let maxSum = 0;
  let tempSum = 0;

  if (n > arr.length) return null;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = n; i < arr.length; i++) {
    //O(N)
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubArrSumSlidingWindow(arr, 2));
