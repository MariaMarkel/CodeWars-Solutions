var capitals = function (word) {
    let arr = [];
    for (let el of word) {
        if (el === el.toUpperCase()) arr.push(word.indexOf(el));
    } return arr;
};
