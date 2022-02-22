function product (string) {
    let questions = 0;
    let exclMarks = 0;
    for (let el of string.split('')) {
        if (el==='?') {
            questions++;
        } else if (el==='!') {
            exclMarks++;
        }
    }
    return questions*exclMarks;
}

function product(s){
    excs = s.split('!').length - 1
    ques = s.split('?').length - 1
    return excs * ques
}
