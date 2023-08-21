const grid = document.querySelector('#grid')
const gridSelect = document.querySelector('.selectSize')
const gridClear = document.querySelector('.gridClear')
let gridSize = 16;

gridSelect.addEventListener('click', function() {
    let size = parseInt(prompt("Enter a number between 1-100 to select the number of rows and columns the grid will have:"))
    console.log(size);
    if (isNaN(size)) {
        alert(`Please only enter numbers between 1-100`)
    } else if (size > 100) {
        alert(`${size} is too high! Only enter numbers between 1-100`)
    } else if (size < 1) {
        alert(`${size} is too low! Only enter numbers between 1-100`)
    } else {
        gridSize = size;
        grid.innerHTML = '';
        createGrid(gridSize);
    }
})


gridClear.addEventListener('click', function() {
    grid.innerHTML = '';
    createGrid(gridSize);
})

function createGrid(gridSize) {
    for (i=0;i<gridSize;i++) {
        const gridRow = document.createElement('div')
        gridRow.className = 'row'
    
        for (j=0;j<gridSize;j++) {
            const block = document.createElement('div')
            block.className = 'block'
            block.addEventListener('mouseover', function() {
                block.style.backgroundColor = 'black'
            })
            gridRow.appendChild(block)
        }
        grid.appendChild(gridRow)
    }
}

createGrid(gridSize);