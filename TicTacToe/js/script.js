"use strict";

// * Gameboard as an Array in the Gameboard Object
const gameBoard = (() => {
  // generate board array
  let board = [];
  for (let i = 0; i < 9; i++) {
    board.push("");
  }

  // display square for each array item
  let squares = document.querySelector(".gameboard-div");

  const boardItems = board.forEach(() => {
    const square = document.createElement("div");
    square.className = "flex-item";

    //fill the array with "X"
    for (let keys in square) {
      square.textContent = " ";
    }

    squares.appendChild(square);

    Array.from(squares.children).forEach((square, index) => {
      // Eventlistener for setting marker!
      square.addEventListener("click", function () {
        const startText = " ";
        if (square.innerHTML == startText) {
          square.innerHTML = Gameplay.activePlayer.marker;
          square.style.pointerEvents = "none";
          board[index] = Gameplay.activePlayer.marker;
          console.log(board[index]);
          Gameplay.nextPlayer();
          Gameplay.checkWinner();
        }
      });
    });
  });

  // HOW TO FILL THE ARRAY WITH THE DIV VALUES???
  for (let keys in boardItems) {
    board.push(boardItems.square.innerHTML);
  }
  if (board[0] && board[1] == "1") {
    console.log("Winner!!");
  }

  console.log("Board[0] = " + board[0]);
  console.log("Board[1] = " + board[1]);
  return {
    board,
  };
})();

// * Players also as Objects
const Player = (name, marker) => {
  return { name, marker };
};

const Gameplay = (() => {
  // declarate new Players
  const playerOne = Player("Player 1 ", "X");
  const playerTwo = Player("Player 2", "O");

  //starting Point
  let activePlayer = playerOne;

  // winning conditions
  const winningAxes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkWinner() {
    for (let i = 0; i < winningAxes.length; i++) {
      if (
        gameBoard.board[i] === this.activePlayer.marker &&
        gameBoard.board[i + 1] === this.activePlayer.marker &&
        gameBoard.board[i + 2] === this.activePlayer.marker
      ) {
        console.log("Der Gewinner ist: " + this.activePlayer.name);
      }
    }
  }
  // next player
  function nextPlayer() {
    if (this.activePlayer === playerOne) {
      this.activePlayer = playerTwo;
    } else {
      this.activePlayer = playerOne;
    }
  }
  return {
    activePlayer,
    nextPlayer,
    checkWinner,
  };
})();
// * Object to control the flow of the game itself

// Function that allow players to add marks to a specific spot
// on the board.

// Erstelle eine Funktion für Markierungen
// Als Parameter Spieler und gesetzen Marker
// Setze eine Markierung
// Füge diese Markierung in dem DOM ein.
// Überprüfe ob die Markierung schon gesetzt worden ist.
