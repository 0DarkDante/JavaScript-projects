// while

/*let candiec = 8;

while (candiec > 0) {
  console.log('Я открыл коробку, сьел конфету, закрыл коробку');
  candiec = candiec - 1;
}

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
*/

// DO WHILE
/*
let x = 0;

do {
  x++;
  console.log("Hello world!");
} while (x < 0)
*/

// FOR
/*
for (let i = 0; i < 5; i++) {
  console.log(i);
}*/




//Objects
/*
const carBmw = {
  model : 'Bmw',
  country : 'Germany',
  year : 2010,
  color : 'red'
};

const carLada = {
  model : 'Kalina',
  country : 'rus',
  year : 2005,
  color : 'blue'
};

console.log(carBmw.country);
console.log(carLada.color);

const yearBmw = carBmw.year;
const yearLada = carLada.year;

const result = yearBmw + yearLada;
console.log(result);
*/

// Array (Масивы)
/*
const students = ['Петров', 'Иванов', 'Сидоров', 'Демин', 'Яблочкин'];
const amount = students.length;
console.log(amount);
console.log(students.length);
*/

// functions
/*
const showMessage = () => {
  console.log("Привет мир");
};

function showMessage () {
  console.log('второй способ обьявление функции, более старый');
};

showMessage();
*/

const checkAge = (name, age) => {
  if (age > 18) {
    console.log(name + ' армия встречай бойца ');
  } else {
    console.log(name + ' продолжает гулять');
  }
}

checkAge('Valodia', 20);
checkAge('Aleks', 17);


const sum = (x,y) => {
  return x + y;
}

const result = sum(3,5);
console.log(result);
