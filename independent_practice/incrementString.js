// Your job is to write a function which increments a string, to create 
// a new string.

// If the string already ends with a number, the number should be 
// incremented by 1.
// If the string does not end with a number. the number 1 should be 
// appended to the new string.

function incrementString (str) {
    const index = str.length - 1;
    const splitString = str.split("").map((char) => {
        if (isFinite(char)){
            return Number(char)
        } else return char
    });

    if (!isFinite(splitString[index])) {
        splitString.push("1");
        return splitString.toString().replace(/,/g, "");
    } else if (splitString[index] != 9) {
        splitString.splice(-1, 1, splitString[index]+1)
        return splitString.toString().replace(/,/g, "");
    } else if (splitString[index] === 9 && (!isFinite(splitString[index-1]))) {
        splitString.splice(-1, 1, "10");
        return splitString.toString().replace(/,/g, "");
    } else if (splitString[index] === 9 && (isFinite(splitString[index-1]))) {
        splitString.splice(-1, 1, "0");
        let i = 1;
        const incrementor = () => {
            if (!isFinite(splitString[index-i])){
                return null;
            } else if (isFinite(splitString[index-i]) && splitString[index-i] != 9) {
                splitString.splice(-1-i, 1, splitString[index-i]+1)
            } else if (isFinite(splitString[index-i]) && splitString[index-i] === 9 && (!isFinite(splitString[index-i-1]))) {
                splitString.splice(-1-i, 1, "10");
            } else if (isFinite(splitString[index-i]) && splitString[index-i] === 9 && (isFinite(splitString[index-i-1]))) {
                splitString.splice(-1-i, 1, "0");
                i = i + 1;
                incrementor();
            }
        }
        incrementor();
        return splitString.toString().replace(/,/g, "");
    }
}

// Naturally best practices are much simpler, using regex, advanced
// functions. A lot of stuff here I need to study.

let incrementString2 = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1);

function incrementString3(input) {
    return input.replace(/([0-8]?)(9*)$/, function(s, d, ns) {
        return +d + 1 + ns.replace(/9/g, '0');
      });
  }

function incrementString3(input) {
  if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
  return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
    var up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
}