function 함수1(x, y) {
  return x + y;
}
console.log(함수1(10, 20));

let 함수2 = (x, y) => x + y;
console.log(함수2(100, 200));

let 함수3 = (x, y) => {
  let z = x + y;
  return z;
};
console.log(함수3(30, 30));

[10, 20, 30].filter((x) => x >= 20);
function 그냥함수(x) {
  return x >= 20;
}
