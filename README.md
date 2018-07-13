ES6 is embedded with lots of interesting features. Find below things I found interesing that you could take advantage of in your next **Javascipt** project.

*The purpose of this tutorial is to present ES6 features in clear and simple terms*.

# Variables
One of the common known features of ES6 is the use of the `let` & `const` in declaring variables.  `var` is function-scoped while `let` & `const` are block scope

```
 calculateMonthlyPayment = function(principal, years, rate) {
    if (rate) {
        var monthlyRate = rate / 100 / 12;
    }
    var monthlyPayment = principal * monthlyRate /
        (1 - (Math.pow(1/(1 + monthlyRate), years * 12)));
    return monthlyPayment;
};
```

If you run this piece of code, it should work fine. However, if we replace the `var` keyword with `let`.  The code will return an undefine `monthlyRate` variable. This is so because `monthlyRate` is limited by the block scope identified by  `{ .... }` and the scope of `var`  is defined by the function it was declared. Another important thing to know about  `let` & `const` is that it does not allow duplicate declartion unlike `var`
# Spread Operator
The spread operator lets an **array** or **iterable obeject** should have its content split into sepearte arguments within a call.
The spread operator is triggered with the `"..."` symbol
```
function multiplication(x, y, z) {
    return x * y * z;
}
let num = [5, 10, 4];
console.log('Mul:', multiplication(...num));
//Miniumium
console.log('Minium:', Math.min(...num));
```

from the above example, we did not have to pass the content of `num` as argument to the multiplication function, the spread opeartor extracts out all the emlements of the array and spreads them as the name implies.

Thus, when next you think of using each elements of an array, think of spreading and the spread operator is available for you.

I will show some of the areas the spread operator can come handy in your javascript project.
```
/*Combine Arrays*/
let students = ['Omolola', 'Pelumi', 'Aramide'];
let extraStudents = ['Sholape'];
let newStudents = ['Tolani', ...extraStudents, 'Olayinka'];
students.push(...newStudents);
console.log('Students:', students);

/*Copying Arrays*/
let arr1 = [10, 20, 30];
let arr2 = [...arr1];
arr2.push(40);
console.log("Arrays", arr1, arr2);

/* Convert String To Character Array
* This can be use instead of split()
* */
const str = "mosccoworld";
const strArray = [...str];
console.log('', strArray);

/*Functions that can accept any number of arguments*/
let numbers = [1, 4, 6, 7, 9, 10];
const minNumber = Math.min(...numbers);
console.log('Minimum: ', minNumber);
```

# Arrow Functions
Two factors influenced the introduction of arrow functions: shorter functions and non-binding of `this`.
```
 const sum = (acc, value) => {
     const result = acc + value
      return result
 }
 
 //Easy array filtering
 let arr = [5, 6, 13, 0, 1, 18, 23];

let accumulate = arr.reduce((a, b) => a + b);
console.log('Accumulate:', accumulate); // 66

let even = arr.filter(v => v % 2 == 0);
console.log('Even:', even); // [6, 0, 18]

let double = arr.map(v => v * 2);
console.log('Double:', double);  // [10, 12, 26, 0, 2, 36, 46]

```
Until arrow functions, every new function defined its own `this` value, which forces us to assigning `this` to a variable. Also, arrow functions do not have their own binding arguments.  Arguments passed to it is simply a refrence to the arguments of the enclosing scope.
# Template Literals [String & Objects]
Template Literals reduces the number of `+` operator used for string concatenation. Template literals also comes really handy when you are dealing with multiline strings.
```
// Multi-line string
const desc = `Hello
I am a new Line`;
console.log(desc);
/* Placeholders for variables */
let user = {name: 'moses adebayo', age: 45};
console.log(`Hello ${user.name}, your age is ${user.age} `);
```
# Destructuring
Destructuring is use to extract values from an array or objects which is being assigned to a variable.
```
/*Destructure*/
let person = { name: 'Darwin', sex: 'male', location: 'Ikeja'};
const { name, location } = person;
console.log(`Hello ${name}, you are in ${location}`);
```
# Find/FindIndex
This function extends the functionality of `indexOf`. `find/findIndex` provide a condition for the check. `find ` returns the first element that meets the condition in the array, while `findIndex` returns the index of the first element that meets the condition. 
When none of the elements meets the condition, `find` returns `undefined` , while `findIndex` returns `-1`.

```
const ages = [18, 24, 26, 30, 31, 45, 60];
const check1 = ages.find( a => a < 24); // 18
const check2 = ages.findIndex( a => a === 30); //3
const check3 = ages.findIndex( a => a === 6); //-1
```

# For...Of / For...In
They are basicaly used to iterate over arrays. They work like the `forEach` except it does not require `function` declaration. The major diference between these two methods is that : `For...Of` iterates over `values` while `For...In` iterates over `keys`
```
let books_ = ["Rich Dad Poor Dad", "The Diary", "Manifesto"];
for(let a of books_){
    console.log(a); //returns value
}
for(let a in books_){
    console.log(a); //returns key
}
```
# Modules
Javascript modules promotes reusabilty and maintainibility of codes. There are two sides of Javascript Modules: Export and Import
Export functions allows a particular section to be usable 
```
export let add = (a, b) => {
    return a +b;
};
```

