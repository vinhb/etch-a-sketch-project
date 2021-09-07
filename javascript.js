function grid(n) { // creates n number of divs and appends to container
    const container = document.getElementById('container')
    for (let i=0; i<n**2; i++) {
        const div = document.createElement('div')
        container.appendChild(div);
    }

    container.style.gridTemplateColumns = `repeat(${n}, auto)`;
}

grid(16);