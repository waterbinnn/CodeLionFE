let test = { one: 1, two: 2 };

test["one"] = 1000;

console.log(Object.values(test)); //[ 1000, 2 ]
//이렇게 적어 줘야 values 를 받을 수 있는 Object 특징의 불편함때문에 map set 사용 - IE 지원을 안해서 실무에서는 잘 사용안함

let m = new Map();

// Map에 값을 넣기
m.set("하나", "1");
m.set(2, "둘");
m.set("셋", 3);

// console.log(m); /Map(3) { '하나' => '1', 2 => '둘', '셋' => 3 }

// Map의 값에 접근하기
console.log(m.get("하나"));
console.log(m.get(2));
console.log(m.get("셋"));

// Map의 값이 있는지 확인하기
console.log(m.has("하나")); //true

// Map의 값을 제거하기
console.log(m.delete("하나"));

// Map의 크기를 확인하기
console.log(m.size); //2

let s = new Set("abcdeeeeeeeee");
console.log(s);
console.log(s.size);

// Set에 값을 추가하기
s.add("f");
console.log(s);

// Set을 순환하기
for (var variable of s) {
  console.log(variable);
}

// 값이 배열인 경우
let ss = new Set("abcdeeeeeeeee".split(""));
console.log(ss);

// Set의 값을 제거하기
ss.delete("b");

// Set의 값을 확인하기
console.log(ss.has("a"));

// Set의 모든 값을 제거하기
ss.clear;
console.log(ss);

let a = new Set("abc");
let b = new Set("cde");

// 교집합
let cro = [...a].filter((value) => b.has(value));
console.log(cro); //[ 'c' ]

// 차집합 (교집합과의 차이는 ! 차이)
let dif = new Set([...a].filter((x) => !b.has(x)));
console.log(dif); //{ 'a', 'b' }

// 합집합
let union = new Set([...a].concat(...b));
console.log(union); //{ 'a', 'b', 'c', 'd', 'e' }


