function extractLowerCase(str) {
    lowerCaseWord = ""
    str.split("").map((letter) => {
        if (letter == letter.toLowerCase()){
            lowerCaseWord = lowerCaseWord + letter
        }
    })
    return lowerCaseWord;
}