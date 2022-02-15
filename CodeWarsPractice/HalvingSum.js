function halvingSum(n) {
    let sum = 0;
    let i = 1;
    do { sum = sum + Math.floor(n/i);
        i*=2;
    }
    while (n / i >= 1)
    return sum;
}