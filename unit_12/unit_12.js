// TASK 01
// По нажатию b-1 выполняется функция f1. Функция с помощью every проверяет, все элементы массива a1 больше a1_from и меньше a1_to (строго больше и строго меньше). Результат проверки вывести в out-1. 


let a1 = [22, 33, 44, 55, 66, 77, 88];
let a1_from = 7;
let a1_to = 100;

const f1 = () => {
    let out = a1.every(item => {
        if (item >= a1_from && item <= a1_to) {
            return true;
        }
    })

    document.querySelector('.out-1').innerHTML = out;
}


// TASK 02
// По нажатию b-2 выполняется функция f2. Функция с помощью every проверяет, все элементы массива a2 больше a2_from и меньше a2_to (строго больше и строго меньше). Результат проверки вывести в out-2. 

let a2 = [];
let a2_from = 7;
let a2_to = 100;

const f2 = () => {
    let out = a2.every(item => {
        if (item >= a2_from && item <= a2_to) return true;
    })
    document.querySelector('.out-2').innerHTML = out;
}

// TASK 03
// По нажатию b-3 выполняется функция f3. Функция с помощью every проверяет, что сумма элементов каждого из вложенных массивов в массив a3 больше 20 (строго больше). Результат проверки вывести в out-3. 


let a3 = [[5, 5, 11], [10, 10, 17]];

const f3 = () => {
    let out = a3.every(item => summa(item) > 20);
    document.querySelector('.out-3').innerHTML = out;
}
// В задаче 3 для вычисления суммы массива можно использовать вспомогательную доп. функцию которая считает сумму элементов.
const summa = (arr) => {
    let sum = 0;
    for (let item of arr) {
        sum += item;
    }
    return sum;
}

// TASK 04
// По нажатию b-4 выполняется функция f4. Функция с помощью every проверяет, что каждый вложенный массив массива a4 содержит число 100. Результат проверки вывести в out-4. Рекомендуется для проверки использовать includes. 


let a4 = [[100, 200], [300, 100, 400], [500, 700, 100, 800]];

const f4 = () => {
    let out = a4.every(item => item.includes(100));
    document.querySelector('.out-4').innerHTML = out;
}

// TASK 05
// По нажатию b-5 выполняется функция f5. Функция с помощью every проверяет, что все совершеннолетние пользователи (больше или равно 16 лет) провели оплату ( pay - true). Результат проверки вывести в out-5. 

let a5 = [
    { "name": "Akemi", "age": 33, "pay": true },
    { "name": "Den", "age": 23, "pay": true },
    { "name": "Eiko", "age": 36, "pay": true },
    { "name": "Chieko", "age": 41, "pay": true },
    { "name": "Tadako", "age": 47, "pay": true },
    { "name": "Tomiko", "age": 15, "pay": false },
    { "name": "Utano", "age": 56, "pay": true }
];

const f5 = () => {
    let out = a5.every(item => {
        if (item.age >= 16 && item.pay === true) return true;
    })
    document.querySelector('.out-5').innerHTML = out;
}

// TASK 06
// По нажатию b-6 выполняется функция f6. Проверяет что все элементы массива a6 больше чем переменная a6_from и выводит в out-6 true или false, в зависимости от результата. Задачу решать без применения every. 


let a6 = [1, 4, 2, 6, 7, 3, 5, 2, 9];
let a6_from = 1

const f6 = () => {
    let out = true;
    for (let item of a6) {
        if (item <= a6_from) out = false;
        break;
    }

    document.querySelector('.out-6').innerHTML = out;
}

// TASK 07
// Напишите функцию f7, которая запускается по кнопке b-7. Функция с помощью every проверяет все ли элементы массива a7 больше чем a7_from. Обратите внимание на нашу дописку... Проанализируйте ее работу. Результат работы вывести в out-7.


let a7 = [10, 20, 30];
let a7_from = 5;

const f7 = () => {
    let res = a7.every((item, index) => {

        if (index == 2) {
            a7.push(2);
        }
        if (item > a7_from) return true
    });
    console.log(a7)
    document.querySelector('.out-7').innerHTML = res;
}

// TASK 08
//  Напишите функцию f8, которая запускается по кнопке b-8. Функция c помощью some проверяет, что хотя один из элементов массива a8 был больше 100. Результат выводит в out-8.

let a8 = [10, 4, 20, 6, 70, 30, 500, 2, 9];

const f8 = () => {
    let out = a8.some(item => {
        if (item > 100) return true
    });
    document.querySelector('.out-8').innerHTML = out;
}

// TASK 09
// Напишите функцию f9, которая запускается по кнопке b-9. Функция проверяет массив a9 с помощью some на наличие пользователей с возрастом меньше или равным 16. Результат выводит в out-9.

let a9 = [
    { "name": "Ivan", "age": 34 },
    { "name": "Petro", "age": 24 },
    { "name": "Orest", "age": 45 },
    { "name": "Virii", "age": 35 },
    { "name": "Blamo", "age": 47 },
    { "name": "Vandeya", "age": 27 },
    { "name": "Inna", "age": 13 },
    { "name": "Gretta", "age": 25 },
    { "name": "Brianna", "age": 55 }
];

const f9 = () => {
    let out = a9.some(item => {
        if (item.age <= 16) return true;
    });
    document.querySelector('.out-9').innerHTML = out;
}

// TASK 10
// По нажатию b-10 выполняется функция f10. Функция с помощью some проверяет, что в a10 есть элементы большие чем a10_from. Обратите внимание, функция сравнения теперь не анонимная, а называется isBigFrom и выполнена в виде отдельной функции. Результа вывести в out-10.

let a10 = [10, 20, 30, 50, 60];
let a10_from = 55;

const isBigFrom = num => {
    if (num > a10_from) return true;
}

const f10 = () => {
    let out = a10.some(isBigFrom);
    document.querySelector('.out-10').innerHTML = out;
}




document.querySelector('.b-1').addEventListener('click', f1);
document.querySelector('.b-2').addEventListener('click', f2);
document.querySelector('.b-3').addEventListener('click', f3);
document.querySelector('.b-4').addEventListener('click', f4);
document.querySelector('.b-5').addEventListener('click', f5);
document.querySelector('.b-6').addEventListener('click', f6);
document.querySelector('.b-7').addEventListener('click', f7);
document.querySelector('.b-8').addEventListener('click', f8);
document.querySelector('.b-9').addEventListener('click', f9);
document.querySelector('.b-10').addEventListener('click', f10);