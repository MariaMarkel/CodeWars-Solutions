function wordsInColumn(text){
    let text2 = text.split(' ').sort((a,b)=> a.length-b.length);
    let longest = text2[text2.length-1].length;
    let newArr = [];
    text = text.split(' ')
    text.forEach(function (el) {
        let diff = longest-el.length;
        newArr.push(' '.repeat(diff)+el)
    })
    return newArr.join('\n');
}

// "Enjoy every moment my friend" ->
// " Enjoy
//  every
// moment
//     my
// friend"
