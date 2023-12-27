//Задание 1

let password = 'пароль';
let checkPassword = prompt('Введите пароль');
password === checkPassword ? console.log('Пароль введен верно') : console.log('Пароль введен неправильно');

//Задание 2

let c  = 14;

if(c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 3

let d = 300;
let e = 45;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


//Задание 4

let a = '2';
let b = '3';

console.log(+a + +b);

//Задание 5

let monthNumber = 12;

if (monthNumber < 1 || monthNumber > 12) {
  console.log("Ошибка: Некорректный номер месяца.");
} else {
  let season;

  switch (monthNumber) {
    case 1:
    case 2:
    case 12:
      season = "зима";
      break;
    case 3:
    case 4:
    case 5:
      season = "весна";
      break;
    case 6:
    case 7:
    case 8:
      season = "лето";
      break;
    case 9:
    case 10:
    case 11:
      season = "осень";
      break;
    default:
      season = "невозможно определить";
  }

  console.log(`Месяц номер ${monthNumber} принадлежит к сезону ${season}.`);
}




// Задание 7

let userInput = prompt("Пожалуйста, введите любое число");
let number = parseFloat(userInput);

if (!isNaN(number)) {
  if (number % 2 === 0) {
    alert("Число четное");
  } else {
    alert("Число нечетное");
  }
} else {
  alert("Ошибка: Введенное значение не является числом.");
}


//Задание 8
let clientOS = prompt("Введите 0, если вы используете iOS, или 1, если вы используете Android:");

if (clientOS === "0") {
  console.log("Установите версию приложения для iOS по ссылке");
} else if (clientOS === "1") {
  console.log("Установите версию приложения для Android по ссылке");
} else {
  console.log("Некорректный ввод. Введите 0 для iOS или 1 для Android.");
}


//Задание 9
let clientOC = prompt("Введите 0, если вы используете iOS, или 1, если вы используете Android:");
let clientDeviceYear = prompt("Введите год производства вашего телефона:");

if (clientOC === "0") {
  if (clientDeviceYear >= 2015) {
    console.log("Установите версию приложения для iOS по ссылке");
  } else {
    console.log("Установите облегченную версию приложения для iOS по ссылке");
  }
} else if (clientOC === "1") {
  if (clientDeviceYear >= 2015) {
    console.log("Установите версию приложения для Android по ссылке");
  } else {
    console.log("Установите облегченную версию приложения для Android по ссылке");
  }
} else {
  console.log("Некорректный ввод. Введите 0 для iOS или 1 для Android.");
}