/*
Task

You get an array of numbers, return the sum of all of the positives ones.
Example

    [1, -4, 7, 12] => 1+7+12=20 1 + 7 + 12 = 20 1+7+12=20

Note

If there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
  let total = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      total += arr[i];
    }
  }
  return total;
}

function positiveSum2(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

function positivesSum3(arr) {
  return arr.filter((x) => x >= 0).reduce((a, c) => a + c, 0);
}
