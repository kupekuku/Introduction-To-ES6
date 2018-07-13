//String search
let i = "hello".includes('ell', 1);
let iE2 = "hello".startsWith('ell', 1);
let iE = "hello".endsWith('ell', 4);
console.log('Include', i, iE2, iE);

//Number sign determination
console.log('Number Sign', Math.sign(9));
console.log('Number Sign', [1, 2].includes(5));

let check = (arr, ele) => arr.includes(ele);
console.log('Checks', check([1, 2, 3], 4));
