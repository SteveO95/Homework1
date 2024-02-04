//задача 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
 
function compareNumbers(a, b) {
    return a.age - b.age;
}

console.log(people.sort(compareNumbers)) 
 

//задача 2

function isPositive(arr) {
    return arr.filter(item => item > 0);
}
  
function isMale(arr) {
    return result = arr.filter(item => item.gender === 'male');
}
  
function filter(arr, callback) {
    return callback(arr);
}
  
const people1 = [
     {name: 'Глеб', gender: 'male'},
     {name: 'Анна', gender: 'female'},
     {name: 'Олег', gender: 'male'},
     {name: 'Оксана', gender: 'female'}
];
  
console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
console.log(filter(people1, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

//задача 3

const timer = () => {
    const interval = setInterval(() => {
        let date = new Date();
        console.log(date.toString())
    }, 3000)
    
    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло')
    }, 30000)
    
}

timer();

//задача 4

function delayForSecond(callback) {
	setTimeout(() => {
        callback();
    }, 1000);
}

delayForSecond(function () {
   console.log('Привет, Шамиль!');
})

//задача 5

// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(sayHi.bind(null,'Глеб'))