// let firstname = "Vadik",
//       lastname = "Kulinich";

// let fullName = `${firstname} ${lastname}`;
// console.log(fullName);


// оператор IF Else

// if(10 < 8) {
//   console.log("Да, 10 больше 8")
// } else if (10 === 8) {
//   console.log("10 равно 8");
// } else {
//   console.log("Нет, 10 больше чем 8");
// }

// switch case

// let color = "red";

// switch (color) {
//   case 'green' :
//     console.log ("Этот цвет зеленый");
//     break;
//   case 'red' :
//     console.log ("Этот цвет красный");
//     break;
//   case 'orange' :
//     console.log ("Этот цвет оранжевый");
//     break;
//   case 'white' :
//     console.log ("Этот цвет белый");
//     break;
//   default :
//   console.log ("Непонятный цвет");       
// }

//1 задание
let city = 'Kiev'; 
let country = "Ukraine";
const population = 2.884;
let stadium = true;

//2 задание

const a = 40,
      b = 70;
let result = a * b;
console.log(result);

//3 задание

let time = 2,
    speedOfFirst = 95,
    speedOfSecond = 114;

let result2 = 95/2 + 114 / 2;
console.log(result2);      

//4 задание    

const randomNumber = Math.floor(Math.random() * 100);

if (randomNumber < 20) {
  console.log("randomNumber меньше 20")
} else if (randomNumber > 50) {
  console.log("randomNumber больше 50")
} else {
  console.log("randomNumber больше 20, и меньше 50");
}

console.log(randomNumber); // просто, чтобы знать рандомное число 

//5 задание

const randomNumber2 = Math.floor(Math.random() * 100); 

switch (true) {
  case (randomNumber2 < 20) :
      console.log('randomNumber2 меньше 20');
      break;
  case (randomNumber2 > 50) :
    console.log('randomNumber2 больше 50');
    break;
  default :
  console.log('randomNumber2 больше 20, и меньше 50');      
}

console.log(randomNumber2); // просто, чтобы знать рандомное число 


