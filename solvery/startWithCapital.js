function fix(paragraph){
    return paragraph.split('. ').map(el=> el !== "" ? el[0].toUpperCase()+el.slice(1) : "").join('. ');
}

function fix(paragraph){
    if(paragraph == '') return ''
    return paragraph.split('. ')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join('. ')
}
