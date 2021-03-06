const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(str) {
  //throw new CustomError('Not implemented');
  if(typeof str !== 'string' || (str == null || isNaN(str))){
   return false;
  }
  
  str = +str;
  if(str <= 0 || str > MODERN_ACTIVITY){
    return false;
  }
  let res = 0;
  if (!isFinite(str)){
    res = false;
	}
  
  res = Math.ceil(Math.log((MODERN_ACTIVITY / str)) / (0.693 / HALF_LIFE_PERIOD));
  
  return res;
}
