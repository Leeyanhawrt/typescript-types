const add = (n1: number, n2: number): number => {
  return n1 + n2;
};

const printResult = (num: number): void => {
  console.log(`Result: ${num}`);
};

const addAndHandle = (n1, n2, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult;

console.log(combineValues(8, 8));

addAndHandle(1, 4, (result) => {
  console.log(result);
});
