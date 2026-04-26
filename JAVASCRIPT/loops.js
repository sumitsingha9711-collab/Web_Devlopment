// let a = 1;

// for(let i=0; i<5; i++){
//     console.log(a + i);
// }

// let obj = {
//     name: "jhon",
//     age: 30,
//     city: "New York"    
// }

// forin loop used to iterate over object properties like keys and values
for (const key in obj) {
    const element = obj[key];
    console.log(key, element);
}

// forof loop used to iterate over iterable objects like arrays and strings
for (const c of "hello") {
    console.log(c);
}

// while(a < 10){
//     console.log(a);
//     a++;
// }

let i = 1;
do{
    console.log(i);
    i++;
} while(i < 10);