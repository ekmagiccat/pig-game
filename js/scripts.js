//business logic

function game(){
  this.maxScore = 0;
  this.dieRoll = 0;
}

function player(){
  this.player1 = player1;
  this.player2 = player2;
  this.currentPlayer = {};
}












function getRandomNum(min, max) {
  min = Math.ceil(1);
  max = Math.ceil(6);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
