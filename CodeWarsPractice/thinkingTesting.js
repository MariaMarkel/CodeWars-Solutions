function testit(s){
    return s.length === 0? s :
        s.split(' ').map(el=> el.slice(0,-1)+el[el.length-1].toUpperCase()).join(' ')
}