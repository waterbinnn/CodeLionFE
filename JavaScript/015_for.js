for (let i = 0; i < 5; i++) {
  console.log(i);
}

const sample = ["A", "B", "C", "DD", "EE"];

for (let i = 0; i < sample.length; i++) {
  console.log(sample[i]);
}

// 무한루프
let i = 0;
for (;;) {
  i++;
  console.log(i);
  if (i > 5) {
    break;
  }
}

//과제 1
let age = [19, 30, 23, 28, 32, 40, 32, 35, 29, 30];
let sum = 0;
for (let i = 0; i < age.length; i++) {
  console.log(age[i]);
  sum += age[i];
}
console.log(sum / age.length);

// 과제2

let sex = ["male", "female", "male", "female", "female"];
let boy = 0;
let women = 0;

for (let i = 0; i < sex.length; i++) {
  if (sex[i] == "male") {
    boy++;
  }
}
console.log(boy); //2
console.log((boy / sex.length) * 100 + "%"); //40%

// 위의 for문과 같지만 filter 을 이용한 코드
console.log(sex.filter((i) => i == "male").length);

// 8의 개수 세기
sum = "";
for (let i = 0; i < 100; i++) {
  sum += i;
}
let count = 0;
for (let i = 0; i < sum.length; i++) {
  if (sum == "8") {
    count++;
  }
}
console.log(count); //20

console.log(
  Array(100)
    .fill(0)
    .map((v, i) => v + i)
    .join("")
    .split("")
    .filter((x) => x == "8").length
); //20

let data = [
  { 회원번호: 0, 아이디: "a", 성별: "남", 나이: 21 },
  { 회원번호: 1, 아이디: "b", 성별: "남", 나이: 17 },
  { 회원번호: 2, 아이디: "c", 성별: "여", 나이: 6 },
  { 회원번호: 3, 아이디: "d", 성별: "여", 나이: 55 },
];

//나이가 20살 이상, 여성의 비율
let result = [];
for (let i = 0; i < data.length; i++) {
  if (data[i]["성별"] == "여" && data[i]["나이"] >= 20) {
    result.push(data[i]["회원번호"]);
  }
}
console.log(result); //[3]

//filter 활용한 식
console.log(data.filter((i) => i["나이"] >= 20 && i["성별"] == "여"));

//나이 총 합 구하기
let 나이총합 = 0;
for (let i = 0; i < data.length; i++) {
  나이총합 += data[i]["나이"];
  console.log(나이총합); //99
}
console.log(나이총합 / data.length); //24.75

console.log(data.map((i) => i["나이"])); //[ 21, 17, 6, 55 ]
console.log(data.map((i) => i["나이"]).reduce((a, b) => a + b, 0)); //99

let 가장큰나이 = 0;
for (let i = 0; i < data.length; i++) {
  if (가장큰나이 < data[i]["나이"]) {
    가장큰나이 = data[i]["나이"];
  }
}
console.log(가장큰나이); //55

let 가장작은나이 = 1000000;
for (let i = 0; i < data.length; i++) {
  if (가장작은나이 > data[i]["나이"]) {
    가장작은나이 = data[i]["나이"];
  }
}
console.log(가장작은나이); //6

let arr = [21, 17, 6, 55];
console.log(Math.min(10, 20, 30, 40, 5, 4, 100)); //4
console.log(Math.min(...arr)); //6 (... :전개구문)

//l 의 개수 세기
let word = "hello world";
count = 0;
for (let i = 0; i < word.length; i++) {
  if (word[i] == "l") {
    count++;
  }
}
console.log(count); //3

//문자열에 있는 숫자 다 더하기
let num = "12390812476";
sum = 0;
for (let i = 0; i < num.length; i++) {
  sum += parseInt(num[i]);
  // sum += Number(num[i]);
  // sum += +num[i];
}
console.log(sum); //43

arr = ["33", "29", "11", "55", "47"];
sum = 0;
let average = 0;
for (let i = 0; i < arr.length; i++) {
  sum += parseInt(arr[i]);
  // average = sum / arr.length;
}
// console.log(average); //35
console.log(sum / arr.length);

// 구구단 만들기

for (let i = 1; i < 10; i++) {
  console.log(`2 X ${i} = ${2 * i}`);
}
/**
 * 2 X 1 = 2
2 X 2 = 4
2 X 3 = 6
2 X 4 = 8
2 X 5 = 10
2 X 6 = 12
2 X 7 = 14
2 X 8 = 16
2 X 9 = 18
 */

sum = 0;
for (let i = 3; i < 20; i += 3) {
  sum += i;
}
console.log(sum); //63

// 0부터 100까지 짝수의 합
sum = 0;
// 감점인 코드 ,,, 이렇게 짜면 안됩니다
// for (let i = 0; i < 101; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   }
// }

for (let i = 2; i < 101; i += 2) {
  sum += i;
}
console.log(sum); //2550

word = "hello world";
result = "";
for (let i = 0; i < word.length; i++) {
  // result += word[i]; //hello world
  result = word[i] + result; //dlrow olleh
}
console.log(result);

//1차원 점들이 주어졌을 때 , 그 중 가장 거리가 짧은 것의 쌍을 출력
arr = [1, 3, 4, 8, 13, 17, 20];
result = 1000000;
let index = 0;
for (let i = 0; i < arr.length; i++) {
  if (result > arr[i + 1] - arr[i]) {
    result = arr[i + 1] - arr[i];
    index = i;
  }
}
console.log(result); //1 => 두 수의 차
console.log(index); //1
console.log(arr[index], arr[index + 1]); //3 4

// 2-9단까지
for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    // console.log(`${j} X ${i} = ${j * i}`);
  }
}
