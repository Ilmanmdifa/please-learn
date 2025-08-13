const findSmallestInt = (args) => {
  return Math.min(...args);
};

const findSmallestInt2 = (args) => {
  return Math.min.apply(null, args);
};

/*
The call() method takes arguments separately.
The apply() method takes arguments as an array.
*/

const findSmallestInt3 = (args) => {
  return args.sort((a, b) => a - b)[0];
};

const findSmallestInt4 = (args) => {
  args.sort(function (a, b) {
    return a - b;
  });
  return args[0];
};
