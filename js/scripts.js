//business logic

function Game(dieRoll, turnScore, totalScore, id) {
  this.dieRoll = dieRoll;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
  this.id= id; //Do we need to define id as 'this.id = id;'?
}

Game.prototype.Roll = function () {
  this.dieRoll = Math.ceil(Math.random() * 6);
};

Game.prototype.rollTurn = function () {
  if (this.dieRoll === 1) {
    this.turnScore = 0;
  } else {
    this.dieRoll > 1;
    this.turnScore += this.dieRoll;
  }
  return this.turnScore;
};

Game.prototype.turnTotal = function () {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
};

Game.prototype.firstTo100 = function () {
  if (totalScore >= 100) {
    console.log("You are the winner wooooooooooooooooooooooooooooooooo");
    return this.totalScore;
  }
};

//ui logic
let playerTurn1 = new Game(0, 0, 0, 1);
let playerTurn2 = new Game(0, 0, 0, 2);

function playerScores(Game) {
  console.log(Game);
  if (Game.id === 1) {
    let playerRoll1 = document.getElementById("playerRoll1");
    let player1TurnScore = document.getElementById("player1TurnScore");
    let player1TotalScore = document.getElementById("player1TotalScore");

    playerRoll1.innerText = Game.dieRoll;
    player1TurnScore.innerText = Game.turnScore;
    player1TotalScore.innerText = Game.totalScore;
  }

  if (Game.id === 2) {
    let playerRoll2 = document.getElementById("playerRoll2");
    let player2TurnScore = document.getElementById("player2TurnScore");
    let player2TotalScore = document.getElementById("player2TotalScore");

    playerRoll2.innerText = Game.dieRoll;
    player2TurnScore.innerText = Game.turnScore;
    player2TotalScore.innerText = Game.totalScore;
  }
}

function Play() {
  if (event.target.id === "roll1") {
    playerTurn1.Roll();
    playerTurn1.rollTurn();
    playerScores(playerTurn1);
  } else if (event.target.id === "hold1") {
    playerTurn1.turnTotal();
    playerScores(playerTurn1);
  } else if (event.target.id === "roll2") {
    playerTurn2.Roll();
    playerTurn2.rollTurn();
    playerScores(playerTurn2);
  } else if (event.target.id === "hold2") {
    playerTurn2.turnTotal();
    playerScores(playerTurn2);
  }
  return false;

  
}

window.onload = function () {
  let roll1 = document.getElementById("roll1");
  roll1.addEventListener("click", Play);

  let hold1 = document.getElementById("hold1");
  roll1.addEventListener("click", Play);

  let roll2 = document.getElementById("roll2");
  roll2.addEventListener("click", Play);

  let hold2 = document.getElementById("roll2");
  hold2.addEventListener("click", Play);
};

// //function diceWinner(Game) {
/* "Dice Player" + Game.id + "is the Winner!";
/* }

//potential button listeners
let rollButton1 = document.getElementById("roll1");
rollButton1.addEventListener("click", function () {
  playerTurn1.Roll();
  playerScores(playerTurn1);
});

let rollButton2 = document.getElementById("roll2");
rollButton2.addEventListener("click", function () {
  playerTurn2.Roll();
  playerScores(playerTurn2);
});

//previous code that didn't work:
 let roll1 = document.getElementById("roll1");
roll1.addEventListener("submit", Game.Roll);

let roll2 = document.getElementById("roll2");
roll2.addEventListener("submit", Game.Roll); */

/* window.addEventListener("load", function () {
  document
    .querySelector("form#bankAccount")
    .addEventListener("submit", handleNewBankAccount);
  document
    .querySelector("form#depositWithdrawal")
    .addEventListener("submit", handleDepositWithdrawals);
}); */

// let player2 = document.querySelector("input[id='player-2']:checked").value;

/* - Richard's Confused Corner - 

Game.prototype.rollTurn = function () {
  if (this.dieRoll === 1) {
    this.turnScore = 0;
  } else {
    this.dieRoll > 1; <- is this redundant?
    this.turnScore += this.totalScore = 0; <- combines then totals at 0?
  }
  return totalScore;
}; 

Would this work better?
Game.prototype.rollTurn = function () {
  if (this.dieRoll === 1) {
    this.turnScore = 0;
  } else {
    this.turnScore += this.dieRoll;
    this.totalScore += this.turnScore;
    this.turnScore = 0;
  }
  return this.totalScore;
};
*/

/*function getRandomNum(min, max) {
  min = Math.ceil(1);
  max = Math.ceil(6);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
*/
