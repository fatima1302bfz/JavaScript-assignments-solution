//part1
var numberOne = 10,
    numberTwo = 20;
console.log("%cpart1", "font-weight: bold; font-size:25px; color:red");
console.log("10" + "20");
console.log(typeof("10" + "20"));
console.log(`${numberOne}${numberTwo}`);
console.log(typeof `${numberOne}${numberTwo}`);
console.log("20" + "\n10 ");
console.log(`${numberTwo} \n${numberOne}`);

//part 2
console.log("%cpart2", "font-weight: bold; font-size:25px; color:blue");
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

//part 3
console.log("%cpart3", "font-weight: bold; font-size:25px; color:green");
console.log(`\`\I\'m\ In \n
 \\\\\n 
Love \\\\ """ '''\n
++ With ++
\n \\"""\\"""
\n""JavaScript""\`\``);

//part 4
console.log("%cpart4", "font-weight: bold; font-size:25px; color:purple");
let a = 21;
let b = 20;
let concaten = `${a}` + `_` + `${b}`;
let val = concaten.repeat(4);
console.log(`_${val}_`)