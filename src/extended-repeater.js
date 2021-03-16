const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, obj) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let substr = '' + str;
  let addSubstr = '' + obj.addition;
  if(obj.addition === undefined){
    addSubstr = '';
  }
  let addRepeat = obj.additionRepeatTimes;
  if(obj.additionRepeatTimes === undefined){
    addRepeat = 1;
  }
  let addSepar = obj.additionSeparator;
  let times = obj.repeatTimes;
  if(obj.repeatTimes === undefined){
    times = 1;
  }
  let separ = obj.separator;
  let addSum = '';
  let res = '';
  add(addSubstr, addRepeat, addSepar);
  function add(addSubstr, addRepeat, addSepar = '|') {
    addSum = addSubstr + addSepar;
    addSum = addSum.repeat(addRepeat - 1);
    addSum = addSum + addSubstr;
    return addSum;
  }
  result(str, times, separ);
  function result(str, times, separ = '+'){
  	let res2 = str + addSum + separ;
    res = res2.repeat(times - 1);
    res = res + str + addSum;
    return res;
  }
   
 return res; 
  
};
  