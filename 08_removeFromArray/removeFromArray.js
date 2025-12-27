const removeFromArray = function (arr, ...num) {
  const removedArr = arr.filter((element) => !num.includes(element));
  return removedArr;
};

// Do not edit below this line
module.exports = removeFromArray;
