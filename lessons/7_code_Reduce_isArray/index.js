let a = [
    { "id": 55, "city": "arc" },
    { "id": 75, "city": "rca" },
    { "id": 175, "city": "bra" },
];

// [55, 75, 175]

let b = a.reduce((accum, item) => {
    accum.push(item.id);
    return accum;
}, []);
console.log('===========');
console.log(b);
b = 'hello';
console.log(Array.isArray(b));
