var x = 10;
function test() {
  var x = 100;
  console.log(x);
  function test2() {
    var x = 1000;
    console.log(x);
  }
  test2();
}
test();

function 제곱(x) {
  function 승수(y) {
    return y ** x; //x가 은닉화되어있다
  }
  return 승수;
}

let 제곱2 = 제곱(2);
let 제곱3 = 제곱(3);

console.log(제곱2(2)); //4
console.log(제곱3(3)); //27

let z = 100;
function a() {
  let z = 1;
  b();
}
function b() {
  console.log(z);
}

a(); //100
b(); //100

x = 10;
function test() {
  x = 100;
}
test();
console.log(x);//100

x = 10;
function test2() {
  let x = 100;
}
test2();
console.log(x);//10
