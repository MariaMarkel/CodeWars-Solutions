function duplicateSandwich(a) {
    if (typeof a === 'string') { a = a.split('');
        let dup = a.filter(el=> a.indexOf(el)!== a.lastIndexOf(el))[0];
        return a.slice(a.indexOf(dup)+1, a.lastIndexOf(dup)).join('');
    } else {
        let dup = a.filter(el=> a.indexOf(el)!== a.lastIndexOf(el))[0];
        return a.slice(a.indexOf(dup)+1, a.lastIndexOf(dup));
    }
}

const duplicateSandwich = (list) => {
    let duplicated = [...list].find(a => list.indexOf(a) !== list.lastIndexOf(a))
    return list.slice(list.indexOf(duplicated) + 1, list.lastIndexOf(duplicated))
}

function duplicateSandwich(a) {
    for(let i = 0; i < a.length - 1; i++)
        if(a.indexOf(a[i]) !== a.lastIndexOf(a[i]))
            return a.slice(a.indexOf(a[i]) + 1, a.lastIndexOf(a[i]));
}
