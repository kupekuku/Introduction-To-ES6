/*  Single line function */
const sum = (a, b) => a + b;
console.log(sum(2, 5));
/* Returning Object Literals
* Note that the object was enclose in a bracket
* otherwise it will return undefined*/
const bio = () => ({ state: 'Kwara'});
console.log('Bio', bio());

/*More samples */
const max25 = a => a > 25 ? 25 : a;
console.log('Max25:', max25(22));
console.log('Max25:', max25(98));

//Easy array filtering
let arr = [5, 6, 13, 0, 1, 18, 23];

let accumulate = arr.reduce((a, b) => a + b);
console.log('Accumulate:', accumulate); // 66

let even = arr.filter(v => v % 2 == 0);
console.log('Even:', even); // [6, 0, 18]

let double = arr.map(v => v * 2);
console.log('Double:', double);  // [10, 12, 26, 0, 2, 36, 46]

