console.log("this is string.js file");
let a = "this is a string";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

let new_name = "sumit";
let sur_name = "singh";

console.log("his name is " + new_name + " " + sur_name);

// this is called template literals
console.log(`his name is ${new_name} ${sur_name}`);

let b= "this is a string";
// string is immutable in javascript, which means we cannot change the value of string once it is created. We can only create a new string with the desired changes.
console.log(b.toUpperCase());
console.log(b.toLocaleLowerCase());
console.log(b.length);
console.log(b.slice(1,4));
console.log(b.slice(1));
console.log(b.replace("string","good string"));
console.log(b.replace("is","are"));
console.log(b.concat(" and this is also a string"));
// trim is used to remove the whitespace from the beginning and end of the string
console.log(b.trim());

