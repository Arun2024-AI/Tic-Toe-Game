let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X"; // Player 1 starts
let gameOver = false;

function makeMove(index) {
    if (board[index] === "" && !gameOver) {
        board[index] = currentPlayer;
        document.getElementById(`cell-${index}`).textContent = currentPlayer;

        if (checkWinner()) {
            document.getElementById("status").textContent = `${currentPlayer} Wins! 🎉🎉`;
            gameOver = true;
            return;
        }

        currentPlayer = (currentPlayer === "X") ? "O" : "X"; // Switch player
        document.getElementById("status").textContent = `${currentPlayer}'s turn`;
    }
}

function checkWinner() {
    const winningCombination = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let combination of winningCombination) {
        const [a, b, c] = combination;
        if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;
    document.getElementById("status").textContent = `${currentPlayer}'s turn`;

    for (let i = 0; i < 9; i++) {
        document.getElementById(`cell-${i}`).textContent = "";
    }
}

