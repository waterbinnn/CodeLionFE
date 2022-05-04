/*
배열 앞에서 추가 : unshift / 삭제 : shift
배열 뒤에서 추가 : push / 삭제 : pop
*/

const cafe = ["coffee", "cake", "tea", "cookie"];
const count = cafe.unshift("bread");

console.log(count); // 5
console.log(cafe); //['bread', 'coffee', 'cake', 'tea', 'cookie']

let first = cafe.shift();
console.log(first); //bread

cafe.unshift(first);
console.log(cafe); //['coffee', 'cake', 'tea', 'cookie']

let last = cafe.pop();
 
console.log(last); //cookie
console.log(cafe); //[ 'bread', 'coffee', 'cake', 'tea' ]

//indexOf 요소의 인덱스 찾기

console.log(cafe.indexOf("tea")); // 3
console.log(cafe.indexOf("coffe", 1)); //요소가 없을땐 : -1

//isArray : 인자가 배열인지 확인할때
Array.isArray("coffee");
//expected output: false

Array.isArray(false);
//expected output: false

Array.isArray([1]);
//expected output: true

//join : 요소들을 연결해 하나의 값으로 만들때
console.log(cafe.join("!!!"));

let number = ["010", "1111", "2222"];
console.log(number.join("-"));

//fill : 빈 배열을 동일한 값으로 채울때
let test = ["2", "3", "1", "4"];
test.fill("hi");
console.log(test); //[ 'hi', 'hi', 'hi', 'hi' ]

//빈 배열을 만들어 주고 싶을때
console.log(Array(5)); //[ <5 empty items> ]

console.log(Array.from("hello".repeat(5)));
/**
 * [
  'h', 'e', 'l', 'l', 'o', 'h',
  'e', 'l', 'l', 'o', 'h', 'e',
  'l', 'l', 'o', 'h', 'e', 'l',
  'l', 'o', 'h', 'e', 'l', 'l',
  'o'
]

hello를 붙여서 fill하고 싶을땐*/
console.log(Array(5).fill("hello")); //[ 'hello', 'hello', 'hello', 'hello', 'hello' ]

// flat : 배열을 원하는 깊이로 평탄화할때
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, [9, [10, 11]]],
];

arr.flat();
//expected output: [1, 2, 3, 4, 5, 6, 7, 8, [9, [10, 11]]]

arr.flat(1);
//expected output: [1, 2, 3, 4, 5, 6, 7, 8, [9, [10, 11]]]

arr.flat(2);
//expected output: [1, 2, 3, 4, 5, 6, 7, 8, 9, [10, 11]]

arr.flat(3);
//expected output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

arr.flat(Infinity);
//expected output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// includes(): 특정요소가 포함되었는지 확인할때
const cafe2 = ["coffee", "cake", "tea", "cookie"];

console.log(cafe2.includes("bread"));
//expected output: false

console.log(cafe2.includes("cake"));
//expected output: true

console.log(cafe2.includes("cake", -3));
//expected output: true

/**------------------------------------------ */
//find filter map (비교, 사용법 가끔 면접에 나오기도)

//find : 하나의 요소라도 조건을 만족하는지 확인할때, 조건에 맞는 딱 하나만 찾아줌! (아이디찾을때 굳)
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr2.find((i) => i > 5);
//expected output: 6 ;

// filter: 모든 요소가 조건을 만족하는지 확인할때 ()

const arr3 = [
  {
    name: "안녕1",
    contents: "FE1",
    dataNum: 1,
  },
  {
    name: "FE2",
    contents: "contents2",
    dataNum: 2,
  },
  {
    name: "title3",
    contents: "FE3",
    dataNum: 3,
  },
];
//name 에 FE 라는 키워드를 갖는 애들 출력
console.log(arr3.filter((i) => i.name.includes("FE")));
//[ { name: 'FE2', contents: 'contents2', dataNum: 2 } ]

//findIndex : 조건을 만족하는 첫번째 요소의 인덱스를 반환

const cafe4 = ["coffee", "cake", "tea", "cookie"];

const cafe5 = [
  {
    item: "coffee",
    amount: 5,
  },
  {
    item: "cake",
    amount: 4,
  },
  {
    item: "tea",
    amount: 7,
  },
  {
    item: "cookie",
    amount: 3,
  },
];

const index = cafe.findIndex((obj) => obj.item.length <= 3); //expected output: 2

//map : 각각 요소에 함수를 호출할 때

arr = [1, 2, 4, 5, 6];
arr.map((i) => i + 100); //[(101, 102, 104, 105, 106)];

// arr.map((value, index) => ([index, value.contents]))

const arr6 = [
  {
    name: "title1",
    contents: "contents1",
    dataNum: 1,
    data: [1, 2, 3],
  },
  {
    name: "title2",
    contents: "contents2",
    dataNum: 2,
    data: [1, 2, 3],
  },
  {
    name: "title3",
    contents: "contents3",
    dataNum: 3,
    data: [1, 2, 100],
  },
  {
    name: "title4",
    contents: "contents4",
    dataNum: 4,
    data: [1, 2, 3],
  },
  {
    name: "title5",
    contents: "contents5",
    dataNum: 5,
    data: [1, 2, 100],
  },
];

//이름만 추출하고싶을때
arr6.map((i) => i.name);
//expected output: ['title1', 'title2', 'title3', 'title4', 'title5']

arr6.map((i) => i.data[2]);
// arr6.map(i => i.data[2][지역][0]) 이런식으로 많이 사용한다. 복잡하고 많은 데이터를 추출할때
arr6.map((i) => i.name).indexOf("title3");
//expected output: 2

// 빈 배열을 만들어 fill 로 채우고 100까지의 수로 채워줄 수도 있다.
Array(100)
  .fill(0)
  .map((value, index) => index); //0-99까지
Array(100)
  .fill(0)
  .map((value, index) => index + 1); //1- 100까지

/**
 * [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
 */

// foreach() : 각각의 요소를 실행하고 싶을때 ( 순회만 함. 뭘 생성해주지 않음 )
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach((i) => console.log(i));
// expected output: 1
// expected output: 2
// expected output: 3
// expected output: 4
// expected output: 5
// expected output: 6
// expected output: 7
// expected output: 8
// expected output: 9
// expected output: 10

//reduce(): 각 요소에 누적해주며 실앻라고 싶을때
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.reduce((누적값, 현재값) => 누적값 + 현재값); //55

//Array.from() : 유사 배열 객체를 배열로 만들어줌 . 그래서 유사배열에 배열 메서드를 사용할수가 있다.
//유사배열 객체 : 배열같지만 배열에 사용가능한 메서드가 없음
Array.from("hello world");
//expected output: ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

Array.from([1, 2, 3], (x) => x ** 2);
//expected output: [1, 4, 9]

Array.from([{ value: 100 }, { value: 200 }, { value: 300 }], (x) => x.value);
//expected output: [100, 200, 300]

I