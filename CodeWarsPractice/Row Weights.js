function rowWeights(arr) {
    let odd = 0;
    let even = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            even += arr[i];
        } else if (i % 2 !== 0) {
            odd += arr[i];
        }
    } return [even, odd];
}