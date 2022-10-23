const transactions = ['571a319c8c', 'bd32bd6c05', '1c28a0c411', '9b425707b3', '979d1c10a1', '94641b2966'];
const test = [44, 55, 66, 77, 88, 2, 3, 4];

// true
// false
const str = 'abcdefgh';

if (str.includes('f1g')) {
    console.log('yes');
    // 
}
else {
    console.log('no');
}


const users = [
    { "name": "ivanov", "age": 44 },
    { "name": "petrov", "age": 14 },
    { "name": "pitrov", "age": 37 },
    { "name": "alexeev", "age": 43 },
]

let newUsers = users.filter(item => {
    return item.name.includes('pe')
});

console.log(newUsers);

const a10 = [67, '55', 2, 5, '4', '8', 8, '66', '54', 11, NaN];

const f10 = () => {
    if (a10.indexOf(NaN) !== -1) {
        // не выполнится                   е выполнится    
        console.log('Сработал indexOf');
    }

    if (a10.includes(NaN)) {
        // выполнится                      выполнится  
        console.log('Сработал includes');
    }
}

// TASK 11
// Ну и на прокачку ваших скиллов. Выполните код ниже. Изучите консоль. По очереди расскоментируйте строки  и смотрите на результат. Проанализируйте.

const a11 = [[1, 2], { a: 1 }, true, '', [1], Infinity, undefined, null];

const f11 = () => {
    let c = [1, 2];  //false
    c = { a: 1 };    //false
    c = true;        // true
    c = '';          // true
    c = [1];         //false
    c = Infinity;    // true
    c = undefined;  // true
    c = null;       // true
    console.log(a11.includes(c));
}