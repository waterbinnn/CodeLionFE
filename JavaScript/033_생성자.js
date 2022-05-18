//생성자
// new : 생성자가 만들어낸 객체(인스턴스)를 참조

// 생성자 함수로 객체를 만들었다 => 객체생성자
let myArr = new Array(1, 2, 3);
let myArr2 = new Array(4, 5, 6);

myArr2.length;
myArr.length;

myArr.forEach((item) => {
  console.log(item);
});

myArr2.forEach((item) => {
  console.log(item);
});

//커스텀 생성자
//랜덤으로 메뉴 나오게 하기

const menu = ["라면", "치킨", "햄버거", "피자", "초콜렛", "샐러드"];

function Foodbot(foodNames) {
  this.menu = foodNames;
  this.sayMenu = function () {
    console.log(this.menu[Math.floor(Math.random() * menu.length)]);
    //인덱스가 뽑아져나오는 값에 바로 접근할 수 있는 식
  };
}

const foodBotMark1 = new Foodbot(menu);

foodBotMark1.sayMenu();
foodBotMark1.sayMenu();
foodBotMark1.sayMenu();
foodBotMark1.sayMenu();

// 생성자가 곧 클래스고 클래스가 곧 타입이다. 생성자 = 클래스 = 타입

