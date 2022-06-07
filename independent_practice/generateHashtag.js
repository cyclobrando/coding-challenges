function generateHashtag (str) {
    let strSplit = str.split("");
    let hashtag = "#";
    if (str === ""){
        return false;
    }

    strSplit.map((char) => {
        if (strSplit[strSplit.indexOf(char) - 1] === " "){
            char.toUpperCase();
        }
        
        if (char != " ") {
            hashtag = hashtag + char
        }

    })

    return hashtag
}

console.log(generateHashtag(" Hello there thanks for trying my Kata"))