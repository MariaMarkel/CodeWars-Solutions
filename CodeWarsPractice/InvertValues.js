function invert(array) {
    let arr1 = [];
    for (let el of array) {
        arr1.push(-el);
    }
    return arr1;
}