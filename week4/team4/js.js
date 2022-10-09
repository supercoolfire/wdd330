const  player1 = "X";
const  player2 = "O";
let currentPlayer = player1;

document.querySelector('.grid-item:nth-child(1)').addEventListener("click", () => {playInput(1)});
document.querySelector('.grid-item:nth-child(2)').addEventListener("click", () => {playInput(2)});
document.querySelector('.grid-item:nth-child(3)').addEventListener("click", () => {playInput(3)});
document.querySelector('.grid-item:nth-child(4)').addEventListener("click", () => {playInput(4)});
document.querySelector('.grid-item:nth-child(5)').addEventListener("click", () => {playInput(5)});
document.querySelector('.grid-item:nth-child(6)').addEventListener("click", () => {playInput(6)});
document.querySelector('.grid-item:nth-child(7)').addEventListener("click", () => {playInput(7)});
document.querySelector('.grid-item:nth-child(8)').addEventListener("click", () => {playInput(8)});
document.querySelector('.grid-item:nth-child(9)').addEventListener("click", () => {playInput(9)});


function playInput(gridNumber) {
    console.log(document.querySelector(`.grid-item:nth-child(${gridNumber})`).textContent === null) 
        document.querySelector(`.grid-item:nth-child(${gridNumber})`).textContent = currentPlayer;
        console.log(gridNumber)
            if (currentPlayer == player1) {
                currentPlayer = player2
            }
            else {
                currentPlayer = player1
            }
    }
