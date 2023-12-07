//Restate Problem
//implement addition
//What are the inputs?
//large numbers? always 2?
//What are the outputs?
//number int, float
//Do i have enough info?
//yes, number, what if only 1 input is provided
//label inputs
//add, num1, num2, sum

//only 2 nos
function addNos(num1, num2) {
  let sum = 0;
  if (!num1) num1 = 0;
  if (!num2) num2 = 0;
  if(typeof num1 != 'number' || typeof num2 != 'number') throw new Error(`Invalid Input type`)
  sum = num1 + num2;
  return sum;
}
//any num of nos
function addNosN(...args) {
  let sum = 0;
  if(!args.length) return -1;
  for (let i = 0; i < args.length; i++) {
    if(typeof args[i] != 'number') throw new Error(`Invalid Input type for index - ${i}`)
    sum += args[i];
  }
  return sum;
}

console.log(addNos(1, 2));
