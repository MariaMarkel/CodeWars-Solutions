function digits(num){
    let arr = [];
    num = num.toString().split('').map(el=>+el);
    for (let i=0; i<num.length; i++) {
        for (let j=i+1; j<num.length; j++){
            arr.push(num[i]+num[j])
        }
    }
    return arr;
}
