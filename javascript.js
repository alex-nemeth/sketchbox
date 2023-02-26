function createBoxes(size) {
    let container = document.querySelector(".container");
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amountOfBoxes = size * size;

    for (let i = 0; i < amountOfBoxes; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorOnClick);
        container.insertAdjacentElement("beforeend", div);
    }
}

function size() {
    let input = -1;
    while (input < 0 || input > 100) input = prompt("Size of the sketchbox?");
    return input;
}

function colorOnClick() {
    this.style.backgroundColor = color;
}

let color = "black";

//MAIN
createBoxes(size());
