//part 1
console.log("%cpart1", "font-weight: bold; font-size:25px; color:purple");
let num = 9;
//let num = 9;
//let num = 9;
switch (num) {
    case 9:
        console.log("00" + num)
        break;
    case 20:
        console.log("0" + num)
        break;
    case 110:
        console.log(num)
        break;
    default:
        console.log(num)
        break;
}
//==================================================================================
//part 2
console.log("%cpart2", "font-weight: bold; font-size:25px; color:purple");
let num1 = 9;
let str = "9";
let str2 = "20";
if (num1 == str) {
    console.log("{num1} Is The Same Value As {str}");
}
if (typeof num1 != typeof str) {
    console.log("{num1} Is The Same Value As {str} But Not The Same Type")
}
if (num1 != str2 && typeof num1 != typeof str2) {
    console.log("{num1} Is Not The Same Value Or The Same Type As {str2}")
}
if (typeof str == typeof str2 && str != str2) {
    console.log("{str} Is The Same Type As {str2} But Not The Same Value")
}
//=================================================================================
//part 3
console.log("%cpart3", "font-weight: bold; font-size:25px; color:purple");
let num13 = 10;
let num2 = 30;
let num3 = "30";
if (num3 > num13 && typeof num3 != typeof num13) {
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
}
if (num3 > num13 && num3 == num2 && typeof num3 != typeof num2) {
    console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
}
if (num3 !== num13 && typeof num3 != typeof num2) {
    console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
}



//=================================================================================
//part 4
console.log("%cpart4", "font-weight: bold; font-size:25px; color:purple");
let number1 = 11;
let number2 = 10;
let number3 = 11;
let number4 = 33;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (number1 > number2) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 2

if (number1 > number2 && number1 < number4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 3

if (number1 > number2 && number1 === number3) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 4

if ((number1 + number2) < number4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 5

if ((number1 + number3) < number4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 6

if ((number1 + number2 + number3) < number4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 7

if (number4 - (number1 + number3) + number2 === 21) {
    console.log("True");
} else {
    console.log("False");
}