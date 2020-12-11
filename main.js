const grid = document.querySelector(".grid-container");
let numColumns = 32;

for (let i = 0; i < numColumns*numColumns; i++){
    grid.appendChild(document.createElement('div'));
}

const gridSquares = document.querySelectorAll(".grid-container > div");

gridSquares.forEach((square) => {
    square.addEventListener("mouseover", changeBackGround)
})


function changeBackGround() {
    this.classList.add("background");
}