function hello(name) {
    if (!name) return "Hello, World!" ;
    return name.length < 1 ? "Hello, World!" :
        `Hello, ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`;
}
