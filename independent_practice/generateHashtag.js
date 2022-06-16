// Here's the deal:

//     It must start with a hashtag (#).
//     All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.


function generateHashtag (str) {
    let hashtag = "#";

    str.split(" ").map(word => {
        if (word != " ") {
        const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
        hashtag = hashtag + capitalized
    }})

    if (hashtag === "#" || hashtag.length > 140){
        return false
    } else return hashtag
}

// Best practices: created extra function and used ternary

function generateHashtag2 (str) {
    return str.length > 140 || str === '' ? false :
      '#' + str.split(' ').map(capitalize).join('');
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }