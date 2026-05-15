// Boolean variable to track mode
let darkMode = false; 

/* NEW FUNCTION: document.quertSelector 
    lets use select any html element using its tag, class, or id */ 

// const (instead of let) because we are storing a reference to a part of the HTML page
const body = document.querySelector("body"); 
const heading = document.querySelector("#main-heading");
const description = document.querySelector("#description");
const toggleBtn = document.querySelector("#toggle");
const image = document.querySelector("#image");
const emoji = document.querySelector("#emoji"); 

//Now we can change styles and attributes for those elements
heading.style.color = "purple"; //JS wrote CSS code
heading.textContent = "Light Mode & Dark Mode Website"; 

//Define what happens when button is clicked 
function toggleMode(){
console.log("function triggered");
// 1. flip the boolean value 
darkMode = !darkMode; 
console.log(darkMode);
// 2. Conditionally apply styles based on mode 
if (darkMode==true){
    console.log("apply dark mode styles");
    body.style.background = "black";
    heading.style.color = "lightgrey";
    description.style.color = "white";
    description.textContent = "Dark Mode";
    toggleBtn.textContent = "switch to light";
    toggleBtn.style.color= "darkblue";
    toggleBtn.style.background= "lightblue";
    image.src = "sunset.avif";
}
else{
    console.log("apply light mode styles");
    body.style.background = "white";
    heading.style.color= "black";
    description.style.color= "purple";
    description.textContent = "Light Mode";
    toggleBtn.textContent= "switch to dark";
    toggleBtn.style.color= "darkpurple";
    toggleBtn.style.background ="lightpurple";
    image.src = "sunrise.jpg";
}
}
// Attach the function to the button 
toggleBtn.addEventListener("click",toggleMode); 

//Review 
//1. select the new element on the page (by id name)
const hackerBtn = document.querySelector("#hacker");
//2. Attach click event listener to the button 
hackerBtn.addEventListener("click", setHacker);
//3. Define the function that triggers when clicked 
function setHacker() {
    console.log("setting hacker theme...");
    body.style.background = "rgb(41, 40, 40)";
    body.style.color = "rgb(2, 60, 25)";
    body.style.fontFamily = "monospace";
    description.textContent = "You have been hacked";
    image.src="hacker.jpg";
    emoji.classList.add("animated");
}

const pastelBtn = document.querySelector("#pastel"); 
pastelBtn.addEventListener("click", setPastel); 
function setPastel() {
    console.log("setting pastel theme...");
    body.style.background = "rgb(253, 182, 251)";
    body.style.color = "rgb(167, 196, 241)"; 
    body.style.fontFamily = "monospace"; 
    description.textContent = "PASTEL MODE";
    image.src = "pastel.avif";
}

const summerBtn = document.querySelector("#summer"); 
summerBtn.addEventListener("click", setSummer);
function setSummer() {
    console.log("setting summer theme...");
    body.style.background = "rgb(136, 217, 255)";
    body.style.fontFamily = "monospace";
    description.textContent = "SUMMER MODE";
    image.src = "summer.jpg";
}

const springBtn = document.querySelector("#spring"); 
springBtn.addEventListener("click", setSpring);
function setSpring() {
    console.log("setting spring theme...");
    body.style.background = "rgb(250, 171, 236)";
    body.style.fontFamily = "monospace"; 
    description.textContent = "SPRING MODE"; 
    image.src = "spring.webp";
}