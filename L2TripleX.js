function tripleX(str){
    let index = str.indexOf('x');
    for (let i = index; i < str.length; i++){
        if (str[i+1]==='x'&& str[i+2]==='x') return true;
        return false;
    }
}
