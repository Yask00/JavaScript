You are given a class called Sentence , which takes a string such as 'hello world'. You need to provide a method at(index) such that the method returns a flyweight that can be used to capitalize a particular word in the sentence.

Typical use would be something like:

let s = new Sentence('alpha beta gamma');
s.at(1).capitalize = true;
console.log(s.toString()); // alpha BETA gamma