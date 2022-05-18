// 스코프 : 변수의 생존범위
//1

var func1 = function () {
  var a = 1;
  var b = 2;
  console.log(a + b);
};

var a = 20;

func1(); //3 왜? 우선 함수 내부(함수 스코프)에서 찾음

// 만약 함수 내부에 a 가 없으면 밖에 있는 a 를 찾는다 => 스코프 체인

//2

var funcx = function () {
  var a = 1;
  var b = 2;

  var func2 = function () {
    var b = 5;
    var c = 6;
    console.log(`${a}+${b}+${c}`); //1+5+6
    a = a + b + c; //이 스코프에 a 가 없어서 위에서 찾아옴(스코프체인)
    console.log(a); //1+5+6 = 12
  };

  func2();
};

funcx();

//3

function test() {
  var val1 = "hello";
  var val2 = "world";
  val3 = "var let const 이런게 선언되어있지 않으면 전역변수가 되어버림";
}

test();

console.log(val1); //error
console.log(val2); //error
console.log(val3); //var let const 이런게 선언되어있지 않으면 전역변수가 되어버림
