//part 1
console.log("%cpart1", "font-weight: bold; font-size:25px; color:skyblue");

console.log(100000); // 100000
console.log(50000 * 2); // 100000
let number = 100000
console.log(number); // 100000
let val = "100000"
console.log(+val); // 100000
console.log("100000"); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000

//part 2
console.log("%cpart2", "font-weight: bold; font-size:25px; color:skyblue");
console.log(-Number.MIN_SAFE_INTEGER); //9007199254740991

//part3
console.log("%cpart3", "font-weight: bold; font-size:25px; color:skyblue");
console.log(Math.min(Number.MAX_SAFE_INTEGER, 16)); //16
//part 4
console.log("%cpart4", "font-weight: bold; font-size:25px; color:skyblue");
let myVar = "100.56789 Views";

console.log(parseInt(myVar));
console.log(typeof parseInt(myVar)); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57
//part 5
console.log("%cpart5", "font-weight: bold; font-size:25px; color:skyblue");

let num = 10;
console.log(Number.isInteger(num) + +Number.isInteger(num)); // 2

//part 6
console.log("%cpart6", "font-weight: bold; font-size:25px; color:skyblue");

let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(flt.toFixed(0)); // 10
console.log(parseInt(flt)); // 10

//part 7
console.log("%cpart7", "font-weight: bold; font-size:25px; color:skyblue");

console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4