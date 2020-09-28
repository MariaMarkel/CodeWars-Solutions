function squareOrSquareRoot(array) {
    let arr = [];
    for (let el of array) {
        if (Math.sqrt(el) % 1 === 0) arr.push(Math.sqrt(el));
        else if ((Math.sqrt(el) % 1 !== 0)) arr.push(Math.pow(el, 2));

    }
    return arr;
}