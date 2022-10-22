"use strict";

// * Gameboard as an Array in the Gameboard Object
const gameBoard = (() =>
{
    // generate board array
    let board = [];
    for (let i = 0; i < 9; i++)
    {
        board.push("");
    }

    // display square for each array item
    let squares = document.querySelector(".gameboard-div");

    board.forEach((item, index) =>
    {
        const square = document.createElement("div");
        square.className = "flex-item";
        squares.appendChild(square);
    })
})();

// * Players also as Objects

// * Object to control the flow of the game itself

