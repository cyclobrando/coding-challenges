// Write a function that takes in a string of one or more 
// words, and returns the same string, but with all five or 
// more letter words reversed (Just like the name of this 
// Kata). Strings passed in will consist of only letters 
// and spaces. Spaces will be included only when more than 
// one word is present.

function spinWords(str) {
    const strArray = str.split(" ");
    const spunArray = strArray.map((word) => {
      if (word.length >= 5) {
        return word.split("").reverse().join("");
      } else return word
    })
  
    return spunArray.join(" ")
  }

  // Best practices solutions require no variable declaration
  // and ternary expression

  function spinWords2(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }

  // Also possible with regex

  function spinWords(string){
    return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
  }