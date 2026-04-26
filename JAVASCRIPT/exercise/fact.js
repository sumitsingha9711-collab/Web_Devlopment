let fact = 5;
let result = 1;

for (let i = fact; i > 0; i--){
    result = result*i;
}
console.log(result);

// method 1
const fact2 = [5, 4, 3, 2, 1];

let factoraol = fact2.reduce((acc, val) => acc * val, 1);
console.log(factoraol);

// method 2
let factorial = 1;

function factorialFunc(num){
    let arr = Array.from(Array(num+1).keys())
    let c = arr.slice(1,).reduce((a, b) => a*b)
    return c;
}

console.log(factorialFunc(5));