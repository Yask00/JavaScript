// Nullish coalescing - Return first value, or second value if first value is null or undefined.
const foo = null ?? 'def string'; // def string
const baz = 0 ?? 42; // 0

//Dynamic Import // Load a module asynchronously and dynamically.
await import('/modules/my-module.js')

// Private Properties
// Properties that cannot be legally referenced outside of the class.
class ClassWithPrivateField {
  #privateField;
}

// Logical Assignment
// Operators to assign a value to a variable based on its own truthy/falsy status.
const a = { duration: 50, title: '' };

a.duration ||= 10; // expected output: 50
a.title ||= 'title is empty.'; // expected output: "title is empty"

// Hashbang Grammar
// Provide the path to a specific JavaScript interpreter that you want to use to execute the script.
#!/usr/bin/env node
console.log("Hello world");

// array.toSorted()
// Sort without mutating the original array.
const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b) => a - b);
console.log(sortedValues); // [1, 2, 10, 21]
console.log(values); // [1, 10, 21, 2]

// array.with()
// Returns a new array with the element at the given index replaced with the given value.
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]

// array.fromAsync()
// Similar to Array.from but for async iterators.
const asyncIterable = (async function* () {
    for (let i = 0; i < 5; i++) {
      await new Promise((resolve) => setTimeout(resolve, 10 * i));
      yield i;
    }
  })();
  
  Array.fromAsync(asyncIterable).then((array) => console.log(array));
  // [0, 1, 2, 3, 4]

// set.union()
// Returns a new set containing elements of both this set and the given set.
const evens = new Set([2, 4, 6, 8]);
const squares = new Set([1, 4, 9]);
console.log(evens.union(squares)); // Set(6) { 2, 4, 6, 8, 1, 9 }

// Object.groupBy()
// Group the elements of a given iterable according to the string values returned by a provided function.
const inventory = [
    { name: "salad", type: "vegetables" },
    { name: "banana", type: "fruit" },
    { name: "apple", type: "fruit" },
  ];
  
const result = Object.groupBy(inventory, ({ type }) => type);
  
  /*
  {
    vegetables: [
      { name: 'salad', type: 'vegetables' },
    ],
    fruit: [
      { name: "banana", type: "fruit" },
      { name: "apple", type: "fruit" }
    ]
  }
  */