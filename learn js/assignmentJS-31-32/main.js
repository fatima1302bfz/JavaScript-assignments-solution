//part 1
console.log("%cpart1", "font-weight: bold; font-size:25px; color:purple");

console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(typeof - 50 == typeof + "-40"); // true
console.log(typeof 10 == typeof - "-40"); // true
console.log(typeof "10" != typeof 10); // true
console.log(!20 == false); // true

//part 2
console.log("%cpart2", "font-weight: bold; font-size:25px; color:purple");
let num1 = 10;
let num2 = 20;

console.log(num1 < num2); // true
console.log(num1 != num2); // true
console.log(!(num1 == num2)); // true
console.log(!(num1 === num2)); // true
console.log(typeof num1 == typeof num2); // true
console.log(typeof num1 === typeof num2); // true

//part 3
console.log("%cpart3", "font-weight: bold; font-size:25px; color:purple");
let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a == b); // true
console.log(a < b && a > c); // true
console.log(!(a == b) && !(a > b) && typeof(a == c) && !(a < c)); // true