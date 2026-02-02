

// object stuffInside 
const stuffInside = document.querySelector(".parent-node"); 

const firstChild = stuffInside.firstElementChild; 

console.log(firstChild); 

// create a new tag <div>
const newStuff = document.createElement("div"); 


// specify css styling from js
// newStuff.style.color = "blue"; 
// newStuff.style.cssText = "color: blue, background: white"
newStuff.setAttribute("style", "color: blue, background: white"); 
newStuff.textContent = "js edited text"; 
newStuff.classList.add("huh"); 

stuffInside.appendChild(newStuff); 