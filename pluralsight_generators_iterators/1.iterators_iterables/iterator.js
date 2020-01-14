// loops are standart iterators
// but to pause and unpause you should create custom itterator

// ITERATOR - is any object that implements the iterator protocol by having
// a next() method that returns a value property and done (boolean, false if iteration should stop) property

function myIterator(start, finish) {
  let index = start;
  let count = 0;

  return {
    next() {
      let result;
      if (index < finish) {
        result = { value: index, done: false };
        index += 1;
        count++;
        return result;
      }
      return {
        value: count,
        done: true
      };
    }
  };
}

const it = myIterator(0, 10);
let res = it.next();
while (!res.done) {
  console.log(res.value);
  res = it.next();
}

const it2 = myIterator(0, 10);

for (let val, result; (result = it2.next()) && !result.done; ) {
  val = result.value;
  console.log(val);
}
