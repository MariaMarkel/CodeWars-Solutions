function unusedDigits(...args) {
    let str = "0123456789";
    let array = [...args].join('');
    let str2 = '';
    for (let i = 0; i < str.length; i++) {
        if (array.includes(str[i])) {
        } else {
            str2 = str2+str[i];
        }
    }
    return str2;
}

// #2
function unusedDigits(...args){
    return "0123456789".replace(new RegExp('['+args.join('')+']','g'), '')
}
