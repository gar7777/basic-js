const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let turns = 2 ** diskNumber - 1;
 // alert (turns);
  let secondTurn = turnsSpeed / 3600;
  let seconds = Math.floor(turns / secondTurn);
 // alert (secondTurn);
  let res = {
    turns: turns,
    seconds: seconds,
  }
  return res;
};
