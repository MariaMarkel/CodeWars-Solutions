function calculator(a,b,sign){
    switch(sign) {
        case '+': return typeof a === 'number' && typeof b === 'number' ? a + b : 'unknown value';
        case '-': return typeof a === 'number' && typeof b === 'number' ? a - b : 'unknown value';
        case '*': return typeof a === 'number' && typeof b === 'number' ? a * b : 'unknown value';
        case '/': return typeof a === 'number' && typeof b === 'number' ? a / b : 'unknown value';
        default: return 'unknown value';
    }

}