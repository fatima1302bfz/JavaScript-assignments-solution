//task2
document.write("<h1>Elzero</h1>");
/* document.querySelector("h1").style.color = 'blue';
document.querySelector("h1").style.fontSize = '80px';
document.querySelector("h1").style.fontWeight = 'bold';
document.querySelector("h1").style.textAlign = 'center';
document.querySelector("h1").style.fontFamily = 'Arial'; */
document.querySelector("h1").setAttribute(
    "style", "font-size: 80px; font-weight: bold; color:blue; text-align:center; font-family:Arial");
//task 3
console.log("%cElzero %cWeb %cScool", "color:red;font-size:40px;", "color:green;font-size:40px;font-weight:bold;", "color:white;font-size:40px;background-color:blue;");
//task 4

console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand child group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd();

//task 5
console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);

//task 6- i commented next code to stop execution

/* console.log("Iam In Console");
document.write("Iam In Page"); */