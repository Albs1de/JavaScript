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

    // Eventlistener for setting marker!
    square.addEventListener("click", function () {
      const markerText = "1";
      const startText = " ";
      if (square.innerHTML == startText && square.innerHTML != markerText) {
        square.innerHTML = "2";
      } else {
        square.innerHTML = markerText;
      }
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
})();

// * Players also as Objects
const Player = function (name, marker) {
  let player = {};
  player.name = name;
  player.marker = marker;
  return player;
};
// * Object to control the flow of the game itself

// Function that allow players to add marks to a specific spot
// on the board.

// Erstelle eine Funktion für Markierungen
// Als Parameter Spieler und gesetzen Marker
// Setze eine Markierung
// Füge diese Markierung in dem DOM ein.
// Überprüfe ob die Markierung schon gesetzt worden ist.
