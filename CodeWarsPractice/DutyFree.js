function dutyFree(normPrice, discount, hol){
    let dPrice = normPrice * (discount / 100);
    return Math.floor(hol / dPrice);
}