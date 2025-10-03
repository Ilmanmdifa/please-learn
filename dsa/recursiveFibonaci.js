function recursiveFibonaci(n) {
  if (n < 2) return n;
  return recursiveFibonaci(n - 1) + recursiveFibonaci(n - 2);
}

console.log(recursiveFibonaci(8));
