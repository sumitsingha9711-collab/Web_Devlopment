function name(name){
    console.log("Hello, " + name + "!");
}

name("Alice");

function add(a, b){
    return a + b;
}

let sum = add(5, 3);
console.log("Sum:", sum);

let result = add(10, 20);
console.log("Result:", result);

const func1=(x)=>{
    console.log("this is an arrow function " + x);
}

func1(23);
func1(24);
func1(21);
func1(25);

// an arrow function is also an variable that holds a function as its value and can be used multiple times like other variables.