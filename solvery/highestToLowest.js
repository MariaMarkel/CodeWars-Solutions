function highAndLow(numbers){
    let newNumbers = numbers.split(' ').map(el=>+el).sort((a,b)=> a-b);
    return `${newNumbers[newNumbers.length - 1]} ${ newNumbers[0]}`; //'42 -9'
}

function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}
// initial string "numbers" = "8 3 -5 42 -1 0 0 -9 4 7 4 -4"
