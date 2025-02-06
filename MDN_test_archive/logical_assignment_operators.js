const person = {  name: "John" };
person.name ??= "User 1" //  only if the left operand is null or undefined (nullish)
console.log(person.name);
person.age ??= 19;
console.log(person.age);

const product = {stocks: 10 };
product.stocks &&= 20; // will perform the assignment if the left operand is truthy
console.log(product.stocks); // 20 
product.exp &&= '11/11/11';
console.log(product.exp); // undefined 

const product2 = {
  stocks: 0,
  exp: '12/31/2021'
};
product2.stocks ||= 10; // left operand should be false for the assignment to occur
console.log(product2.stocks); // 10
product.exp ||= '01/31/2022';
console.log(product.exp); // output: 12/31/2021