const container = document.querySelector("#container");

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("grid-box");
        container.appendChild(gridBox);
    }
}

createGrid(16)

function mouseoverAction(e) {
    let target = e.target;

    if (target.className == 'grid-box') {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
}

document.addEventListener("mouseover", e => {
    mouseoverAction(e);
})

const setGridSize = document.getElementById("set-grid-size");

setGridSize.addEventListener("click", () => {
    let size = prompt("Enter no. of squares per side: (1-35)");
    
    while (size == null || size == "" || size > 35 || !Number.isInteger(+size)) {
        alert("Please enter a number between 1-35 :)");
        size = prompt("Enter no. of squares per side: (1-35)");
    }

    const gridBoxWidth = document.querySelector(".grid-box").offsetWidth;

    const currentGrid = document.getElementsByClassName("grid-box");

    while (currentGrid.length > 0) {
        currentGrid[0].remove();
    }

    const newContainerWidth = (size * gridBoxWidth) + +size;
    container.style.width = `${newContainerWidth}px`;

    createGrid(size);
})

document.addEventListener("mouseover", (e) => {
    if (e.target.nodeName == "BUTTON") {
        e.target.style.backgroundColor = '#888888';
    }
})

document.addEventListener("mouseout", (e) => {
    if (e.target.nodeName == "BUTTON") {
        e.target.style.backgroundColor = 'lightpink';
    }
})

const clearGrid = document.querySelector("#clear-grid");

clearGrid.addEventListener("click", () => {
    const gridBoxes = document.querySelectorAll(".grid-box");

    gridBoxes.forEach((box) => {
        box.style.backgroundColor = '';
    })
})