function countAnimals(sentence) {
    return (sentence.match(/\d+/g) || []).map(el=>+el).reduce((s,el)=> s + el, 0)
}
