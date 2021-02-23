function validateCode (code) {
    if ((code+'').startsWith('1') || (code+'').startsWith('2') || (code+'').startsWith('3')) return true;
    return false;
}
