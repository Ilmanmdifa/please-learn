function linearSearch(arr, target) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1, 2, 3, 8, 100], 3));
console.log(linearSearch([1, 2, 3, 8, 100], 100));
console.log(linearSearch([1, 2, 3, 8, 100], 199));

// Big-O = O(n)
