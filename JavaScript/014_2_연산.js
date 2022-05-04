console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(!true); //false
console.log(!false); //true

//활용예제1
let x = 15;
console.log(x % 3 == 0 || x % 5 == 0); //true

//활용예제2
let s = 0;
Array(100)
  .fill(0)
  .map((_, index) => index)
  .filter((i) => i % 3 == 0 || i % 5 == 0)
  .forEach((x) => (s += x));

console.log(s); //2318


