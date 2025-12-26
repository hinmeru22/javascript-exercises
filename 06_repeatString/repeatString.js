const repeatString = function (string, num) {
  if (num >= 0) {
    if (num == 0) {
      return "";
    }
    let joinedString = string;
    for (let i = 1; i < num; i++) {
      joinedString += string;
    }
    return joinedString;
  }
  return "ERROR";
};
// Do not edit below this line
module.exports = repeatString;
