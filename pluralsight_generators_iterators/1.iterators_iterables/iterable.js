// an object that allows iteration of itself (like array loop)
// array is build in itterable, as well as string, maps, sets ect
// iterables implement the @@iterator method
// Symbol.iterator is a well known symbol in js, specifies the default iteartor of an object

// for in will loop over the keys of the object, since keys are enumarable properties

const arr = [0, 4, 5, 6];
const it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); // will be dones and value undefined

const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
const mapIterator = map[Symbol.iterator]();

console.log(mapIterator.next().value);
console.log(mapIterator.next().value);
console.log(mapIterator.next().value);

for (const [key, value] of map) {
  console.log(`${key} and ${value}`);
  // forof are using Symbol.iterator under the hood and returning . next on every loop
}
