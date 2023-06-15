//business logic

function Game() {
  this.dieRoll = 0;
  this.turnScore = 0;
  this.totalScore = 0;
  this.id;
}

/* function Player(){
  this.player1 = player1;
  this.player2 = player2;
  this.currentPlayer = {};
}; */

Game.prototype.Roll = function () {
  this.dieRoll = math.ceil(Math.random() * 6);
};

Game.prototype.rollTurn = function () {
  if (this.dieRoll === 1) {
    this.turnScore = 0;
  } else {
    this.dieRoll > 1;
    this.turnScore += this.totalScore = 0;
  }
  return totalScore;
};

Game.prototype.turnTotal = function () {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
};

Game.prototype.firstTo100 = function () {
  if (totalScore >= 100) {
    console.log(
      "You are the winner wooooooooooooooooooooooooooooooooo1o1o1o1o1o11o1o1o"
    );
    return this.totalScore;
  }
};

//ui logic
let playerTurn1 = new Game(0, 0, 0, 1);
let playerTurn2 = new Game(0, 0, 0, 2);

function playerScores(Game) {
  if (Game.id === 1) {
    let playerRoll1 = document.getElementById("playerRoll1");
    let player1TurnScore = document.getElementById("player1TurnScore");
    let player1TotalScore = document.getElementById("player1TotalScore");

    playerRoll1.innerText = Game.dieRoll;
    player1TurnScore.innerText = Game.turnScore;
    player1TotalScore.innerText = Game.totalScore;
  }
}

if (Game.id === 2) {
  let playerRoll2 = document.getElementById("playerRoll2");
  let player2TurnScore = document.getElementById("player2TurnScore");
  let player2TotalScore = document.getElementById("player2TotalScore");

  playerRoll2.innerText = Game.dieRoll;
  player2TurnScore.innerText = Game.turnScore;
  player2TotalScore.innerText = Game.totalScore;
}

let roll1 = document.getElementById("roll1");
roll1.addEventListener("click", Game);

let roll2 = document.getElementById("roll2");
roll2.addEventListener("click", Game);

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
