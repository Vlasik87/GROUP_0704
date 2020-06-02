/*function filterNumeric(someArray) {
  const numericArray = [];
  for (let i = 0; i < someArray.length; i++) {
    const element = someArray[i];
    if (typeof element === "number") {
      numericArray.push(element);
    }
  }

  return numericArray;
}

const numericArray = filterNumeric([
  "hello",
  20,
  "asd",
  true,
  10,
  37,
  "juk",
  {},
]);

console.log(numericArray);

function findMaxValue(someArray) {
  // тут ваш код
  let maxValue = someArray[0];
  for (let i = 1; i < someArray.length; i++) {
    if (maxValue < someArray[i]) {
      maxValue = someArray[i];
    }
  }
  return maxValue;
}
const maxValue = findMaxValue([20, 34, 1, 5, 67, 38, 20, 123]);

function mapToLength(someArray) {
  let newArray = someArray[i];
  for (let i = 0; i < someArray.length; i++) {
    someArray.push(arrayWithLength[i].length);
  }
  return newArray;
}
const arrayWithLength = ["hello", "hi", "test"]; // [5, 2, 4]; */

function mapToPrice(products) {
  let price = [];

  for (let e of products) {
    price.push(e.price);
  }
  return price;
}
