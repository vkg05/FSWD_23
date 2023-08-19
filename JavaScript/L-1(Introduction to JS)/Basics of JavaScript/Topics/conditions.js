// if-else
const age = 29;

if (age > 19) {
    console.log("you can drive");
}
else {
    console.log("you cannot drive");
}


// ternary operator

age > 19 ? console.log('you can drive'):console.log('you cannot drive');


// logical operators 

const ages = 59;
if(ages > 19 && ages < 40){
    console.log('you can drive')
}
else {
    console.log('you cannot drive.')
}


// else-if

const day = 2;

if(day == 1){
    console.log ("sunday");
}
else if (day == 2){
    console.log("Tuesday");
}
else if (day == 3){
    console.log("Wednesday");
}
else if (day == 4){
    console.log("Thursday");
}
else {
    console.log("Chill day");
}


//Switch

const days = 4;
console.log('calculating for switch');

switch (day){
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break; 
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break; 
    case 6:
        console.log('Friday');
        break; 
    case 7:
        console.log('Saturday');
        break; 
    default: 
        console.log('Chill');
        break;               
}
console.log('done');

