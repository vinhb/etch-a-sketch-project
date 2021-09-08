const container = document.getElementById('container');
const button = document.getElementById('reset');

function grid(n) { // creates n number of divs and appends to container   
    for (let i=0; i<(n**2); i++) { 
        const div = document.createElement('div');
        div.classList.add('grid-item');
        let containerWidth = container.getBoundingClientRect();
        let divWidth = Math.floor(containerWidth.width/n);
        console.log(divWidth);
        div.style.width = divWidth;
        div.style.height = divWidth;
        container.appendChild(div);
    }
    container.style.gridTemplateColumns = `repeat(${n},auto)`;
}

// grid(5);

// function remake() {
//     container.replaceChildren(); // removes existing grid
//     // input = parseInt(prompt('What size square grid would you like?', 16));
//     console.log(input);

//     grid(input); //creates new grid
// }

// button.addEventListener('click', remake());