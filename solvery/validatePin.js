function validatePIN (pin) {
    let newPin = pin.replace(/\s/g, '*').split('').map(Number);
    return newPin.includes(NaN) ? false : newPin.length === 4 || newPin.length === 6 ? true : false;
}
//pin contains only 4 digits or 6 digits
