function sc(floor){
    console.log(floor)
    if (floor < 2) return '';
    let str = '';
    for (let i = 1; i <= floor-1; i++) {
        str += 'Aa~'.repeat(1) + ' ';
    }
    return floor <=6? str+'Pa! Aa!' : str + 'Pa!';
}
