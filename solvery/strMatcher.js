function isMatching(string, str1, str2) {
    let str3 = (str1+str2).toLowerCase().replace(/\s/g, '').split('').sort().join('');
    return str3 === string.toLowerCase().replace(/\s/g, '').split('').sort().join('');
}
//can string === str1 + str2?
