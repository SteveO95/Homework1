// Задание 1

let hello = 'Привет';

for (let i = 0; i < 2; i++) {
  console.log(hello);
}
// Задание 2

let number = 5;
for(let i = 1; i <= number; i++) {
    console.log(i)
}

// Задание 3

let count = 22;
for(let i = 7; i <= count; i++) {
    console.log(i)
}


// Задание 4

const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400',
}

for (let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов.`)
}

// Задание 5

let num = 0;

for (let n = 1000; n > 50; n/=2) {
    num++;
    console.log(num);
}


// Задание 6

let friday = 0;

for ( let i = 1; i <= 31; i++) {
    if(friday === 0) {
        let isFriday = confirm('сегодня пятница?');
        if (i === 7 && isFriday === false) {
            console.log('Вы с другой планеты');
            break;
        }
        if (isFriday) {
            friday = i;
        }
    }
    if (friday !== 0 && ((i - friday) % 7 === 0)) {
        console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
    }

}