function pattern(n){
    let output='1\n';
    let stars = '';
    for (let i = 1; i < n; i++) {
        stars += '*';
        output = output.concat('1', stars, `${i+1}`, '\n');
    }
    return output.slice(0,-1);
}
