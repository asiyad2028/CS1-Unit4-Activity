// Boolean variable to track mode
let darkMode = false; 

/* NEW FUNCTION: document.quertSelector 
    lets use select any html element using its tag, class, or id */ 

// const (instead of let) because we are storing a reference to a part of the HTML page
const body = document.querySelector("body"); 
const heading = document.querySelector("#main-heading");
const description = document.querySelector("#description");
const toggleBtn = document.querySelector("#toggle");

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
    toggleBtn.style.background= "lightblue"
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

}

}
// Attach the function to the button 
toggleBtn.addEventListener("click",toggleMode); 