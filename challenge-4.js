function longestWord(sen) {
    const wordArray = sen.split(" ");
    const regex = /[^A-Za-z0-9]/g;
    
    const modifiedWordArray = wordArray.map((str) => {
      return str.replace(regex, "");
    });
  
    const wordCount = modifiedWordArray.map((str) => {
      return str.length;
    })
  
    const largeWord = Math.max(...wordCount);
    const largeIndex = wordCount.indexOf(largeWord);
    const longestWord = wordArray[largeIndex];
  
    return longestWord
  }