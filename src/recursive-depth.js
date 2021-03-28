const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
 
calculateDepth(arr) {
  if(!Array.isArray(arr)){
     return 0;    
  }
  for(let prop of arr){
     return Math.max(this.calculateDepth(prop) + 1);
    }
  }
};