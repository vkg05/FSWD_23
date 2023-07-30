//Finding the HTML Elements-
const box2 = document.getElementById("box-2");
// const divs = document.getElementsByTagName("div")


// const container = document.getElementsByClassName("container");

// for(let i = 0; i<10; i++){
//     const boxElement = document.createElement('div');
//     boxElement.classList.add('box');

//     container[0].append(boxElement); 

// }




// const box3 = document.querySelector('.container #box-3');
// const boxMultiple = document.querySelectorAll(".container div");
// console.log(boxMultiple);



// Changing HTML
box2.innerHTML = "<h1> This is a BOX-2 </h1>"; 

box2.style.borderRadius = "50%"
box2.style.backgroundColor = "brown";
box2.classList.add("fancy");  

// box2.classList.remove("box");

// document.getElementById("myImage").src = "https://via.placeholder.com/100";