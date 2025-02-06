const obj = {};

const obj2 = Object.assign({}, {
    name: 't'
});
const obj4 = Object.create(obj); // can add prototype only

const obj3 = { ...obj };

function ConstructorName(param1, param2) {
  this.property1 = param1;
  this.property2 = param2;
  // Additional properties and methods as needed
}
