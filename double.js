function double(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }

    return newArr;
}

const arr = [1, 2, 2, 5, 8];
console.log(double(arr));

//SPace: O(n), creates a new arr (ref types are O(n))