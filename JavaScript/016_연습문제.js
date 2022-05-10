// 연습문제 3
let nums = [15, 22, 33, 111, 2];
// 1+5, 2+2, 3+3, 1+1+1, 2
// 6, 4, 6, 3, 2
// 정답 : 21

// 방법1
let sum = 0;
for (let i of nums) {
  let s = "" + i;
  for (let j of s.split("")) {
    sum += +j;
  }
}
console.log(sum); //21

// 방법2
console.log(
  nums
    .map((x) => "" + x)
    .join("")
    .replaceAll(",", "")
    .split("")
    .map((x) => parseInt(x))
    .reduce((a, b) => a + b, 0)
); //21

// 방법3
console.log(
  nums
    .map((x) => "" + x)
    .join("")
    .split("")
    .reduce((a, b) => +a + +b, 0)
);

// 방법4
sum = 0;
for (let i of nums) {
  ("" + i).split("").forEach((x) => (sum += +x));
}
console.log(sum);

// 방법5 - 가장 간단한듯 !
let str = nums.join("");
sum = 0;
for (let i = 0; i < str.length; i++) {
  sum += parseInt(str[i], 10);
}
console.log(sum);
