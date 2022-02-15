function unscrambleEggs(word){
    return word.split('egg').join(''); // #1
}

function unscrambleEggs(word){
    return word.replace(/egg/g, ""); // #2
}

//remove every 'egg' after each consonant
