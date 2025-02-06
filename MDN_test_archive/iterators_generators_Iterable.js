// Custom iterator
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    name: 'test',
    next() {
      let output;
      if(nextIndex < end) {
        output = {value: nextIndex, done: false};
        nextIndex += step;
        iterationCount += 1;
        return output;
      }
      return { value: iterationCount, done: true}
    }
  }

  return rangeIterator;
}

let iter = makeRangeIterator(1, 10, 2);
let result = iter.next();

while(!result.done) {
  console.log(result.value); // 1 3 5 7 9
  result = iter.next();
}

console.log("Iterated over sequence of size:", result.value); // [5 numbers returned, that took interval in between: 0 to 10]

// Generator
function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i+=step) {
      iterationCount ++;
      yield i
    }

    return iterationCount;
}

// Iterable
const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 1;
    yield 1;
  }
}

for (const value of myIterable) {
  console.log(value);
}
// 1
// 2
// 3

// custom object iterable
const obj = {
  name: "a",
  age: 35,
  hobbies: ["a", "b"],
  *[Symbol.iterator]() {
    yield this.name;
    yield this.age;
  }
};

for (const value of obj) {
  console.log(value);
}