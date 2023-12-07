//Recursive Solution
// Bad sol - TC : O(2^N) exponential
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
// console.log(fib(1), ' => 1');
// console.log(fib(2), ' => 2');
// console.log(fib(3), ' => 3');
// console.log(fib(4), ' => 4');
// console.log(fib(5), ' => 5');

///Sol using DP - Memoization
//O(N)
function fibUsingDPMemoization(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  var res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

///Sol using DP - Memoization
////O(N)
function fibUsingDPMemoizationII(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  var res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

///Sol using DP - Tabulation
//O(N)
function fibUsingDPTabulataion(n) {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

// console.log(fibUsingDP(1), ' => 1');
// console.log(fibUsingDP(2), ' => 2');
// console.log(fibUsingDP(3), ' => 3');
// console.log(fibUsingDP(4), ' => 4');
console.log(fibUsingDPTabulataion(5), ' => 5');
