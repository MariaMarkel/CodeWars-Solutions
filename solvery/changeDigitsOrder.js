function changeDigitsOrder(num){
    let arr = String(num).split('').sort().filter(el=> el!=0).join(''); //15
    let allZeros = String(num).length-arr.length; //2
    let newNum = arr[0]+'0'.repeat(allZeros)+arr.slice(1);
    return +newNum;
}

// 1500 -> 1005, 4021 -> 1024
