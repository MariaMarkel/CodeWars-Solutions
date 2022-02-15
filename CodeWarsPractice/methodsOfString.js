function fiveLine(s){
    let str = ''
    s = s.trim()
    for (let i = 1; i <= 5; i++) {
        str += s.repeat(i) + '\n';
    }
    return str.slice(0,-1);
}