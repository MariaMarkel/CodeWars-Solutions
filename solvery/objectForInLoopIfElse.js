function giveMeFive(obj){
    let arr = [];
    for (let key in obj) {
        if (key.length === 5 && obj[key].length === 5) {
            arr.push(key, obj[key]);
        }
        else if (key.length === 5) {
            arr.push(key);
        }
        else if (obj[key].length === 5) {
            arr.push(obj[key]);
        }
    }
    return arr;
}
