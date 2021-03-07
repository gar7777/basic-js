const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)){
    throw new Error('Not implemented');
  }
  let resArr = arr.slice();
  if (arr.includes('--double-next')) {
  	let point = resArr.indexOf('--double-next');
   		if (point != resArr.length - 1){
      resArr.splice(point, 2, double(resArr[point + 1]));
      }
      else {
      resArr.splice(point, 1);
      }
  //  alert (resArr);
  }
  else if (arr.includes('--double-prev')) {
  	let point = resArr.indexOf('--double-prev');
   	if (point != 0){
    	resArr.splice(point - 1, 2, double(resArr[point - 1]));
    }
     else {
      resArr.splice(point, 1);
      }    
  //  alert (resArr);
  }
  else if (arr.includes('--discard-next')) {
  	let point = resArr.indexOf('--discard-next');
   	if (point != resArr.length - 1){
    	resArr.splice(point, 2);
    }
    else {
      resArr.splice(point, 1);
      }
  //  alert (resArr);
  }
  else if (arr.includes('--discard-prev')) {
  	let point = resArr.indexOf('--discard-prev');
   	if (point != 0){
    resArr.splice(point - 1, 2);
    }
    else {
      resArr.splice(point, 1);
      }
  //  alert (resArr);
  }
   
  function double (value) {
    return (value * 2);
  }
 	
  return resArr;
};
