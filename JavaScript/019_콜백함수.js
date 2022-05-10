//콜백함수 : 함수의 아규먼트로 들어간 함수

function sum(x, y, c) {
  c(x + y);
  return x + y;
}

function documentWrite(s) {
  console.log("콜백함수", s);
}

sum(10, 20, documentWrite); //콜백함수, 30

//즉시 실행 함수
//익명 즉시 실행 함수
(function () {
  let a = 1;
  let b = 2;
  return a + b;
})();

// 기명 즉시 실행 함수
(function foo() {
  let a = 3;
  let b = 5;
  return a * b;
})();

// foo(); // ReferenceError: foo is not defined

(function name2() {
  x = 10;
  y = 20;
  console.log(x + y); //30
})();

function 함수(a, b, ...c) {
  console.log(a, b, c);
}

함수(10, 20, 30, 40, 50); //10 20 [ 30, 40, 50 ]

