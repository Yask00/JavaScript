function* randomNumber() {
  while (true) {
    yield Math.floor(Math.random() * 100);
  }
}

const it = randomNumber();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
