//while문으로 2단 만들기
let i = 1;
while (i < 10) {
  // console.log(`2 X ${i} =  ${2 * i}`);
  i++;
}

//while 문으로 0 ~ 100 까지의 짝수 더하기
i = 2;
let sum = 0;
while (i < 101) {
  sum += i;
  i += 2;
}
console.log(sum); //2550

//do while

sum = 0;
i = 0;

do {
  i++;
  sum += i;
} while (i < 10);
console.log(sum); //55

//while 문만 사용
while (i < 10) {
  i++;
  sum += 1;
}
console.log(sum); //55

//'hello world' 가 출력되고 나서 while 문이 실행된다.
sum = 0;
i = 100;
do {
  console.log("hello world");
  i++;
  sum += i;
} while (i < 10);
console.log(sum); //hello world 101

//이렇게 했을땐 'hello world' 가 출력되지 않는 다는 점이 do while 과 다름
sum = 0;
i = 10;
while (i < 10) {
  console.log("hello world");
  i++;
  sum += i;
}
console.log(sum); //0

//break : 탈출
i = 0;

while (i < 100) {
  i++;
  if (i === 14) {
    console.log(i + "살 부터 중학생이 됩니다.");
    break;
  }
}
console.log("중학교 입학을 축하합니다");

//contine: 다음 루프로 넘어간다 - 메모리 잡아먹으니깐 조심해서 써야함
i = 0;
while (i < 10) {
  i++;
  console.log(i, "start");
  if (i > 5) {
    continue;
  }
  console.log(i, "end");
}
console.log("end");
/**
1 start
1 end
2 start
2 end
3 start
3 end
4 start
4 end
5 start
5 end
6 start
7 start
8 start
9 start
10 start
end
 */

//구구단
i = 2;
let j = 1;
while (i < 10) {
  while (j < 10) {
    console.log(`${i} X ${j} = ${i * j} `);
    j++;
  }
  j = 1; // 이걸 적어줘야 9단까지 나온다!
  i++;
}
