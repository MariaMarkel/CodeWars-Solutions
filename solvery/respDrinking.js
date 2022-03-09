function hydrate(s) {
    s = s.split(/(\d)/).map(el=> parseInt(el)).join(' ').replace(/NaN/g, '');
    let count = 0;
    for (let el of s){
        if (el === NaN) {
            continue;
        } else {
            count += +el;}
    }
    return count=== 1? `${count} glass of water` : `${count} glasses of water`;
}
