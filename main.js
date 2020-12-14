const sketchPad = document.querySelector(".grid-container");
const resetButton = document.querySelector("button");
let mouseDown = false;
generateSketchPad();

function getNumColumns(){
    let numColumns = prompt("Please enter a number of columns: ");
    while (true){
        if (numColumns < 100) return numColumns;
        numColumns = prompt("Please enter a number less than 100");
    }
}

function updateNumColumnsInGrid(numColumns){
    sketchPad.style.gridTemplateColumns = `repeat(${numColumns},auto)`;
    sketchPad.style.gridTemplateRows = `repeat(${numColumns},auto)`;
}

document.addEventListener("mousedown", function() {
    mouseDown = true;
})

document.addEventListener("mouseup", function() {
    mouseDown = false;
})

resetButton.addEventListener("click", resetBoard)


function changeBackground(e) {
    if (e.type === "mouseover"){
        if (mouseDown) e.target.classList.add("background");
    }
    else if (e.type === "click"){
        e.target.classList.add("background");
    }
}

function resetBoard(){
    removeTiles();
    generateSketchPad();
}

function generateSketchPad(){
    let numColumns = getNumColumns();
    updateNumColumnsInGrid(numColumns);
    createTilesInSketchPad(numColumns);
}

function createTilesInSketchPad(numColumns) {
    for (let i = 0; i < numColumns * numColumns; i++) {
        sketchPad.appendChild(document.createElement('div'));
    }
    let sketchPadTiles = document.querySelectorAll(".grid-container > div");

    sketchPadTiles.forEach((tile) => {
    tile.addEventListener("mouseover", function(e) {
        changeBackground(e);
    });
    tile.addEventListener("click", function(e){
        changeBackground(e);
    });
})
}

function removeTiles() {
    let sketchPadTiles = document.querySelectorAll(".grid-container > div");
    sketchPadTiles.forEach(tile => {
        sketchPad.removeChild(tile)
    });
}