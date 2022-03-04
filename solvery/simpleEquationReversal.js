//"a+b-c/d*30" --> "30*d/c-b+a"

function solve(eq){
    eq = eq.split('/').reverse();
    let arr = [];
    for (let el of eq) {
        let newStr = [];
        let operands = el.replace(/\*/g, ' ').replace(/\+/g, ' ').replace(/\-/g, ' ').split(' ').reverse();
        let op = el.replace(/\w/g, '').split('').reverse();
        for (let i = 0; i < operands.length; i++) {
            newStr.push(operands[i]);
            console.log(op.length);
            if (op.length === 0) {
                newStr.push('');
            } else { newStr.push(op[i]); }
        }
        arr.push(newStr.join(''));
    }
    return arr.join('/');
}

function solve(eq){
    return eq.split(/([*\+\-\/])/).reverse().join('');
}
