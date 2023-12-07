//Iterative Soln

function factorial(n) {
  let val = 1;
  for (let i = n; i > 1; i--) {
    val *= i;
  }
  return val;
}

//Recursice Soln

function factorialRec(n) {
  //Base condition // 0! = 1
  if (n === 1 || n === 0) return 1;
  //rec fn
  return n * factorialRec(n - 1);
}
console.log(factorialRec(5));
