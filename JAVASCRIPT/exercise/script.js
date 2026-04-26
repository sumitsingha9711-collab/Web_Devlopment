let random = Math.random();

let a = Number(prompt("enter first number"));
let b = Number(prompt("enter second number"));
let c = prompt("enter operator");

let obj = {
    "+" : "-",
    "-" : "*",
    "*" : "/",
    "/" : "+"
};

if (random > 0.1) {
    // console.log(`the result is ${a} ${c} ${b}`);  
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);  
}
else{
     c = obj[c];
     alert(`the result is ${eval(`${a} ${c} ${b}`)}`);  
}