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
let p = new Person('moses', 56);
console.log('Person', p.info());
let s = new Student('moses', 56, 'A');
console.log(s.info());
