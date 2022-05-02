let value1 = 30;
let value2 = 50;

console.log(value1 > value2); //false
console.log(value1 >= value2); //false
console.log(value1 < value2); //true
console.log(value1 <= value2); //true

value1 = 20;
value2 = "20";
console.log(value1 == value2); //true
console.log(value1 === value2); //false
console.log(value1 != value2); //false
console.log(value1 !== value2); //true
console.log(!value2); //false
console.log(!!value2); //true /강조! 이거 되게 많이 사용

console.log("----------------");
console.log(`1 ${!!undefined}`);
console.log(`1 ${undefined}`);
console.log(`2 ${null}`);
console.log(`2 ${!!null}`);
console.log(`3 ${!!NaN}`);
console.log(`3 ${NaN}`);
console.log(`4 ${!!Infinity}`);
console.log(`5 ${!![]}`); // 주의
console.log(`6 ${!!{}}`); // 주의
console.log(`7 ${!!""}`); // 주의
console.log(`8 ${!!0}`);
console.log(`9 ${!!"hello world"}`);
console.log(`10 ${!!-100}`);

function sum(x, y) {
  return x + y;
}

let person = {
  //key: value
  name: "수수",
  age: 27,
  height: 160,
  weight: 40,
  이력: { 첫번째직장: "하나", 두번째직장: "둘" },
  기능: sum,
};

console.log(person.name);
console.log(person["name"]);
console.log(person.기능(200, 300));
