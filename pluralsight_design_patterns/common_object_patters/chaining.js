// jQuery example

// jQuery(".foo")
//   .addClass("bar")
//   .fadeIn("slow")
//   .html("Hello world");

// IMPLEMENT CHAINING API
// return the object you want to chain

var Calc = function(start) {
  var that = this; // so nobody can mess with it and modify it, captured in assigned value

  this.add = function(x) {
    start = start + x;
    return that;
  };

  this.multiply = function(x) {
    start = start * x;
    return that;
  };

  this.equals = function(callback) {
    callback(start);
    return that;
  };
};

new Calc(0)
  .add(1)
  .add(2)
  .multiply(3)
  .equals(function(result) {
    console.log(result);
  });
