//anangram - rearrangement
function validAnagrams(str1, str2) {
  //two objects
  //loop over strings to store the freq of the keys in the object created above, return true if all the values match in 2 objects

  if((!str1 || !str2) || str1.length != str2.length ) return false;

  let freq1 = {};
  let freq2 = {};

  for (let s of str1) {
    freq1[s] = (freq1[s] || 0) + 1;
  }

  for (let s of str2) {
    freq2[s] = (freq2[s] || 0) + 1;
  }

  for (let key in freq1) {
    if (freq1[key] !== freq2[key]) return false;
  }

  return true;
}


//Method2
function validAnagramsOp2(str1, str2) {
  //two objects
  //loop over strings to store the freq of the keys in the object created above, return true if all the values match in 2 objects

  if((!str1 || !str2) || str1.length != str2.length ) return false;

  let freq = {};
  let freq2 = {};

  for (let s of str1) {
    freq[s] = (freq[s] || 0) + 1;
  }

  for (let s of str2) {
    if(!freq[s]) return false
    else {
      freq[s] -= 1;
    }
  }

  return true;
}
console.log(validAnagramsOp2('pooka', 'opako'));