function redarr(arr) {
    arr = arr.sort().filter((el,i)=> i === arr.indexOf(el));
    let arr2 = arr.map((el, i)=> [i, el]);
    let obj = {};
    for (let el of arr2) {
        obj[el[0]] = el[1]
    }
    return obj;
}
// creating object from array
function redarr(arr) {
    return Object.assign({}, Array.from(new Set(arr)).sort());
}
