const charCount = (char, string) => {
    let count = 0;
    string.split("").map((c) => {
        if (c === char){
            count += 1;
        }
    });
    return count
}

console.log(charCount("a", "edabit"));
console.log(charCount("c", "Chamber of secrets"));
console.log(charCount("b", "big fat bubble"))