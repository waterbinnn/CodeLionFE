function 안녕() {
  console.log("hello world");
}

//함수의 장점 : 재사용성
for (let i = 0; i < 5; i++) {
  안녕();
}

function sum(x, y) {
  return x + y;
}

//지역변수
function sumAll(a, b, c) {
  let z = 50;
  return a + b + c + z;
}
console.log(sumAll(10, 20, 30)); //110
// console.log(z); 지역변수라 오류가 나옴

//전역변수
var z3 = 50;
function sumAll2(a, b, c) {
  return a + b + c + z3;
}
console.log(sumAll2(10, 20, 30)); //110

// var 의 호이스팅 때문에 var 을 변수로 사용하는 것은 ,,,, 지양

// 함수 문자뒤집기
function reverse(txt) {
  txt += "";
  if (txt.length <= 1) {
    return txt;
  }
  return reverse(txt.slice(1)) + txt[0];
}

console.log(reverse("hello world"));

//call by value

let arr = [10, 20, 30];
function 함수2(value) {
  value[0] = 1000;
}
함수2(arr);
console.log(arr); //[1000,20,30]

let x = 0;
function 함수200(value) {
  value = 1000;
}
함수200(x);
console.log(x);

let a = 1000;
function test(x) {
  x = 1;
}
test(a);

console.log(a);
