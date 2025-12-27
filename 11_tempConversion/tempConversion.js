const convertToCelsius = function (degree) {
  const celcius = (degree - 32) * 0.5556;
  const rounded = celcius.toFixed(1);
  return Number(rounded);
};

const convertToFahrenheit = function (degree) {
  const farenheit = degree * 1.8 + 32;
  const rounded = farenheit.toFixed(1);
  return Number(rounded);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
