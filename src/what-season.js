const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  if (Object.prototype.toString.call(date) !== '[object Date]'){
    throw new Error();
  }

    // remove line with error and write your code here
    res = '';
    if (date === undefined){
      res = 'Unable to determine the time of year!';
      return res;
    }
        
    let month = date.getMonth();
    let seasons = ['spring', 'summer', 'autumn', 'winter'];
    
    switch (month) {
      case 11:
      case 0:
      case 1:
        res = seasons[3];
        break;
      case 2:
      case 3:
      case 4:
        res = seasons[0];
        break;
      case 5:
      case 6:
      case 7:
        res = seasons[1];
        break;
      case 8:
      case 9:
      case 10:
        res = seasons[2];
        break;
    }

    return res;
  };
