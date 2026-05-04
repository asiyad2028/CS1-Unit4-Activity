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

