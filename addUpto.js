// METHOD 1
function addUpto(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }

  return total;
}

// METHOD 2
function addUptoM2(n) {
  return (n * (n + 1)) / 2;
}

var t1 = performance.now()
// console.log("M1: ", addUpto(1000));
console.log("M2: ", addUptoM2(1000));
var t2 = performance.now()
console.log(`Time Elapse: ${(t2 - t1) / 1000} seconds`)
