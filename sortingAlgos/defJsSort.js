function numComparator(num1, num2) {
  //   return num1 - num2; // asc
  return num2 - num1; //desc
}

function compareByLen(str1, str2) {
    return str1.length - str2.length;
}
//js default sort only works for Strings, that too not all the time
//sort(comparator_fun)
console.log([6, 4, 15, 10].sort(numComparator));
console.log(["six", "four", "fifteen", "ten"].sort(compareByLen));
