//Radix Sort Helpers
// function getDigit(num, place) ,
// calculate base 10 (10 to the power positions~ ones, tens, hundred, thousand, when you count a number
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// console.log(digitCount(7323));
// console.log(getDigit(7323, 3));

function radixSort(nums) {
  let max = mostDigits(nums);
  for (let k = 0; k < max; k++) {
    // let digitBuckets = Array(10).fill([]);
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let dig = getDigit(nums[i], k);
      digitBuckets[dig].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
