const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str: '',
  res: '',
  getLength() {
    //throw new CustomError('Not implemented');
    let arr = this.str.split('~~');
    return arr.length;
  },
  addLink(value) {
    //throw new CustomError('Not implemented');
    if(this.str.length > 0){
      let arr = this.str.split('~~');
      arr.push(`( ${value} )`);
      this.str = arr.join('~~');
    }
    else{
    	this.str = `( ${value} )`;
    }
    return this;
  },
  removeLink(position) {
    let arr = this.str.split('~~');
    if (!Number.isInteger(position) || position > arr.length){
      this.str = '';
      throw new Error('Wrong number!');
    ;
  }
   	arr.splice(position - 1, 1);
    this.str = arr.join('~~');
    return this;
  },
  reverseChain() {
    //throw new CustomError('Not implemented');
    let arr = this.str.split('~~');
    arr = arr.reverse();
    this.str = arr.join('~~');
    return this;
  },
  finishChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.res = this.str;
    this.str = '';
    return this.res; 
  }
};

module.exports = chainMaker;
