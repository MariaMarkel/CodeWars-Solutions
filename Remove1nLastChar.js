function removeChar(str){
    let s = '';
    for (let i = 1; i < str.length - 1; i++) {
        s = s + str[i];
    }
    return s;
};