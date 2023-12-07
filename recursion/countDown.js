//Recursively

function countDownRec(num) {
  // Base case
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDownRec(num);
}

// Iteratively
function countDownIteratively(num) {
  // Base case

  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log('All done!');
}
console.log(countDownIteratively(5));
