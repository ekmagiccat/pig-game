//business logic

function Game() {
  this.dieRoll = 0;
  this.maxScore = 0;
  this.turnScore = 0;
  this.totalScore = 0;
};

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
    this.turnScore === 0;
  } else {
    this.dieRoll > 1;
    this.turnScore + this.totalScore === 0;
  }
  return totalScore;
};

Game.prototype.turnTotal = function () {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
};

Game.prototype.firstTo100 = function () {
  if (maxScore >= 100) {
    console.log(
      "You are the winner wooooooooooooooooooooooooooooooooo1o1o1o1o1o11o1o1o"
    );
    return this.maxScore;
  }
};

//ui logic








/*function getRandomNum(min, max) {
  min = Math.ceil(1);
  max = Math.ceil(6);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
*/
