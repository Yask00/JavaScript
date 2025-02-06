const str = 'sdgdg';
str = 'agag';

console.log(obj);
// ---------------
const obj = {
  name: 'a',
  age: 33,
  hobbies: ['a', 'b', 'c']
}

obj.name = 'b';
console.log(obj);

// ---------------

var obj2 = {
  name: 'a',
  age: 33,
  hobbies: ['a', 'b', 'c']
}

Object.defineProperty(obj2, 'name', {
  writable: false,
  configurable: false
});

obj2.name = 'test'; // fails silently
console.log(obj2);
