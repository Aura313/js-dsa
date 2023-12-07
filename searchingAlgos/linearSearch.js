function linearSearch(arr, val) {
    //O(N)
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) return i
    }

    return -1;
}

console.log(linearSearch([1, 12, 4, 35, 6], 7));
