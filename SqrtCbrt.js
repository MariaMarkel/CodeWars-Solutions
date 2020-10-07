function cutCube(volume,n){
    if (Math.cbrt(volume) % 1 !== 0) return false;
    return Math.cbrt(volume / n) % 1 === 0 ? true : false;

}