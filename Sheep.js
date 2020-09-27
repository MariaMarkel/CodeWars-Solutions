function countSheeps(arrayOfSheep) {
    let count = 0;
    for (let el of arrayOfSheep) {
        if (el === true) count++;
    } return count;
}