type Combinable = number | string;
type ConversionDescription = "as-number" | "as-text";

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescription
) => {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

const combineAges = combine(25, 24, "as-number");
console.log(combineAges);

const combineStringAges = combine("25", "45", "as-number");
console.log(combineStringAges);

const combineNames = combine("Leeyan", "Ellissa", "as-text");
console.log(combineNames);
