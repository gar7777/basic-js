const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)){
    throw new Error('Not implemented');
  }
  let resArr = arr.slice();
  // for(i = 0; i < resArr.length; i++){
  //   let prop = resArr[i];
  //   if(prop.match(/--/)){
  //     break;
  //   }
  //   if(isNaN(prop) == true){
  //     resArr.splice(i, 1);
  //   }
  // }
  if (arr.includes('--double-next')) {
  	let point = resArr.indexOf('--double-next');
   		if (point != resArr.length - 1){
      resArr.splice(point, 2, resArr[point - 1] + resArr[point - 1]);
      }
      else {
      resArr.splice(point, 1);
      }
  //  alert (resArr);
  }
  else if (arr.includes('--double-prev')) {
  	let point = resArr.indexOf('--double-prev');
   	if (point != 0){
    	resArr.splice(point - 1, 2, resArr[point - 1] + resArr[point - 1]);
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
    	
  return resArr;
};