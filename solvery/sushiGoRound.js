function totalBill(str) {
    let str1 = str.replace(/\s/g,'');
    return str1.length*2 - (Math.trunc(str1.length/5))*2;
}

function totalBill(s) {
    return s.replace(/ /g, "").replace(/r{5}/g, 'rrrr').length * 2;
}
