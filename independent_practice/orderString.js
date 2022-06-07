function order(words){
    const wordArray = words.split(" ");
    let numArray = [1,2,3,4,5,6,7,8,9];
    let orderedArray = [];
  
    numArray.forEach((num) => {
    wordArray.forEach((word) => {
      if (word.includes(num)) {
        orderedArray.push(word)
      }
    })
  })
  
    return orderedArray.join(" ")
  }

// best practices

function order2(words){
  
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
  }  