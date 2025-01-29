// Recursion is a problem-solving technique in which the solution is dependent on solutions to smaller instances of the same problem. A classic example of recursion is computing factorials.

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
