function primeNumber(n) {
  if (n % 2 === 0) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    //math.sqrt because n = a * b, a or b always less or equal to the square root of n
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

//prime number checker
console.log(primeNumber(10));
console.log(primeNumber(7));
console.log(primeNumber(11));
