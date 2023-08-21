const box = document.getElementById("box"); //find element
const container = document.getElementById("container");
// function logMessage(){
//     console.log("hi this is a log");
// } 
// OR
const cordinates = document.createElement('p');
document.body.append(cordinates);
const logMessage = (event) => {
    // console.log(event);
    // cordinates.innerHTML = `${event.offsetX}, ${event.offsetY}`;
    box.style.left = `${event.offsetX}px`;
    box.style.left = `${event.offsetY}px`;
}

const onPageScroll = (event) => {
    console.log(event);
}

document.addEventListener('scroll', onPageScroll);

container.addEventListener('mousemove', logMessage);