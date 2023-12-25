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

let mounthNumber = prompt('Введи любой номер месяца в году');

if(mounthNumber <= 12) {
    switch (mounthNumber) {
        case '1':
        case '2':
        case '12':
            console.log('зима');
            break;
        case '3':
        case '4':
        case '5':
            console.log('весна');
            break;
    
        case '6':
        case '7':
        case '8':
            console.log('лето');
            break;
    
        case '9':
        case '10':
        case '11':
            console.log('осень');
            break;
        default:
            break;
    }
}




// Задание 7

let num = +prompt('Пожалуйста, введите любое число');

if(isNaN(num)) {
    console.log('число');
} else {
    if(num % 2 === 0 ) {
        console.log('Число четное');
    } else {
        console.log('Число нечетное');
    }
}


//Задание 8
let clientPhone = +prompt('Введите цифру 1 если андроид, введите цифру 0 если ios');
let clientOS = 0;

if(clientOS === clientPhone) {
    console.log('Установите версию приложения для iOS по ссылке')
} else {
    console.log('Установите версию приложения для Android по ссылке');
}


//Задание 9
let clientIOS = 0;
let clientAndroid = 1;
let clientDeviceYear = 2015;

let client = +prompt('Введите цифру 1 если андроид, введите цифру 0 если ios');
let year = +prompt('Укажите год выпуска телефона');


if ((client === clientIOS && year >= clientDeviceYear) || (client === clientAndroid && year >= clientDeviceYear)) {
    console.log('Установите приложение по ссылке');
} else if (client === clientIOS && year < clientDeviceYear ) {
    console.log('Установите облегченную версию приложения для iOS по ссылке');
} else if (client === clientAndroid && year < clientDeviceYear) {
    console.log('Установите облегченную версию приложения для Android по ссылке');
} else {
    console.log('Введите корректные данные');
}