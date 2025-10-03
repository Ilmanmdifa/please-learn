function powerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

function powerOfTwoBitWise(n) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
}

//bitWise only works with power of two since it has unique pattern

console.log(powerOfTwo(1));
console.log(powerOfTwo(2));
console.log(powerOfTwoBitWise(4));
console.log(powerOfTwo(9));
console.log(powerOfTwoBitWise(16));
