const grid = document.querySelector('#grid')

for (i=0;i<16;i++) {
    const gridRow = document.createElement('div')
    gridRow.className = 'row'

    for (j=0;j<16;j++) {
        const block = document.createElement('div')
        block.className = 'block'
        block.addEventListener('mouseover', function() {
            block.style.backgroundColor = 'black'
        })
        gridRow.appendChild(block)
    }
    grid.appendChild(gridRow)
}

