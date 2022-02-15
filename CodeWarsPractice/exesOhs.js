function XO(str) {
    let countX = 0;
    let countO = 0;
    let str2 = str.toLowerCase()
    for (let el of str2) {
        if (el === 'x') countX++;
        if (el === 'o') countO++;
    } return countX === countO;
}
