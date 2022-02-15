function vowelStart(str){
    function replacer (s) {
        switch(s) {
            case 'a': s=' a'; break;
            case 'e': s=' e'; break;
            case 'i': s=' i'; break;
            case 'o': s=' o'; break;
            case 'u': s=' u'; break;
        }
        return s;
    }
    str = str.toLowerCase().replace(/\W/g,'').replace(/[_]/g,'').replace(/\s/g,'').replace(/[aeiou]/g, replacer);
    return str[0] === ' '? str.slice(1) : str;
}
// vowelStart redistributes the spaces (and adds additional spaces if needed) so that each word starts with a vowel.
// The letters should all be in the same order but every vowel in the sentence should be the start of a new word.
// The first word in the new sentence may start without a vowel. It should return a string in all lowercase with no punctuation
// (only alphanumeric characters).
