/*Default parameters*/
function sayHello(name) {
    name = name || "Anonymous";
    return `Hello ${name}`;
}

console.log(sayHello(), sayHello('Mosss'), sayHello(0)); //0, null, undefined returns anonymous
