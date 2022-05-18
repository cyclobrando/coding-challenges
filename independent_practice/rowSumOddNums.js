// Given the triangle of consecutive odd numbers:
//             1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ... Calculate the sum of the numbers in the nth row of 
// this triangle (starting at index 1) e.g.: (Input --> Output)

function rowSumOddNumbers(n) {

    let oddArray = [-1];
    let sumToAdd = 0;
    
      
    let i = n
    function updateOddArray(i) {
        for (let j=0; j<i; j++){
        newOdd = oddArray[oddArray.length-1]+2;
        oddArray.push(newOdd);
        }
  
        let nextNumber = i - 1;
              
        if (nextNumber>0) {
          updateOddArray(nextNumber)
        }
      }
      
      updateOddArray(i);
  
      let k = n;
      while (k>0){
        sumToAdd = sumToAdd + oddArray[oddArray.length-k];
        k--
      }
  
      return sumToAdd;  
}

// LOL best practices seem to know more about math than I do

function rowSumOddNumbers2(n) {
    return Math.pow(n, 3);
  }