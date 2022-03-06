function interweave(s1, s2) {
    let arr = [];
    for (let i = 0; i < s1.length; i++) {
      arr.push(s1[i]);
      arr.push(s2[i]);
    }
    return arr.join('').replace(/\d/g,'');
  }