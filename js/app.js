/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [0, 4, 8], // diagonal
  [2, 4, 6], // diagonal
];

/*---------------------------- Variables (state) ----------------------------*/

let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
const resetBtnEl = document.querySelector('#reset');


/*-------------------------------- Functions --------------------------------*/

init();

function init() {
  board = ['', '', '', '', '', '', '', '', ''];
  turn = 'X';
  winner = false;
  tie = false;

  render();
}

function render() {
  updateBoard();
  updateMessage();
}

function updateBoard() {
  board.forEach((cell, idx) => {
    // idx matches the square id and the NodeList order
    squareEls[idx].textContent = cell;
  });
}

function updateMessage() {
  if (winner === false && tie === false) {
    messageEl.textContent = `It's ${turn}'s turn`;
  } else if (winner === false && tie === true) {
    messageEl.textContent = `It's a tie!`;
  } else {
    // winner is true, so the current turn is the winner
    messageEl.textContent = `Congrats ${turn}! You won!`;
  }
}

function handleClick(evt) {
  const squareIndex = Number(evt.target.id);

  // square already taken?
  if (board[squareIndex] !== '') return;

  // game already over?
  if (winner === true || tie === true) return;

  placePiece(squareIndex);
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
  render();
}

function placePiece(index) {
  board[index] = turn;
}

function checkForWinner() {
  winningCombos.forEach((combo) => {
    const a = combo[0];
    const b = combo[1];
    const c = combo[2];

    if (
      board[a] !== '' &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      winner = true;
    }
  });
}

function checkForTie() {
  if (winner === true) return;

  if (board.includes('')) {
    tie = false;
  } else {
    tie = true;
  }
}

function switchPlayerTurn() {
  if (winner === true) return;

  if (turn === 'X') {
    turn = 'O';
  } else {
    turn = 'X';
  }
}


/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((square) => {
  square.addEventListener('click', handleClick);
});

resetBtnEl.addEventListener('click', init);