This simple `add` function can be added in another file through the `import` command
```
import { add }  from 'path/to/file';
add(5, 6);  // returns 11
```

# Default Function Parameters
ES6 supports the use of default values for arguments in a method 
```
function welcome(name = 'Anonymous') {
    return `Welcome ${name}`;
}
console.log(welcome());
console.log(welcome('Adeola'));


function getCost(c) {
	let cost = c || 20;
    return `Your cost is ${cost}`;
}
console.log(getCost());
console.log(getCost(30));

```

# Class
Es6 comes with the class keyword. This brings the familiar way of writing classes as with other languages. Find below a sample of writing classes in ES6
```
/*Classes*/
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    info(){
        return `${this.name} ${this.age}`
    }
}

class Student extends Person{
    constructor(name, age, grade){
        super(name, age);
        this.grade = grade;
    }
    info(){
        return `${this.name} ${this.age} ${this.grade}`
    }

}
```
This piece of code demonstrate a base pattern in Object Oriented Programming (OOP) known as inheritance. This tutorial is not target at OOP, however it indicates that OOP is supported in Javascript too.

# Promise
The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
```
let pr = function ad(p) {
    return new Promise(function (resolve, reject) {
        resolve(p + 1);
    })
}

pr(2).then(function (r) {
    console.log('P', r);
}).catch(function (err) {
    console.log(err);
})
```
A `Promise` object returns two objects: `resolve` & `reject`. These two functions determines where your block of code goes to nest when the promise object has finished.
From the sample code shown above, the promise `function` resolves by sending back an incremented value sent to it. This response is gotten throught the `then` function. However, if the promise retuns a `reject` value, it will be gotten through the catch function.

```
function addExtra(price) {
     return new Promise(function (resolve, reject) {
        if(price > 2) reject("Price cannot exceed 3");
        resolve(price + 1);
    })
}
addExtra(1)
    .then(addExtra)
    .then(addExtra)
    .then(function (newPrice) {
        console.log(newPrice);
    }).catch(function (error) {
    console.log(error);
});
```
The above code demonstrates how a `Promise` can be chain together by calling several `then` function. 
```
/*Multiple Promises*/
var price = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(99.99);
    }, 300)
});
var slowPrice = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(199.99);
    }, 800);
});
function greet() {
    return "Hello";
}
var promises = [price, slowPrice, 200, greet];
Promise.all(promises).then(function (resolvedPromises) {
     console.log(resolvedPromises);
});

Promise.race([price, slowPrice]).then(function (resolvedPromises) {
    console.log('Race', resolvedPromises);
}).catch(err => console.log);
```
The piece of code above shows how to explore some in-built methods associated with a Promise object. `Promise.all()` allows you to call on several `Promise` objects. This is also allows you get the all the response of the different `Promise` objects together. `Promise.race()` gives us the ability to call on several `promise` objects and then use the fastest `Promise` to complete our code. This can come in handy when you have to differenjt data sources which contains the same data. You can call on both of them and take advantage of the one that comes in faster.

# Inbuilt Methods
```
//String search
let i = "hello".includes('ell', 1);
let iE2 = "hello".startsWith('ell', 1);
let iE = "hello".endsWith('ell', 4);
console.log('Include', i, iE2, iE);

//Number sign determination
console.log('Number Sign', Math.sign(9));

let check = (arr, ele) => arr.includes(ele);
console.log('Checks', check([1, 2, 3], 4));
```
# Bonus
```
//Get Last Element of  An Array withought using any In-built function
function lastElem(arr, index = 0) {
    return (arr[index +  1] === undefined) ? arr[index] : lastElem(arr, index + 1);
};
//Get Last index of  An Array withought using any In-built function
function lastElemIndex(arr, index = 0) {
    return (arr[index +  1] === undefined) ? index : lastElem(arr, index + 1);
};
//Get Last Nhth elements of  An Array withought using any In-built function
function lastElemNth(arr, numEle) {
    let lastIndex = lastElemIndex(arr);
    let startIndex = lastIndex - numEle;
    if(startIndex < 0) return 'Invalid...';
    let res = [];
    for(let i = startIndex; i < lastIndex; i++ ){
        res.push(arr[i]);
    }
    return res;
};
 console.log('Last Element: ', lastElem([1,2,3, 8,8,8,8]));
 console.log('Last Nth Element: ', lastElemNth([1,2,3, 4, 5, 6, 7, 8], 20));
```

# Conclusion
ES6 is finalized but not fully supported by all browsers (e.g., ES6 Firefox support). To use ES6 today, get a compiler like [Babel](https://babeljs.io/). You can run it as a standalone tool or use it with your build system.
