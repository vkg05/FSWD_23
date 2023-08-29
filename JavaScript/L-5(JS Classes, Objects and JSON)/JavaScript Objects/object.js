const student = {
    name: "Vishal",
    age: 25,
    isAlive: true,
    hobbies: ['coding', 'eating', 'cycling'],
    foods: {
        sunday : 'Pizza',
        monday : 'Burger'
    }
}; 

student.name = "Rahul";
console.log(student);
console.log(student.name);

student.skill = 'coding';
console.log(student["skill"]);

for( let key in student){
    console.log(`${key} => ${student[key]} `);
}

function getVehicle() {
    return {
        type: 'Car',
        wheels: 4
    }
}
const myVehicle = getVehicle();
console.log(myVehicle);
console.log(typeof getVehicle);
console.log(typeof myVehicle);



// object destructring ES6 after 2015 javaScript

const { name, age, hobbies } = student;
console.log(name);
console.log(age);
console.log(hobbies);


// 