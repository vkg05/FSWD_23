const a = [11, 22, 31, 44, 57, 68, 72, 81];

function isEven(num) {
    return num % 2 == 0;
}

function isOdd(num) {
    return num % 2 != 0;
}

// const b = a.filter((element) => {
//     return element % 3 == 0;
// });


function square(num) {
    return num * num;
}

const b = a.map(square);


console.log(a); 
console.log(b);

const student = [
    {
        name: "Anuj",
        marks: 32
    }, {
        name: "Shivam",
        marks: 67
    }, {
        name: "Sanchita",
        marks: 76
    }, {
        name: "Raj",
        marks: 87
    }
]

const grades = student.map((element) => {
    if(element.marks < 50) {
        element.isPassed = false;
    } else {
        element.isPassed = true;
    }
    return element;
});

const found = student.filter((element) => {
    return element.marks > 50;
})
console.log(grades);