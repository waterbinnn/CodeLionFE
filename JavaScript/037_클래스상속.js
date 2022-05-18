class Robot {
  // 클래스의 생성자 함수입니다. 하나의 클래스는 하나의 생성자만 정의할 수 있습니다.
  // 그리고 생성자 함수는 new 키워드가 호출될때 자동으로 실행됩니다.
  constructor(name) {
    this.name = name;
  }

  // 메소드를 정의합니다. 메소드는 클래스가 생성한 인스턴스를 통해 사용할 수 있습니다.
  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }
}

class BabyRobot extends Robot {
  constructor(name) {
    super(name);
    this.ownName = "쑤";
  }
  sayBabyName() {
    this.sayYourName(); //부모꺼지만 내거처럼 사용
    console.log("Suceeding you, Father!");
  }
}

const baby = new BabyRobot("수");

console.log(baby);
console.log(baby.sayBabyName());
console.log(baby.sayYourName());

//실습
class Sausage {
  constructor(a, b) {
    this.inside1 = a;
    this.inside2 = b;
  }

  taste() {
    console.log(`${this.inside1}와 ${this.inside2} 맛이 난다!!!!!!`);
  }
}

const sausage = new Sausage("소", "파");
console.log(sausage);

class FiresSausage extends Sausage {
  constructor(a, b, c) {
    super(a, b);
    this.inside3 = c;
  }

  taste() {
    console.log(`${this.inside1}와 ${this.inside2}의 맛이 난다 불맛도 난다 `);
  }
}

const firesausage = new FiresSausage("소", "파파");

console.log(firesausage);
console.log(sausage.taste());
console.log(firesausage.taste());

