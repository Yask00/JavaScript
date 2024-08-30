// Dynamic programming (DP) is an algorithmic technique that solves an optimization problem by breaking it down into simpler sub-problems and taking advantage of the fact that the optimal solution to the overall problem is dependent on the optimal solution to its sub-problems. A common example is the problem of computing the nth Fibonacci number.

function fibonacci(n) {
    let dp = [];
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
  }
  console.log(fibonacci(1)); // 1
  console.log(fibonacci(2)); // 1
  console.log(fibonacci(3)); // 2
  console.log(fibonacci(4)); // 3
  console.log(fibonacci(5)); // 5
  console.log(fibonacci(6)); // 8