import PlayBoard from "./PlayBoard.js";

const board = new PlayBoard(document.querySelector(".board-container"));

document.addEventListener("DOMContentLoaded", () => {
  board.createBoard();
});
