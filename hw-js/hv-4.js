// //Задание 1
// function minNumber(a, b) {
//     if (a < b) {
//         return a;
//     }
//     return b
// }
// console.log(minNumber(4, 5));


// //Задание 2

// function numString(num) {
//     if (num % 2 === 0) {
//         return 'Число четное'
//     }
//     return 'Число нечетное'
// }

// console.log(numString(6));


// //Задание 3
// function squareNumber(num) {
//     console.log(num ** 2); 
// }

// squareNumber(7);

// function squareNum(num) {
//     return num ** 2;
// }

// console.log(squareNum(5));

// //Задание 4

// function user() {
//     let user = +prompt('Сколько тебе лет?');
//     if (user < 0) {
//         console.log('Вы ввели неправильное значение');
//     } else if (user >= 0 && user <= 12) {
//         console.log('Привет, друг!');
//     } else if (user >= 13) {
//         console.log('Добро пожаловать!');
//     }
// }

// console.log(user());

// //Задание 5

// function correctNumber(a, b) {

//     if (isNaN(a) || isNaN(b)) {
//        return 'Одно или оба значения не являются числом';
//     } else {
//         let result = a * b;
//         return result;
//     }
// }

// console.log(correctNumber(5, 'h'));



// //Задание 6

// function numberCorrect() {
//     let n = +prompt('Введите число');

//     if (isNaN(n)) {
//         console.log('Переданный параметр не является числом');
//     } else {
//         let result = n ** 3;
//         return `${n} в кубе равняется ${result}`
//     }
    
// }

// console.log(numberCorrect());

// //Задание 7

// let circle1 = {
//     radius: 3,
//     getArea() {
// 		return Math.PI * this.radius ** 2;	
// 	},
//     getPerimeter() {
//         return 2 * Math.PI * this.radius;
//     }
// }

// let circle2 = {
//     radius: 2,
//     getArea() {
// 		return Math.PI * this.radius ** 2;	
// 	},
//     getPerimeter() {
//         return 2 * Math.PI * this.radius;
//     }
// }

// console.log(circle1.getArea());
// console.log(circle2.getPerimeter());


// Задача 8

function startGameMonths() {
    let numMounth = +prompt('Введи номер месяца');

    if(isNaN(numMounth) || numMounth < 1) {
        alert('Переданный параметр не является числом месяца');
    } else if (numMounth === 1 || numMounth === 2 || numMounth === 12) {
        alert('Зима');
    } else if (numMounth === 3 || numMounth === 4 || numMounth === 5) {
        alert('Весна');
    } else if (numMounth === 6 || numMounth === 7 || numMounth === 8) {
        alert('Лето');
    } else if (numMounth === 9 || numMounth === 10 || numMounth === 11) {
        alert('Осень');
    }
}