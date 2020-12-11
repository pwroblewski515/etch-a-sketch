const grid = document.querySelector(".grid-container");
const reset = document.querySelector("button");
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

reset.addEventListener("click", resetBoard)

const gridSquares = document.querySelectorAll(".grid-container > div");

gridSquares.forEach((square) => {
    square.addEventListener("mouseover", changeBackGround)
})


function changeBackGround() {
    if (mouseDown) this.classList.add("background");
}

function resetBoard(){
    gridSquares.forEach(square => {
        square.classList.remove("background");
    })
}