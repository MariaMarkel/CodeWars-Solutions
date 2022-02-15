function pipeFix(numbers){
    let arr = [];

    for (let i = numbers[0]; i <= Math.max(...numbers); i++) {
        arr.push(i);

    } return arr;
}