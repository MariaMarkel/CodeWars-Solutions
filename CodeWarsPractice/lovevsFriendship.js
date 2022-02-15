function wordsToMarks(string){
    let alph = '0abcdefghijklmnopqrstuvwxyz';
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        count += alph.indexOf(string[i]);
    } return count;
}
