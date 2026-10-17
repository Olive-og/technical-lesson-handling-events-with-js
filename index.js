// Select the dodger element for manipulation
const dodger = document.getElementById("doger");
// Set the initial position of the dodger
dodger.style.left = "180px";

document.addEventListener("keydown", function (event) {
    console.log(event.key);
});
// Function to move the dodger left
// Hint: Define a function moveDodgerRight()
function moveDodgerLeft() {
// Hint: Convert the current left position from a string to an integer
    const leftNumbers = dodger.style.left.replace("px", "");
     
    const left = parseInt(leftNumbers, 10);
// Prevent moving off-screen
    if (left > 0) {
        dodger.style.left = `${left - 10}px`;
    }
}


// Function to move the dodger right

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");

    const left = parseInt (leftNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 10}px`;
    }
}

// Attach event listener to respond to key presses

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});






// Attach event listener to respond to key presses
// Hint: Use document.addEventListener to listen for "keydown" events
// Hint: Inside the event listener, call moveDodgerLeft if the left arrow key is pressed
// Hint: Call moveDodgerRight if the right arrow key is pressed