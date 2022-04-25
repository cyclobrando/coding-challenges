function FirstReverse(str) { 

    let lettersArray = str.split("");
    let reversedLettersArray = lettersArray.reverse(); 
    return reversedLettersArray.join(""); 
  
  }