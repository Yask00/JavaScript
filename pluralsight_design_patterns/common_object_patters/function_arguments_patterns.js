function myFunc(a, b, c) {
  console.log(arguments); // like but not array
  console.log(a, b, c);
  return a + b + c;
}

console.log(myFunc(1, 2, 3));
console.log(myFunc(1, 2, 3, 4));
console.log(myFunc(1, 2));

// Arguments arn't required
// Like all variables arguments are untyped

// SOLUTION WHEN WE DON'T KNOW HOW MANY ARGUMENTS
function myFunc2() {
  var x = 0;
  for (var i = 0; i < arguments.length; i++) {
    x = x + arguments[i];
  }
  return x;
}

console.log(myFunc2(1, 2, 3));
console.log(myFunc2(1, 2, 3, 4));
console.log(myFunc2(1, 2));
