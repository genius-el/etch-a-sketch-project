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
    newDiv.addEventListener('mouseenter', draw);


    function draw(e) {
        newDiv.style.backgroundColor = 'blue';
        console.log('EVENT TYPE: '+e.type);
    }

}

function reset(e) {   
    console.log('EVENT TYPE: '+e.type);
    const userInput = prompt('Number of squares per side(<100):');
    console.log(userInput);

    let intValue = Number(userInput);
    if (intValue < 100) {
        actualValue = intValue ** 2;
        console.log(actualValue);

        // Clear previous grid
        document.querySelector(".container").innerHTML = "";

        // Reset box counter
        boxCounter = 0;

        // Write a loop that creates boxes
        while (boxCounter < actualValue) {
            console.log(boxCounter);
            boxCreation();
            boxCounter++;
        }
    }
    return;
    
}

// Get the button element 
const button = document.querySelector('button');

// Add an event listener to the button for sending prompt message
button.addEventListener('click', reset);
