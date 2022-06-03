 //part 1
 console.log("%cpart1", "font-weight: bold; font-size:25px; color:skyblue");
 console.log((((((10 * 20 * 15)) / 3) - 190) - 10) % 400);

 //part 2
 console.log("%cpart2", "font-weight: bold; font-size:25px; color:skyblue");

 let num = 3;
 // Solution One
 console.log(num + true + true + true); // 6

 // Solution two
 let six = num + num
 console.log(six); // 6
 // Solution three
 let somme = num * num - true - true - true
 console.log(somme); // 6
 // Solution four
 let boolsomme = true + true + true + true + true + true
 console.log(boolsomme); // 6
 // Solution five
 let multibolean = (true + true) * num
 console.log(multibolean); // 6
 // Solution six
 let minussom = num * num - num
 console.log(minussom); // 6

 //part 3
 console.log("%cpart3", "font-weight: bold; font-size:25px; color:skyblue");
 let number = "10";
 console.log(+number + +number); // 20
 console.log(+number + (true * +number)); // 20
 console.log(+number + (true + true + true + true + true + true + true + true + true + true));
 console.log(+number * +number / +number + +number); // 20

 //part 4
 console.log("%cpart4", "font-weight: bold; font-size:25px; color:skyblue");

 let points = 10;

 points = points + true + true + true

 console.log(points); // 13
 let point = 10;
 point = point - true - true
 console.log(point); // 8;