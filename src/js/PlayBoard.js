export default class PlayBoard {
  constructor(element) {
    this._element = element;
  }

  createBoard() {
    const board = document.createElement("div");
    board.classList.add("board");
    for (let i = 0; i < 16; i += 1) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.index = i + 1;
      board.appendChild(cell);
    }
    this._element.appendChild(board);
  }
}
