const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //throw new CustomError('Not implemented');
    let res = 0;
    for (i = 0; i < matrix.length; i++) {
      for(j = 0; j < matrix[i].length; j++){
        if (matrix[i][j] == '^^'){
        res++
      }
    }
  }
    return res;
};
