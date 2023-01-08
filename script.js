// need to take in player name inputs
// assign correct player icons and turns
// need to start game
// push and store player choice to array
// check if player has won
const gameBoard = document.querySelector(".box-container");
const playerDisp = document.getElementById("player-disp");

const players = [
  {
    player: "player1",
    icon: "img/ninjasolo.svg",
  },
  {
    player: "player2",
    icon: "img/muchaLucha.svg",
  },
];

const player1 = players[0].player;
const player1Icon = players[0].icon;
const player2 = players[1].player;
const player2Icon = players[1].icon;

let currentPlayer = player1;
let currentPlayerIcon = player1Icon;

let gameboardArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// Listen for gameboard clicks
gameBoard.addEventListener("click", (e) => {
  if (!e.target.classList.contains("avail")) return;

  // remove specified class from box selection so
  // that...
  e.target.classList.remove("avail");

  // Change background color on selected box
  e.target.classList.add("selected-color");

  // Store selected box id # into variable
  // so that it can be pushed to proper
  // location in the gameboardArray
  let i = e.target.id;

  let currentChoice = e.target;

  addToArray(i);
  displayPlayerSelection(currentChoice);
  checkForTie();
  checkForWinner();
  playerSwitch();
});

// add selected box to array with the
// correct player info/icon
const addToArray = (i) => {
  gameboardArray[i] =
    currentPlayerIcon === player1Icon ? player1Icon : player2Icon;
};

// Switch player and icon after each turn
const playerSwitch = () => {
  if (currentPlayer === player1) {
    currentPlayer = player2;
    currentPlayerIcon = player2Icon;
  } else if (currentPlayer === player2) {
    currentPlayer = player1;
    currentPlayerIcon = player1Icon;
  }
};

// Display the player icon onto the gameboard
const displayPlayerSelection = (choice) => {
  const addIcon = document.createElement("img");
  addIcon.classList.add(
    currentPlayer === player1 ? "ninja-piece" : "lucha-piece"
  );
  addIcon.src = currentPlayerIcon === player1Icon ? player1Icon : player2Icon;
  choice.appendChild(addIcon);
};

// Check if all the board boxes have been used
// and if so return text that displays 'Tie Game'
const checkForTie = () => {
  if (
    !gameBoard.children[0].classList.contains("avail") &&
    !gameBoard.children[1].classList.contains("avail") &&
    !gameBoard.children[2].classList.contains("avail") &&
    !gameBoard.children[3].classList.contains("avail") &&
    !gameBoard.children[4].classList.contains("avail") &&
    !gameBoard.children[5].classList.contains("avail") &&
    !gameBoard.children[6].classList.contains("avail") &&
    !gameBoard.children[7].classList.contains("avail") &&
    !gameBoard.children[8].classList.contains("avail")
  ) {
    playerDisp.textContent = "";
    playerDisp.textContent = "Tie Game!";
    return;
  }
};

const checkForWinner = () => {
  if (
    // check for horizontal win
    (gameboardArray[0] === player1Icon &&
      gameboardArray[1] === player1Icon &&
      gameboardArray[2] === player1Icon) ||
    (gameboardArray[3] === player1Icon &&
      gameboardArray[4] === player1Icon &&
      gameboardArray[5] === player1Icon) ||
    (gameboardArray[6] === player1Icon &&
      gameboardArray[7] === player1Icon &&
      gameboardArray[8] === player1Icon) ||
    // check for vertical win
    (gameboardArray[0] === player1Icon &&
      gameboardArray[3] === player1Icon &&
      gameboardArray[6] === player1Icon) ||
    (gameboardArray[1] === player1Icon &&
      gameboardArray[4] === player1Icon &&
      gameboardArray[7] === player1Icon) ||
    (gameboardArray[2] === player1Icon &&
      gameboardArray[5] === player1Icon &&
      gameboardArray[8] === player1Icon) ||
    // check for diagonal win
    (gameboardArray[0] === player1Icon &&
      gameboardArray[4] === player1Icon &&
      gameboardArray[8] === player1Icon) ||
    (gameboardArray[2] === player1Icon &&
      gameboardArray[4] === player1Icon &&
      gameboardArray[6] === player1Icon)
  ) {
    playerDisp.textContent = "";
    playerDisp.textContent = "Player 1 wins!";
  } else if (
    // check for horizontal win
    (gameboardArray[0] === player2Icon &&
      gameboardArray[1] === player2Icon &&
      gameboardArray[2] === player2Icon) ||
    (gameboardArray[3] === player2Icon &&
      gameboardArray[4] === player2Icon &&
      gameboardArray[5] === player2Icon) ||
    (gameboardArray[6] === player2Icon &&
      gameboardArray[7] === player2Icon &&
      gameboardArray[8] === player2Icon) ||
    // check for vertical win
    (gameboardArray[0] === player2Icon &&
      gameboardArray[3] === player2Icon &&
      gameboardArray[6] === player2Icon) ||
    (gameboardArray[1] === player2Icon &&
      gameboardArray[4] === player2Icon &&
      gameboardArray[7] === player2Icon) ||
    (gameboardArray[2] === player2Icon &&
      gameboardArray[5] === player2Icon &&
      gameboardArray[8] === player2Icon) ||
    // check for diagonal win
    (gameboardArray[0] === player2Icon &&
      gameboardArray[4] === player2Icon &&
      gameboardArray[8] === player2Icon) ||
    (gameboardArray[2] === player2Icon &&
      gameboardArray[4] === player2Icon &&
      gameboardArray[6] === player2Icon)
  ) {
    playerDisp.textContent = "";
    playerDisp.textContent = "Player 2 wins!";
  }
};

// const game = () => {};
