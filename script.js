// Create variable for button element using ID
const button = document.getElementById("my-btn");

// Define function to return message
const alertMessage = () => {
    alert("Thank you <3");
};

// Add event listener to button element with function to open dialogue box with message
button.addEventListener("click", alertMessage);

const sad_button = document.getElementById("my-other-btn");

// Define function to return message
const sad_alertMessage = () => {
    alert("Oh... 💔");
};

// Add event listener to button element with function to open dialogue box with message
sad_button.addEventListener("click", sad_alertMessage);