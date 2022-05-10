function factorial(n) {
  if (n <= 1) {
    return n; //탈출조건
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));
/**
 * factorial(5) 5 * factorial(4)  5 * 24 = 120
 * factorial(4) 4 * factorial(3)  4 * 6 = 24
 * factorial(3) 3 * factorial(2)  3 * 2 = 6
 * factorial(2) 2 * factorial(1)  2 * 1 = 2
 * factorial(1) 1 => 1이 되자 거슬러 올라감
 */

function test(a = 10, b = 20, c = 30) {
  return a + b + c;
}
test(); //60
test(100); //150 -> a 에만 100이 들어감
test(100, 200); //330 a, b에 각각 값이 들어감
test(100, 200, 300); //300

let s = 1;
for (let i = 0; i < 6; i++) {
  s *= 1;
}

function sigma(n) {
  if (n <= 1) {
    return n;
  }
  return n + sigma(n - 1);
}

console.log(sigma(100));

