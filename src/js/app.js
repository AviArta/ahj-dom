import "../css/style.css";
import PlayBoard from "./PlayBoard.js";

const board = new PlayBoard(document.querySelector(".board-container"));

document.addEventListener("DOMContentLoaded", () => {
  board.createBoard();
  setInterval(() => board.createGoblin(), 2000);
});
