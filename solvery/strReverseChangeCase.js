function reverseAndMirror(s1,s2) {
    let s2New = s2.split('').map(el => el == el.toUpperCase() ? el.toLowerCase(): el.toUpperCase()).reverse().join('');
    let s1New = s1.split('').map(el => el == el.toUpperCase() ? el.toLowerCase(): el.toUpperCase()).reverse().join('');
    s1New = s1New + s1New.split('').reverse().join('');
    return s2New + "@@@" + s1New;
}

function reverseAndMirror(s1,s2) {
    s1 = [...s1].map(x => x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()).join('')
    s2 = [...s2].map(x => x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()).reverse().join('')
    return `${s2}@@@${[...s1].reverse().join('')}${s1}`
}
