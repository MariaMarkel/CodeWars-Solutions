function makeString(s){
    s=s.split(' ');
    let str = '';
    for (let el of s) {
        str += el[0]
    }
    return str;
}

const makeString = s => s.split(' ').map(x => x[0]).join('');
