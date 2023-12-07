

// Non optimized Solution
function same_naive(arr1, arr2){
  if(arr1.length !== arr2.length){
      return false;
  }
  for(let i = 0; i < arr1.length; i++){
      let correctIndex = arr2.indexOf(arr1[i] ** 2) // indexOf is being applied N time inside the for loop making the complexity O(N * N) ~ O(N^2)
      if(correctIndex === -1) {
          return false;
      }
      console.log(arr2);
      arr2.splice(correctIndex,1)
  }
  return true;
}

//Optimized solution
function same(arr1, arr2) {
  if (arr1.length != arr2.length) return false;

  let freq1 = {};
  let freq2 = {};

  for(let val of arr1) { // O(N)
    freq1[val] = (freq1[val] || 0) + 1;
  }

  for(let val of arr2) { // O(N)
    freq2[val] = (freq2[val] || 0) + 1;
  }

  for(let key in freq1) { // O(N)
    //checking the squared value
    if(!(key ** 2 in freq2)) {
        return false;
    }
    // checking the frequency (which would be values in (K,V) pair of the freq objects) of elements
    if(freq2[key ** 2] != freq1[key]) {
        return false;
    }
  }

  //Total time complexity O(N) + O(N) + O(N) = O(3N) ~ O(N)
  return true;
}


same([1,2,3,2], [9,1,4,4])


console.log(same([1, 2, 3], [1, 4, 9]));
