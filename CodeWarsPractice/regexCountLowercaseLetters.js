function lowercaseCount(str){
    let abc = 'abcdefghijklmnopqrstuvwxyz';
    let count = 0;
    for (let el of str) {
        if (abc.includes(el)) {
            count++;
        }
    } return count;
}
