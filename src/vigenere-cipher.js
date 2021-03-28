const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  constructor(type) {
    this.type = type;
  }
  
  encrypt(message, key) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let cipher = '';
    let mesUp = message.toUpperCase();
    let keyUp = key.toUpperCase();
    let j = 0;
     
    for(i = 0; i < message.length; i++){
      let mod = j % key.length;
      let mesPos = mesUp.codePointAt(i) - 65;
      let keyPos = keyUp.codePointAt(mod) - 65;

      if(/[\W\d]/.test(mesUp[i]) === true){
        cipher = cipher + mesUp[i];
      }
    	else{    
      	cipher = cipher + String.fromCharCode(((mesPos + keyPos) % 26) + 65);
        j++;
      } 
    }
    let result = cipher;
    if(this.type == false){
      result = '';
      for(i = cipher.length - 1; i >= 0; i--){
        result += cipher[i];
      }
    }  
  return result;
  } 

 decrypt(message, key) {
    let cipher = '';
    let mesUp = message.toUpperCase();
    let keyUp = key.toUpperCase();
    let j = 0;
     
    for(i = 0; i < message.length; i++){
      let mod = j % key.length;
      let mesPos = mesUp.codePointAt(i) - 65;
      let keyPos = keyUp.codePointAt(mod) - 65;
  
      if(/[\W\d]/.test(mesUp[i]) === true){
        cipher = cipher + mesUp[i];
      }
      else{    
       let code = mesPos - keyPos;
       cipher = cipher + String.fromCharCode(((26 + code) % 26) + 65);
       j++
      } 
    } 
    let result = cipher;
    if(this.type == false){
      result = '';
      for(i = cipher.length - 1; i >= 0; i--){
        result += cipher[i];
      }
    }    
  return result;
  }   

} 

module.exports = VigenereCipheringMachine;
