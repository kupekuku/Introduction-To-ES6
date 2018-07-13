//Used to pass arguments to functions
function multiplication(x, y, z) {
    return x * y * z;
}
let num = [5, 10, 4];
console.log('5 * 10 * 4:', multiplication(...num));

/*
* Deep Copy of Arrays
* */
const testData = ["Aero", "Arik", "British"];
const copyTestData = [...testData, "Medview"];
console.log(copyTestData);

/*
* Convert string to Array
* */
const name = "moscoworld";
const name_split = [...name];
console.log(name_split);

/*
* Functions that accept any number of arguments
* */
const numbers = [1, 2, 3, 4, 5, 6];
const min_number = Math.min(...numbers);
const max_number = Math.max(...numbers);
console.log('[Min, Max]', [min_number, max_number]);
