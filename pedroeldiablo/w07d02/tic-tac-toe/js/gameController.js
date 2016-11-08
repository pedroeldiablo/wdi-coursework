angular.module('TicTacToe')
  .controller('GameController', GameController);

const x = 'x';
const o = 'o';
let turn = 0;

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
      if (turn%2 === 0){
        console.log(this);
        this.cells[$index]= x;
        console.log(this.cells[$index]);
        turn++;
        console.log(turn);
      }else {
        this.cells[$index]= o;
        console.log(this.cells[$index]);
        turn++;
        console.log(turn);
      }
    }
  }

  this.mrClick = mrClick;
}
