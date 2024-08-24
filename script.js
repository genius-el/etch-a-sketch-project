let boxCounter = 0;

// Write a function that creates the grid
function boxCreation() {
    // CREATE THE DIVS
    let newDiv = document.createElement('div');

    // Add class and ID
    newDiv.className = 'newBox';
    newDiv.id = 'newPoint';

    // Add attribute
    newDiv.setAttribute('title', 'My New Point');

    //Set properties
    newDiv.style.display = 'flex';
    newDiv.style.height = '60px';
    newDiv.style.width = '60px';
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



// Write a loop that creates multiple boxes
while (boxCounter < 256) {
    console.log(boxCounter);
    boxCreation();
    boxCounter++;
}




