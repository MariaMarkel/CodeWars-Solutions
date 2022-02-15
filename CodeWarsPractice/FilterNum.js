var FilterString = function(value) {
    let str = '';
    for (let el of value) {
        if (isNaN(el) == false) str += el;
    }
    return +str;
}