const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) != '[object Date]'){
     throw new Error();
   }

         
    let month = date.getMonth();
    let seasons = ['spring', 'summer', 'autumn', 'winter'];
    let res = '';
    
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
