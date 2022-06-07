var countBits = function(n) {
    const bits = n.toString(2);
    const bitArray = bits.split("");
    let bitCount = 0;
    
    const bitArrayNums = bitArray.map((i) => {
      return Number(i);
    })
  
    bitArrayNums.forEach((num) => {
      bitCount = bitCount + num;
    })
  
    return bitCount;
  };

// Best practices

countBits = n => n.toString(2).split('0').join('').length;