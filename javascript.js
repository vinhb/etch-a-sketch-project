const container = document.getElementById('container');
const button = document.getElementById('reset');

function grid(n) { // creates n number of divs and appends to container   
    for (let i=0; i<(n**2); i++) { 
        const div = document.createElement('div');
        div.classList.add('grid-item');
        let containerWidth = container.getBoundingClientRect();
        let divWidth = Math.floor(containerWidth.width/n); 
        div.style.width = divWidth;
        div.style.height = divWidth;
        container.appendChild(div);
    }
    container.style.gridTemplateColumns = `repeat(${n},auto)`;
}

grid(16); // initial grid call


button.addEventListener('click', function () {
    input = parseInt(prompt('What size square grid would you like?', 16));
    while (!Number.isInteger(input) || input > 100) {
        input = parseInt(prompt('Please enter an integer number less than 100'));
    }
    container.replaceChildren(); // removes existing grid
    
    grid(input); //creates new grid
});
