// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n){
  // add whatever parameters you deem necessary - good luck!  
    if (n <= 2) return 1;

  
  function helper(a,b, count) {
       if (count === n) return a + b;
       return helper(b, a + b, count + 1);
  }
  
 return helper(0,1,2)
  

}

function fib2(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib2(4));