// // Задание 1
// let a = 10;
// alert (a);
// a = 20;
// alert (a);

// // Задание 2
//  let release = ( 'Год выпуска первого iPhone - 29 июня 2007 года');
//  alert(release);

// //  Задание 3
// let creator = ('Имя создателя языка JavaScript - Брендан Эйх или Айк');
// alert (creator);

// // Задание 4
// let x = 10;
// let y = 2;

// let sum = x + y;
// alert('Сумма' + sum);

// let difference = x - y;
// alert('Разность' + difference);

// let work = x * y;
// alert('Произведение' + work);

// let divisions = x / y;
// alert('Результат деления' + divisions);

// // Задание 5
// // let base = 2;
// // let exponet =5;

// // let result = Math.pow(base, exponet);

// // alert(`${base} в ${exponet} = ${result}`);  //32

// //Или проще
// // let result = 2 ** 5; //32
// // alert(result);

// //Задание 6
// let q = 9;
// let d = 2;
// let separation = q % d;
// alert(`Остаток от деления ${q} на ${d}  = ${separation}`);

// //Задание 7
// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num += 1;
// num -= 1;
// alert(num);

// //Задание 8 
// let age = Number(prompt('Сколько вам лет'));
// alert(age);

//Задание 9.0
let user = {
    name :  'Sergey Semin',
    age : 28,
    isAdmin : true
};
//Задание 9.1
user['city of residence'] = 'Vladivostok - St. Petersburg';
//Задание 9.2
user.age = 28.1;
//Задание 9.3
delete user['cityOfResidence'];
//Задание 9.4
let info = (prompt("Какую информацию хотите узнать о пользователе?"));
alert(user[info]);

// Задание 10
let greetings = ['Привет', 'Категорически приветствую тебя', 'Здравствуй', 'Салам', 'Hello'];
let randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

let userName = prompt('Как вас зовут?');
alert(`${randomGreeting}, ${userName}!`);
//Сильно будете казнить если я вместо обыного приветствия (нашёл решение для случайного рандомного приветствия?)