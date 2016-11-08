angular.module('TicTacToe')
  .controller('GameController', GameController);

let player = 'X';
let turn = 0;

let row1 = [];
let row2 = [];
let row3 = [];
let col1 = [];
let col2 = [];
let col3 = [];
let diag1 = [];
let diag2 = [];

function GameController() {
  this.cells = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ];



  function mrClick($index) {
    console.log('Oooh you clicked me!', $index);
    if (this.cells[$index] === null) {
      turn++;
      player = turn%2 === 0 ? 'O' : 'X';
        console.log(this);
      this.cells[$index]= player;
      console.log(this.cells[$index]);
      console.log(turn);
      const row1 = [this.cells[0], this.cells[1], this.cells[2]];
      let row2 = [this.cells[3], this.cells[4], this.cells[5]];
      let row3 = [this.cells[6], this.cells[7], this.cells[8]];
      let col1 = [this.cells[0], this.cells[3], this.cells[6]];
      let col2 = [this.cells[1], this.cells[4], this.cells[7]];
      let col3 = [this.cells[2], this.cells[5], this.cells[8]];
      let diag1 = [this.cells[0], this.cells[4], this.cells[8]];
      let diag2 = [this.cells[2], this.cells[4], this.cells[6]];
      checkForWin();
    }
  }

  this.mrClick = mrClick;
  this.checkForWin = checkForWin;
  this.checkRows = checkRows;
  this.checkColumns = checkColumns;
  this.checkDiags = checkDiags;
  this.checkCells = checkCells;






}


function checkForWin() {
  if(checkRows() || checkColumns() || checkDiags()) {
    // winner.textContent = player + ' has won!';
  } else if(turn === 9) {
    // winner.textContent = 'It\'s a draw!';
  }
}

// clearBtn.addEventListener('click', resetGame);

// function resetGame() {
//   for(let i=0;i<this.cells.length;i++) {
//     this.cells[i] = null;
//   }

  // winner.textContent = '';

  // turn = 0;
// }

function checkRows() {
  return checkCells(row1) || (row2) || checkCells(row3);
}

function checkColumns() {
  return checkCells(col1) || checkCells(col2) || checkCells(col3);
}

function checkDiags() {
  return checkCells(diag1) || checkCells(diag2);
}

function checkCells(cellsArray) {
  return cellsArray.every(function(cell) {
    return this.cells[$index] === player;
  });
}
