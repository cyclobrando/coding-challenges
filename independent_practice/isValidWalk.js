// ..it sends you an array of one-letter strings representing 
// directions to walk (eg. ['n', 's', 'w', 'e']). You always
// walk only a single block for each letter (direction) and 
// you know it takes you one minute to traverse one city block, 
// so create a function that will return true if the walk the 
// app gives you will take you exactly ten minutes (you don't 
// want to be early or late!) and will, of course, return you 
// to your starting point. Return false otherwise.

function isValidWalk(walk) {
    if (walk.length !== 10){
      return false
    }
  
    let coordinates = [0, 0];
    
    walk.forEach((block) => {
      if (block === "n"){
        coordinates[1] = coordinates[1] + 1;
      } else if (block === "s") {
        coordinates[1] = coordinates[1] - 1;
      } else if (block === "e") {
        coordinates[0] = coordinates[0] + 1;
      } else if (block === "w") {
        coordinates[0] = coordinates[0] - 1;
      }
    });
  
  
    if (coordinates[0] !== 0 || coordinates[1] !== 0){
      return false
    } else return true
    
  }

  // best practices uses switch statement and no if/else

  function isValidWalk2(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length
    
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    
    return dt === 10 && dx === 0 && dy === 0
  }

  // other practices also manage to eliminate if/else

  function isValidWalk3(walk) {
    const north = walk.filter(item => { return item === "n" }).length;
    const south = walk.filter(item => { return item === "s" }).length;
    const east = walk.filter(item => { return item === "e" }).length;
    const west = walk.filter(item => { return item === "w" }).length;
    
    return walk.length === 10 && north === south && east === west;
  }