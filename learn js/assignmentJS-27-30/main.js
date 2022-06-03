//part 1
console.log("%cpart1", "font-weight: bold; font-size:25px; color:dodgerblue");
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName[0].toLowerCase().repeat(3)); // eee

//part 2
console.log("%cpart2", "font-weight: bold; font-size:25px; color:dodgerblue");
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.toUpperCase().includes(letterZ.toUpperCase())); // True
console.log(word.toUpperCase().includes(word.toUpperCase().replace(letterZ, letterE))); // True
console.log(word.toLowerCase().includes(letterO.toLowerCase())); // True