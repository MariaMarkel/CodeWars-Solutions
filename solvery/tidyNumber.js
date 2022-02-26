function tidyNumber(n){
    n=String(n);
    let count = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i] > n[i+1]) {
            count++;
        }
    }
    return count === 0;
}

const tidyNumber = n => {
    let s = n.toString();
    for (let i = 0; i < s.length-1; i++) {
        if (s[i] > s[i+1]) return false;
    }
    return true;
}
