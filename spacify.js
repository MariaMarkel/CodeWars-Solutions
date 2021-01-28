function spacify(str) {
    let str1 = '';
    for (let el of str) {
        str1 += el+' ';
    } return str1.slice(0,-1)
}
