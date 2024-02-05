//Задания 1
const arr = [1, 5, 4, 10, 0, 3];

for (let item of arr) {
    console.log('числа до 10', item);
    if (item === 10 ) {
        break;
    }
}

//Задания 2

const arr1 = [1, 5, 4, 10, 0, 3];
console.log('индекс числа', arr1.indexOf(4));


//Задания 3

const arr2 = [1, 3, 5, 10, 20];
let res1 = arr2.join(' ');
console.log('массив через пробел', res1);

//Задания 4

let arr11 = [];

for (let i = 0; i < 3; i++) {
	arr11[i] = []; 
	
	for (let j = 0; j < 3; j++) {
		arr11[i].push(1); 
	}
}

console.log('многомерный', arr11);

//Задания 5

const arr4 = [1, 1, 1];
arr4.push(2,2,2);
console.log('добавить 2, 2, 2', arr4);

//Задания 6

const arr5 = [9, 8, 7, 'a', 6, 5];
const res2 = arr5.sort().pop();
console.log('массив из цифр', arr5);

//Задания 7

// const arr6 = [9, 8, 7, 6, 5];
// let num = +prompt('Угадай число от 5 до 9');
// let index = arr6.indexOf(num);

// if (index !== -1) {
//     alert('угадал');
// } else {
//     alert('попробуй еще');
// }


//Задания 8

const str = 'abcdef';
const str1 = str.split('').reverse().join('');
console.log('наоборот', str1);


//Задания 9

const arr7 = [[1, 2, 3,],[4, 5, 6]];
const arr8 = [].concat(...arr7)
console.log(arr8);


//Задания 10

const arr9 = [1,2,3,4,5,9];

for (let i = 0; i < arr9.length; i++) {
    if (i === arr9.length - 1) {
        break;
    }
    console.log(arr9[i] + arr9[i + 1]);
}


//Задания 11

function squareArr(arr) {
    return arr.map(item => item ** 2);
}
const arr10 = [3, 4, 6, 7]
console.log(squareArr(arr10));


//Задания 12

function getLengthWords(arr) {
    return arr.map(item => item.length);
}
const strArr = ['слово', '', 'слог', 'длинное предложение', 'буква'];
console.log(getLengthWords(strArr));

//Задания 13

function filterPositive(array) {
    return array.filter((item) => item < 0);
}

console.log(filterPositive([-1, 0, 5, -10, 56]));


//Задания 14

let randomArr = [];
let randomPositive = [];
for (let i = 0; i < 10; i++) {
    randomArr.push(Math.floor(Math.random() * 10))
}

for( let item of randomArr) {
    if(item % 2 === 0) {
        randomPositive.push(item)
    }
}

console.log('исходный массив', randomArr);
console.log('четные значения',randomPositive);


//Задания 15

let arr12 = [];
for (let i = 0; i < 6; i++) {
    arr12.push((Math.floor(Math.random() * 10)) + 1);
}
console.log('массив', arr12);
let result = arr12.reduce((a,b) => a + b);
console.log('длина массива', arr12.length);
let result1 = result / arr12.length;
console.log('среднее арифметическое', result1);