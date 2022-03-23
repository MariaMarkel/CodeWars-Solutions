const removeConsecutiveDuplicates = s => {
    s = s.split(' ');
    let s1 = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i]!==s[i+1]) {s1.push(s[i]);
        }
    }
    return s1.join(' ');
}

const removeConsecutiveDuplicates = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");
