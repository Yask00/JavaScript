function* counter() {
    let index = 0;
    while(true) {
        yield index++;
    }
}

const gen = counter();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2