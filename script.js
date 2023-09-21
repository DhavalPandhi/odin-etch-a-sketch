let color = "black";

document.addEventListener("DOMContentLoaded", function() {
    createBoard(10)
    let btn_popup = document.querySelector("#popup")
    btn_popup.addEventListener("click", function() {
        let size = getSize();
        createBoard(size);
    })
})

function createBoard(size) {
    let container = document.querySelector(".container");
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", boxColor)
        div.style.backgroundColor = "white"
        container.insertAdjacentElement("beforeend", div);
    }
}

function getSize() {
    let input = prompt("Select size of board (between 2 and 100)");
    let message = document.querySelector("#message");
    if(input == ""){
        message.innerHTML = "Please provide a number"
    } else if (input < 2 || input > 100){
        message.innerHTML = "Please choose a number between 2 and 100"
    } else {
        message.innerHTML = ""
        return input;
    }
}

function boxColor() {
    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

 function changeColor(choice) {
    color = choice
 }

 function clearBoard() {
    let container = document.querySelector(".container");
    let boxes = container.querySelectorAll("div");
    boxes.forEach((div) => div.style.backgroundColor = "white")
 }