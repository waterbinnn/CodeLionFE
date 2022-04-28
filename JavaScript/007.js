var num1 = 1;
var num2 = 2;

num2 = num1;
console.log(num2); //1

num1 = 10;
console.log(num1); //10
console.log(num2); //1

num2 = num1;
console.log(num2);

console.log(0.1 + 0.2);
console.log(99999999999999999);
console.log(Number.MAX_SAFE_INTEGER);

console.log(parseInt("44.2432343")); //44
console.log(parseInt("44djfheu")); //44
console.log(parseInt("sfdf44")); //NaN
console.log(parseInt("44dd44")); //44
console.log(parseInt("5.6", 10)); //5

// Number 관련 함수
let n = 10000;
let nFloat = 10000.123123123;
let s = "10,000,000";

console.log(`n : ${n} <br>`);
console.log(`n.toLocaleString() : ${n.toLocaleString()} <br>`);
console.log(`s : ${s} <br>`);
console.log(`s.replace(/,/g, '') : ${s.replace(/,/g, "")} <br>`);
console.log(`parseInt(s, 10) : ${parseInt(s, 10)} <br>`);

console.log(`n.toFixed(10) : ${n.toFixed(10)} <br>`);
console.log(`nFloat.toFixed(3) : ${nFloat.toFixed(3)} <br>`);

console.log(`Number(true) : ${Number(true)}`); //Number(true) : 1
console.log(`Number(false) : ${Number(false)}`); //Number(true) : 0
console.log(`Number('') : ${Number("")}`); //0
console.log(`Number(' ') : ${Number(" ")}`); //0
console.log(`Number('hello') : ${Number("hello")}`); //NaN
console.log(`Number('10 20') : ${Number("10 20")}`); //NaN
console.log(`Number('10     ') : ${Number("10     ")}`); //10
console.log(`Number('     10') : ${Number("     10")}`); //10
console.log(`Number('     10     ') : ${Number("     10     ")}`); //10

console.log(`Math.PI : ${Math.PI}`); //Math.PI : 3.141592653589793
console.log(`Math.round(4.7) : ${Math.round(4.7)}`); //5
console.log(`Math.pow(2, 8) : ${Math.pow(2, 8)}`); //256
console.log(`Math.sqrt(64) : ${Math.sqrt(64)}`); // 8 (스퀘어루트:제곱근)
console.log(`Math.abs(-5) : ${Math.abs(-5)}`); // 5 절대값 - 그래프에서 많이 사용
console.log(`Math.random() : ${Math.random()}`);
console.log(`Math.max(10, 20, 30, 40, 50) : ${Math.max(10, 20, 30, 40, 50)}`); //50
console.log(`Math.min(10, 20, 30, 40, 50) : ${Math.min(10, 20, 30, 40, 50)}`); //10

let olaf = Math.floor(Math.random() * 100);
console.log(olaf);
