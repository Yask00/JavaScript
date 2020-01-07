// Prototype is object that exist on every function

let myFunction = function() {};
console.log(myFunction.prototype); // {}
// A FUNCTION'S PROTOTYPE IS THE OBJECT INSTANCE THAT WILL BECOME
// THE PROTOTYPE FOR ALL OBJECTS CREATED USING THIS FUNCTION AS A CONSTRUCTOR

// Object do have prototype but not as property
let person = { firstName: "Jim" };
console.log(person.prototype); // undefined
console.log(person.__proto__); // {}
// AN OBJECT'S PROTOTYPE IS THE OBJECT INSTANCE FROM WHICH THE OBJECT IS INHERITED
