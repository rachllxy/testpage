/* Adding an image changer */
let myImage = document.querySelector("img"); /* define the variable as the image img */

myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/haicao.jpg") {
      myImage.setAttribute("src","images/haicao2.jpg"); /* onclick() function sets the previous image to this new one on a click of the mouse */
    } else {
      myImage.setAttribute('src',"images/haicao.jpg");
    }
}

/* Adding a personalized welcome message */
/* Takes references to the new button (in the html file above the script line) and the heading, storing each inside variables. */
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

/*Add the function below to set the personalized greeting. */
function setUserName() { /* setUserName() is a function that we will be creating, it calls on the prompt() function to create and store a data item called 'name', setting its value to the myName variable which contains the user's entry for the name */
  let myName = prompt("Please enter your name.");
  if(!myName) { /* Requests for the username again if it is NULL! - note the ! before the value "myName" */
    setUserName();
  } else {
    localStorage.setItem('name', myName); /* Store what the user input into the prompt into an API called "localStorage" */
    myHeading.textContent = 'Mozilla is cool, ' + myName; /* Changes the heading, in this case <h1>...</h1> to this content instead */
  }
}

/* Recall the stored name that the user input previously */
if(!localStorage.getItem("name")) { /* checks whether the "name" data item exists & call on the data item "name" */
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = "Mozilla is cool, " + storedName;
}

/* Adds function to the button - when clicked on, the setUserName() function will appear to allow the user to change their username */
myButton.onclick = function() {
  setUserName();
}
