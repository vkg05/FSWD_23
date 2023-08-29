// this method
// const student = {
//     name : 'Vishal',
//     marks : 78,
//     talk: function() {
//         console.log(`my marks are ${this.name}`);
//     }
// }
// student.talk();

// ----------------------------------------------

// Classes
class Vehicle {
    constructor(model, wheels) {
        this.model = model;
        this.wheels = wheels;
    }
    start() {
        console.log("Vehicle starting");
    }
};

const obj1 = new Vehicle("Sedan", 6);
const obj2 = new Vehicle("Ciaz", 4);

console.log(obj1);
console.log(obj2);

obj1.start();

console.log(typeof obj1);
console.log(typeof Vehicle);

// ---------------------------------------------------

class Person {
    constructor(name) {
        this.name = name;
    }
    // defining method 
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
let person1 = new Person('Vishal');
//accessing property 
console.log(person1.name);
//accessing method
person1.greet();

console.log(typeof Person);
console.log(typeof person1);