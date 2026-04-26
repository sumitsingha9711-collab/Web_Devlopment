console.log("hello there.....");
let age = 25;
grace = 85;

console.log(age+grace);
console.log(age-grace);
console.log(age*grace);
console.log(age/grace);
console.log(age**grace); //exponentiation
console.log(age%grace);
// other operater are ++ , --
// === means it checks both value and type 
// ? this is a conditional (ternary) operator
// let canDrive = (age >= 18) ? "you can drive" : "you cannot drive";
// console.log(canDrive);

if((age+grace) >= 18){
    console.log("you can drive");
}
else{
    console.log("you cannot drive");
}
// elseif ladder