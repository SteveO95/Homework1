// задание 1

let str = 'FmdR';
console.log(str.toLocaleUpperCase());

// задание 2

function searchStart(array, str) {
    let newArr = [];
    array.forEach((el) => {
        if (el.toLowerCase().includes(str.toLowerCase())) {
            newArr.push(el);
        }
    })
    return newArr
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));

// задание 3

let number = 32.58884;
console.log('До меньшего целого =', Math.floor(number));
console.log('До большего целого =', Math.ceil(number));
console.log('До ближайшего целого =', Math.round(number));

// задание 4 

let arrNumber = [52, 53, 49, 77, 21, 32];
let min = arrNumber[0];
let max = arrNumber[0];

for (num of arrNumber) {
    if (min > num) {
        min = num;
    } 
    if (max < num) {
        max = num;
    }
}
console.log(min, max);


// задание 5

function randomNumber() {
    return ((Math.floor(Math.random() * 10)) + 1);
}

console.log('рандомное число от 1 до 10 =', randomNumber());

// задание 6

function getRandomArrNumbers(number) {
    let arr = []
    for (let i = 0; i < number; i++) {
        arr.push((Math.floor(Math.random() * number)));
    }
    arr.length = Math.floor( number / 2)
    return arr;
}
console.log('задание 6',getRandomArrNumbers(10));


// задание 7

function rangeNumber(a,b) {
    if (a > b) {
      return Math.floor(Math.random() * (b - a + 1)) + a;
    } else {
      return Math.floor(Math.random() * (a - b + 1)) + b;
    }
  }
  
console.log('рандомное число диапозона =',rangeNumber(10, -7))

// задание 8

let currentDate = new Date();
console.log (currentDate);


// задание 9

let countDate = new Date();
countDate.setDate(countDate.getDate() + 73);
console.log(countDate);

// задание 10 

function dateGet(date) {
    const days = ["Воскресенье", "Понедельник","Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март" ,"Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    let fullDate = 'Дата:' + ' ' + date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ', ' + days[date.getDay()];
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    if (minute < 10) { 
        minute = "0" + minute; 
    }
    if (second < 10) { 
        second = "0" + second;
    }
    let time = 'Время:' + hour + ':' + minute + ':' + second;
    
    return `${fullDate} ${time}`; 
}

console.log(dateGet(new Date()));


// задание 11

function randomFruit() {
    let array = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    let arr = array.sort(() => Math.random() - 0.5);
    alert(arr);
    let oneFruit = arr[0].toUpperCase();
    let lastFruit = arr[arr.length - 1].toUpperCase();
    
    let fruitOne = prompt('Чему равнялся первый элемент массива?');
    let fruitLast = prompt('Чему равнялся последний элемент массива?');
    
    if ((oneFruit === fruitOne.toUpperCase()) && (lastFruit === fruitLast.toUpperCase())) {
      alert('Поздравляем Вы угадали оба элемента!')
    } else if ((oneFruit === fruitOne.toUpperCase()) || (lastFruit === fruitLast.toUpperCase())) {
       alert('Вы были близки к победе!')
    } else {
      alert('Вы не угадали ни одного элемента')
    }
} 

  