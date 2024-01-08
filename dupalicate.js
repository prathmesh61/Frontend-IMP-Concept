const arr = [2, 3, 4, 5, 2, 5, 6, 1];

// polyfill reduce
Array.prototype.myReduce = function (callback, initVal = null) {
  let acc = initVal;
  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i]);
  }
  return acc;
};
const fun = (arr) =>
  arr.myReduce((acc, curr) => {
    return acc.includes(curr) ? acc : [...acc, curr];
  }, []);
console.log(fun(arr));
