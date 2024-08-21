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

document.addEventListener("mouseover", e => {
    mouseoverAction(e);
})
