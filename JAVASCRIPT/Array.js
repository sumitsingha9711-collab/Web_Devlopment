let arr = [1, 2, 3, 4, 5];

// arr[2]
// console.log(arr[2]);

// console.log(arr.length);

// console.log(arr[5]= 6);

// console.log(typeof arr);

// console.log(arr.toString());

// console.log(arr.join("-"));

// console.log(arr.pop(2));

const newarr = [3,5,6,7,8];

// console.log(newarr.splice(2, 0, 6, 7));

newarr.forEach((value, index, array) => {
    console.log(value, index, array);
});


newarr.map((value, index, array) => {
    return value * 2;
});