export default class PlayBoard {
  constructor(element) {
    this._element = element;
  }

  createBoard() {
    let board = document.createElement("div");
    board.classList.add("board");
    for (let i = 0; i < 16; i += 1) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.index = i + 1;
      board.appendChild(cell);
    }
    this._element.appendChild(board);
  }

  createGoblin() {
    let cells = Array.from(this._element.querySelector(".board").children);
    let goblinCell = this._element.querySelector(".cell_selected");
    let lastIndex = 0;
    let index = 0;
    if (!goblinCell) {
      index = Math.floor(Math.random() * cells.length);
      lastIndex = index;
    } else {
      index = Math.floor(Math.random() * cells.length);
      if (lastIndex !== index) {
        cells.forEach((cell) => cell.classList.remove("cell_selected"));
      } else {
        index = Math.floor(Math.random() * cells.length);
        cells.forEach((cell) => cell.classList.remove("cell_selected"));
      }
    }
    cells[index].classList.add("cell_selected");
  }
}
