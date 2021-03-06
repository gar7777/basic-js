const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  //throw new CustomError('Not implemented');
  if (!Array.isArray(arr) || arr.length == 0){
    return false;
  }
  
  let arrNames = [];
  let res = '';
  for(let name of arr){
  	if (typeof name == 'string'){
    	let trimmed = name.trim();
      arrNames.push(trimmed[0].toUpperCase());
     }
   }
   arrNames = arrNames.sort();
   res = arrNames.join('');   
 	return res;
};
