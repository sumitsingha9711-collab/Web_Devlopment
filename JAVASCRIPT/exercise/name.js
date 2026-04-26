/*create a business name generator by combining list of adjective and shop name and another WebTransportDatagramDuplexStream

Adjecttive:
crazy
amazing
FileReader

shopname :
engine
foods 
garment

another word:

bros
limited
hub
*/

let name = Math.random();

let first, second, third;

// first name
if (name < 0.33){
    first = "crazy";
}
else if (name < 0.66 && name >= 0.33){
    first = "amazing";
}
else{
    first = "insane";
}

name = Math.random();
// second name
if (name < 0.33){
    second = "engine";
}
else if (name < 0.66 && name >= 0.33){
    second = "foods ";
}
else{
    second = "garment";
}

// third name
name = Math.random();
if (name < 0.33){
    third = "bros";
}
else if (name < 0.66 && name >= 0.33){
    third= "limited";
}
else{
    third = "hub";
}

console.log(` ${first} ${second} ${third}`);
