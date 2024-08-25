// Set counter for box creation
let boxCounter = 0;
let actualValue;

// Write a function that creates the grid
function boxCreation() {
    // CREATE THE DIVS
    let newDiv = document.createElement('div');

    // Add class
    newDiv.className = 'newBox';

    // Add attribute
    newDiv.setAttribute('title', 'My New Point');

    //Set properties
    newDiv.style.display = 'flex';
    newDiv.style.height = '10px';
    newDiv.style.width = '10px';
    newDiv.style.border = '2px solid black';
    newDiv.style.backgroundColor = 'white';

    //APPEND TO THE CONTAINER
    let container = document.querySelector(".container");
    container.append(newDiv);

    // ADD HOVER EFFECT
    // Add event listeners
    const randInt = (int) => {
        return Math.floor(Math.random() * int)
    };

    newDiv.addEventListener('mouseenter', () => {
        newDiv.style.backgroundColor = `rgb(${randInt(256)}, ${randInt(256)}, ${randInt(256)})`;

    })
}

function reset(e) {   
    console.log('EVENT TYPE: '+e.type);
    const userInput = prompt('Number of squares per side(<100):');
    console.log(userInput);

    let intValue = Number(userInput);
    if (isNaN(intValue) || intValue <=0 || intValue >= 100) {
        alert("Please enter a valid number between 1 and 99.");
        return;
    }

    actualValue = intValue ** 2;
    console.log(actualValue);

    // Clear previous grid
    document.querySelector(".container").innerHTML = "";

    // Reset box counter
    boxCounter = 0;

    // Write a loop that creates boxes
    while (boxCounter < actualValue) {
        boxCreation();
        boxCounter++;
    }
}

// Get the button element 
const button = document.querySelector('button');

// Add an event listener to the button for sending prompt message
button.addEventListener('click', reset);
