/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');

console.log(squareEls);
console.log(messageEl);

/*-------------------------------- Functions --------------------------------*/

init();

function init() {
  console.log('Game initialized');

  board = ['', '', '', '', '', '', '', '', ''];
  turn = 'X';
  winner = false;
  tie = false;

  render();
}

/*----------------------------- Event Listeners -----------------------------*/



