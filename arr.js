let names = ["Michael", "Melissa", "Andrea"];
let values = [true, {}, [], 2, "awesome"]


let arr1 = ['a', 'b', 'c']
let arr2 = ['d', 'e', 'f']

console.log("concat: ", arr1.concat(arr2)); //O(arr1.len) + O(arr2.len) ~ O(N)

let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log("slice: ", animals.slice(2));
animals.splice(1, 0, 'dog')
console.log("splice: ", animals);
