const a = [1,2,3,4,5,6];

function filterNumbers(randomNumbers) {
    const b = [];
    for(let i=0; i<a.length; i++){
        if(randomNumbers(a[i])){
            b.push(a[i]);
        }
    }
    return b;
}

function isEven(num) {
    return num % 2 == 0;
}

function isOdd(num) {
    return num % 2 != 0;
}

const evenNumbers = filterNumbers((num) => {
    return num % 3 == 0;
});

console.log(evenNumbers);