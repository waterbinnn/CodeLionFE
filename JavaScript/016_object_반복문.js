let value = [10, 1, 100, 200, 300, 10];

let value2 = {
  피카츄: 1,
  라이츄: 2,
  파이리: 3,
  꼬부기: 4,
  버터플: 5,
  야도란: 6,
  피죤투: 7,
  또가스: 8,
  메타몽: 9,
};

let value3 = {
  피카츄: 10,
  라이츄: 20,
  파이리: 30,
  꼬부기: 40,
  버터플: 50,
  야도란: 60,
  피죤투: 70,
  또가스: 80,
  메타몽: 90,
};

for (let i in value) {
  console.log(i); //index만 출력한다 => key인셈
}
/**
 * 0
1
2
3
4
5
 */

for (let i in value2) {
  console.log(i); //index만 출력한다 => key인셈
  console.log(value2[i]); //value값
}
/**
 * 피카츄
1
라이츄
2
파이리
3
...
 */

for (let i in value3) {
  console.log(i); //index만 출력한다 => key인셈
  console.log(value3[i]); //value값
}
/**
 * 피카츄
1
라이츄
2
...
 */

for (let i in "hello world") {
  console.log(i);
  console.log("hello world"[i]);
}
/**
 * 0
h
1
e
2
l
3
...
 */

//object keys

let 포켓몬 = Object.keys(value3);
console.log(포켓몬);
/**
 * [
  '피카츄', '라이츄',
  '파이리', '꼬부기',
  '버터플', '야도란',
  '피죤투', '또가스',
  '메타몽'
]
 */

//for of
for (let i of [10, 20, 30, 40]) {
  console.log(i); //10 20 30 40
}

let s = "";
for (let i of "hello world") {
  s = i + s;
}
console.log(s); //dlrow olleh

// Object.entries: key, value 형태의 배열들을 반환
for (let i of Object.entries(value3)) {
  console.log(i); //[ '피카츄', 10 ] 이런형태로 출력
}

//구조분해할당
for (let [[a, b], j] of [
  [[1, 2], 2],
  [[1, 2], 4],
]) {
  console.log(a, b, j);
 }
 /**
1 2 2
1 2 4
  */ 


let [a, b] = [10, 20];
console.log(a); //10
console.log(b); //20

[a, b] = "10,20".split(",");
console.log(a); //10
console.log(b); //20

let [c, d, ...f] = [10, 20, 30, 40, 50];
console.log(f); //[ 30, 40, 50 ]

// let { name, age } = {
//   name: "su",
//   age: 10,
// };

let object = {
  name: "su",
  age: 10,
};
let { name, age } = object;
console.log(name); //su
console.log(age); //10

let { name2, age2 } = { name2: "susu", height2: "10", age2: "10" };
console.log(name2); //susu

// 전개구문
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

Math.max(...arr1, ...arr2);
//둘을 merge 해주고 싶을 때
console.log([100, 200, ...arr1, arr2]);
//[ 100, 200, 1, -2, 3, 4, [ 8, 3, -8, 1 ] ]

let str = "hello world";
console.log([...str]);
/**
 * [
  'h', 'e', 'l', 'l',
  'o', ' ', 'w', 'o',
  'r', 'l', 'd'
]
 */

//Date

let date = new Date(); // date객체
console.log(date); //2022-05-10T01:37:01.324Z
console.log(date.getDate()); //10 //일요일 0부터
console.log(date.getMonth()); //4
console.log(date.getDay()); //2
console.log(date.getSeconds()); //35
console.log(date.getFullYear()); //2022
console.log(date.getYear()); //122
