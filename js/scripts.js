function getRandomNum(min, max) {
  min = Math.ceil(1);
  max = Math.ceil(6);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
