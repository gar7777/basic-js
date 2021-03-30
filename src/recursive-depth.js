const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
 
  calculateDepth(arr) {
    if(!Array.isArray(arr)){
      return 0;    
    }
    let z = 0;
    let n = 0;
    for(let prop of arr){
    n = this.calculateDepth(prop);
      if(n < z){
        n = z;
      }
    }
    return (n + 1);
    }
};