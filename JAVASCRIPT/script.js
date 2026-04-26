console.log("hello there.....")

var a = 10;
var b= 30;

var sum = a + b;
console.log("the sum is " + sum);
let c = 20;
let d = 33.8;
const even = true;
let name = undefined;
let city = null; 
// null is define as an object in javascript because of a bug in the language that has been kept for compatibility reasons.

console.log(typeof c, typeof d, typeof even, typeof name, typeof city);

const job = {
    title: "developer",
    company: "Tech Corp",
    location: "New York"
}
console.log("Title: " + job.title);
console.log("Company: " + job.company);
console.log("Location: " + job.location);