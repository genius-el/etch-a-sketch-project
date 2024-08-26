// Set counter for box creation
let boxCounter = 0;

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
    // Create a random function for rgb value generation
    function randInt(max) {
        return Math.floor(Math.random() * max)
    };

    // Initialize opacity of current div
    newDiv.opac = 0; // Starts at 0

    newDiv.setAttribute('data-opac', '0');

    function increaseOpacity(div) {
        // Retrieve the current opacity from the data attribute
        let opac = parseFloat(div.getAttribute('data-opac'));
        if (opac < 1) {
            opac = Math.min(opac + 0.1, 1);
            div.setAttribute('data-opac', opac.toString());
        }
        return opac;
    }

    newDiv.addEventListener('mouseenter', () => {
        if (!newDiv.hasAttribute('data-color')) {
            // Generate the random color only once and store it in a data attribute
            const red = randInt(256);
            const green = randInt(256);
            const blue = randInt(256);
            newDiv.setAttribute('data-color', `${red}, ${green}, ${blue}`);
        }
        
        // Retrieve the fixed color from the data attribute
        const color = newDiv.getAttribute('data-color');

        // Increase the opacity
        const opac = increaseOpacity(newDiv);

        // Apply the color with the updated opacity
        newDiv.style.backgroundColor = `rgba(${color}, ${opac})`;

    });
}

function enterGridNumber(e) {   
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

    
    // Reset box counter
    boxCounter = 0;

    // Write a loop that creates boxes
    while (boxCounter < actualValue) {
        boxCreation();
        boxCounter++;
    }
}

function reset(e) {
    // Clear previous grid
    document.querySelector(".container").innerHTML = "";
}

// Get the buttonReset element 
const buttonReset = document.getElementById('reset');

// Add an event listener to the button for reset the grid
buttonReset.addEventListener('click', reset);

// Get the enter button element
const buttonEnter = document.getElementById('enter');

// Add an event listener for outputing prompt message for getting grid number
buttonEnter.addEventListener("click", enterGridNumber);