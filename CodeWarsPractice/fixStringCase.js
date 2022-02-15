function solve(s){
    let countCap = 0;
    let countLow = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= 'a' && s[i] <= 'z') countLow++;
        if (s[i] >= 'A' && s[i] <= 'Z') countCap++;
    } return countLow < countCap ? s.toUpperCase() : s.toLowerCase()
}
