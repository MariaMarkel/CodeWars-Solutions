function initializeNames(name){
    name = name.split(' ');
    for (let i = 1; i < name.length-1; i++) {
        name[i] = name[i].slice(0,1) + '.'
    }
    return name.join(' ')
}
