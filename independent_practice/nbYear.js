// More generally given parameters:
// p0, percent, aug (inhabitants coming or leaving each year),
// p (population to surpass)... the function nb_year should 
// return n number of entire years needed to get a population 
// greater or equal to p.


function nbYear(p0, percent, aug, p) {
    let truePercent = percent / 100;
    let yearCounter = 0;
    let popCount = p0;
  
    function increasePop() {
      popCount = Math.floor(popCount + truePercent * popCount + aug);
      yearCounter = yearCounter + 1;
  
      if (popCount < p){
        increasePop();
      }
    }
    
    increasePop();
    return yearCounter
  }

 // best practices uses a simple for loop, though with logic
//  I didn't know was possible

function nbYear(p0, percent, aug, p) {
    
    for (var years = 0; p0 < p; years++) {
      p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
  }