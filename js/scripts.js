//business logic

function Game(dieRoll, turnScore, totalScore, id) {
  this.dieRoll = dieRoll;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
  this.id = id;
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
  if (this.totalScore >= 10) {
    console.log(this.totalScore);
    return this.totalScore;
  }
  return false;
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

function Play(event) {
  console.log(event.target.id);
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

  if (playerTurn1.firstTo100() !== false) {
    Winner(playerTurn1);
  }
  if (playerTurn2.firstTo100() !== false) {
    Winner(playerTurn2);
  }
  return false;
}

function Winner(Game) {
  document.querySelector("h3").innerText =
    "Dice Player" + Game.id + " " + " won!";
  document.getElementById("roll1").setAttribute("class", "hidden1");
  document.getElementById("roll2").setAttribute("class", "hidden2");
  setTimeout(function () {
    window.location.reload();
  }, 8000);
}

window.onload = function () {
  let roll1 = document.getElementById("roll1");
  roll1.addEventListener("click", Play);

  let hold1 = document.getElementById("hold1");
  hold1.addEventListener("click", Play);

  let roll2 = document.getElementById("roll2");
  roll2.addEventListener("click", Play);

  let hold2 = document.getElementById("hold2");
  hold2.addEventListener("click", Play);
};

/*
Game.prototype.firstTo100 = function(){
  if(this.totalScore >= 100){
    console.log(this.totalScore);
    return this.totalScore;
  }
  return false;
}
*/
