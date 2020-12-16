// global variables
const sketchPad = document.querySelector(".grid-container");
const resetButton = document.querySelector("button");
let mouseDown = false;

// entry point
generateSketchPad();

// event listeners
resetButton.addEventListener("click", resetBoard)
sketchPad.addEventListener("mouseover", function(e) {
    changeBackground(e);
})

sketchPad.addEventListener("mousedown", function(e) {
    changeBackground(e);
})

document.addEventListener("mousedown", function() {
    mouseDown = true;
})

document.addEventListener("mouseup", function() {
    mouseDown = false;
})

// functions

function generateSketchPad(){
    let numColumns = getNumColumns();
    updateNumColumnsInGrid(numColumns);
    createTilesInSketchPad(numColumns);
}

function getNumColumns(){
    let numColumns = prompt("Please enter a number of columns: ");
    while (true){
        if (numColumns < 100 && numColumns !== null) return numColumns;
        numColumns = prompt("Please enter a number less than 100");
    }
}

function updateNumColumnsInGrid(numColumns){
    sketchPad.style.gridTemplateColumns = `repeat(${numColumns},auto)`;
    sketchPad.style.gridTemplateRows = `repeat(${numColumns},auto)`;
}

function createTilesInSketchPad(numColumns) {
    for (let i = 0; i < numColumns * numColumns; i++) {
        sketchPad.appendChild(document.createElement('div'));
    }
}

function resetBoard(){
    removeTiles();
    generateSketchPad();
}

function removeTiles() {
    let sketchPadTiles = document.querySelectorAll(".grid-container > div");
    sketchPadTiles.forEach(tile => {
        sketchPad.removeChild(tile)
    });
}

function changeBackground(e) {
    if (e.type === "mouseover"){
        if (mouseDown) updateColorInTile(e.target);
    }
    else if (e.type === "mousedown"){
        updateColorInTile(e.target);
    }
}

function updateColorInTile(tile) {
    if (tileHasColor(tile)) {
        addOpacityToTile(tile);
    } else {
        tile.style.backgroundColor = getRandomColor();
    }
    
}

function tileHasColor(tile) {
    if (tile.style.backgroundColor) {
        return true;
    } else {
        return false;
    }
}

function addOpacityToTile(tile) {
    return;
}

function getRandomColor() {
    let color = Math.floor(Math.random()*16777215).toString(16);
    return "#" + color;
}