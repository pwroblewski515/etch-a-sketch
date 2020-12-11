const grid = document.querySelector(".grid-container");
let numColumns = 32;
let mouseDown = false;

for (let i = 0; i < numColumns*numColumns; i++){
    grid.appendChild(document.createElement('div'));
}

document.addEventListener("mousedown", function() {
    mouseDown = true;
})

document.addEventListener("mouseup", function() {
    mouseDown = false;
})

const gridSquares = document.querySelectorAll(".grid-container > div");

gridSquares.forEach((square) => {
    square.addEventListener("mouseover", changeBackGround)
})


function changeBackGround() {
    if (mouseDown) this.classList.add("background");
}