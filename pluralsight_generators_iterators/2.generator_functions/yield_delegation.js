// Essentially allows a host generator function to control
// the iteration of a different generator function

function* gen1() {
  yield 1;
  yield 2;
  //   return 4;
}

function* gen2() {
  yield* gen1(); // const val = yield* gen1();
  yield 3;
  yield val;
}

const it = gen2();
console.log(it.next());
console.log(it.next());
console.log(it.next());
