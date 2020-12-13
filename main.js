const sketchPad = document.querySelector(".grid-container");
const resetButton = document.querySelector("button");
let numColumns = 32;
let mouseDown = false;

for (let i = 0; i < numColumns*numColumns; i++){
    sketchPad.appendChild(document.createElement('div'));
}

document.addEventListener("mousedown", function() {
    mouseDown = true;
})

document.addEventListener("mouseup", function() {
    mouseDown = false;
})

resetButton.addEventListener("click", resetBoard)

const sketchPadTiles = document.querySelectorAll(".grid-container > div");

sketchPadTiles.forEach((tile) => {
    tile.addEventListener("mouseover", changeBackground)
})


function changeBackground() {
    if (mouseDown) this.classList.add("background");
}

function resetBoard(){
    sketchPadTiles.forEach(tile => {
        tile.classList.remove("background");
    })
}