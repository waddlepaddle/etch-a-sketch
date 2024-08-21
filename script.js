const container = document.querySelector("#container");

for (let i = 0; i < 16 * 16; i++) {
    const gridBox = document.createElement("div");
    gridBox.classList.add("grid-box");

    container.appendChild(gridBox);
}

function mouseoverAction(e) {
    let target = e.target;

    if (target.className == 'grid-box') {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
}

function mouseoutAction(e) {
    let target = e.target;

    if (target.className == 'grid-box') {
        target.style.backgroundColor = '';
    }
}

document.addEventListener("mouseover", e => {
    mouseoverAction(e);
})

document.addEventListener("mouseout", e => {
    mouseoutAction(e);
})

const gridBox = document.querySelector(".grid-box");
console.log(gridBox);

const button = document.querySelector("button");

button.addEventListener("click", () => {
    let size = prompt("Enter no. of squares per side: ")
    console.log(size);

    const currentGrid = document.getElementsByClassName("grid-box");
    console.log(currentGrid.length)

    while (currentGrid.length > 0) {
        currentGrid[0].remove();
    }

    console.log(currentGrid.length)

    for (let i = 0; i < size * size; i++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("grid-box");
    
        container.appendChild(gridBox);
    }

    // const newGrid = document.getElementsByClassName("grid-box");
    // console.log(newGrid);
    
})