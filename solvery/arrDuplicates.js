let arr = ["a", "b", "c", "d", "c", "a"];

let newSet = new Set();
for (let el of arr) {
    if (newSet.has(el)) {
        console.log(el); //show duplicates in arr
    } else {
        newSet.add(el);
    }
}

//let arr2 = arr.filter(el=> arr.indexOf(el) === arr.lastIndexOf(el)); //only unique elements -> 2
//let arr2 = arr.filter(el=> arr.indexOf(el) !== arr.lastIndexOf(el)); // all duplicates -> 4
//let arr2 = arr.filter((el, i)=> i === arr.lastIndexOf(el)); // remove all duplicates, original order -> 4
//let arr2 = arr.filter((el, i)=> i !== arr.indexOf(el) && i === arr.lastIndexOf(el)); //an instance of each duplicate -> 2
//console.log(arr2);
