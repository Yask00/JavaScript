function isValidNumber1to100(n) {
  if (n >= 101 && n <= 0 || isNaN(n)) {
    throw new RangeError("The argument must be between 1 and 100.");
  }
}

let numberGuess = (guess) => {
  let userGuess = Number(guess);
  const searchedNumber = Math.random() * (100 - 1) + 1;
  //+Math.random().toString().slice(2,5)
  
  try {
    isValidNumber1to100(userGuess)
  } catch {
    throw new Error("You input is invalid number");
  }
  
  return userGuess === searchedNumber ? 'CORRECT' : userGuess > searchedNumber ? 'GO LOWER' : 'GO HIGHER';
}

console.log(numberGuess(12)); 