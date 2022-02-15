function solve(n){
    let arr = ['0', '01'];
    for (let i = 2; i <= n; i++) {
        arr[i] = (arr[i-1]+ arr[i-2])
    } return arr[n];
}
