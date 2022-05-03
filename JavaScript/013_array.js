var fish = ["정어리", "고등어", "돌고래", "참치", "고래상어", "코끼리"];
// 1. splice 를 이용해 코끼리를 제거해보세요
// 2. 참치 다음에 다금바리를 추가해보세요
// 3. 돌고래를 제거하고 옥돔과 갈치를 추가해보세요

fish.splice(-1, 1);
fish.splice(-1, 0, "다금바리");
fish.splice(2, 1, "옥돔", "갈치");
console.log(fish);

var fish2 = ["정어리", "고등어", "돌고래", "참치", "고래상어", "코끼리"];
// 다음 배열에서 물고기가 아닌것을 slice로 선택해 콘솔로 출력해 보세요.
console.log(fish2.slice(2, 3));
console.log(fish2.slice(5));

let avengers = ["spiderman", "ironman", "hulk", "thor"];
avengers.sort();
console.log(avengers); //[ 'hulk', 'ironman', 'spiderman', 'thor' ]

let avengers2 = ["스파이터맨", "아이언맨", "헐크", "토르"];
avengers2.sort();
console.log(avengers2); //[ '스파이터맨', '아이언맨', '토르', '헐크' ]

let arrNum = [13, 9, 10, 3, 44, 21];
// arrNum.sort();
// console.log(arrNum); //[ 10, 13, 21, 3, 44, 9 ] 문자열로 바꾼뒤 유니코드 순서대로 바꾼다.

arrNum.sort(function (a, b) {
  return a - b;
});
console.log(arrNum); //[ 3, 9, 10, 13, 21, 44 ]

let arrNum3 = [9, 3, 44, 13, 21];
arrNum3.sort(function (a, b) {
  return b - a;
});
console.log(arrNum3); //[ 44, 21, 13, 9, 3 ]

/*
내림차순 정렬
3-9 == -6 음수니까 a 가 앞으로
44 - 3 == 41 양수니깐 b가 앞으로
[9, 44, 3] 
*/

// 다음 배열에서 sort 함수를 이용해 원소의 product의 값을 기준으로 가나다순으로 정렬해보세요.
var studentList = [
  {
    id: 1,
    product: "연필",
    stock: 10,
  },
  {
    id: 2,
    product: "색종이",
    stock: 33,
  },
  {
    id: 3,
    product: "체육복",
    stock: 2,
  },
  {
    id: 4,
    product: "만연필",
    stock: 0,
  },
];

studentList.sort(function (a, b) {
  if (a.product < b.product) {
    return -1;
  } else if (b.product < a.product) {
    return 1;
  } else {
    return 0;
  }
});
console.log(studentList);
/*[
  { id: 4, product: '만연필', stock: 0 },
  { id: 2, product: '색종이', stock: 33 },
  { id: 1, product: '연필', stock: 10 },
  { id: 3, product: '체육복', stock: 2 }
]
*/

let arrNum2 = [13, 9, 10, 3, 44, 21];
arrNum2.sort(function (a, b) {
  if (a > b) {
    return -1;
  } else if (b > a) {
    return 1;
  } else {
    return 0;
  }
});
