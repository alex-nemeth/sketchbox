function createBoxes(size) {
    let container = document.querySelector(".container");
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amountOfBoxes = size * size;

    for (let i = 0; i < amountOfBoxes; i++) {
        let div = document.createElement("div");
        container.insertAdjacentElement("beforeend", div);
    }
}

//     let amountOfBoxes = size * size;

//     for (let i = 0; i < amountOfBoxes; i++) {
//         let div = document.createElement("div");
//         container.insertAdjacentElement("beforeend", div);
//     }
// }

document.addEventListener("DOMContentLoaded", function () {
    createBoxes(16);
});
