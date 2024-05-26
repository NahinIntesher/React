export function toCelcious(farenheit) {
  return ((farenheit - 32) * 5) / 9;
}

export function toFarenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

export function convert(temparature, convertTo) {
  const input = parseFloat(temparature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convertTo(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
