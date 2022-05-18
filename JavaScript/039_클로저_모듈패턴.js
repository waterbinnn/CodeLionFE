//모듈패턴 : 중요한 정보는 일부러 보호하기 위해 클로저 공간으로 만들고 그걸 모듈패턴이라 한다.
function Person() {
  let age = 15;

  return {
    getAge: function () {
      return age;
    },

    setAge: function (data) {
      age = data;
    },
  };
}

const person = Person();
console.log(person.getAge()); //15
console.log(person.age); //undefined
person.setAge(40);
console.log(person.getAge()); //40

//사용자 정의 타입 패턴
function PersonType() {
  this.age = 35;
}

PersonType.prototype.getAge = function () {
  return this.age;
};

const person2 = new PersonType();
console.log(person2.getAge());

//모듈 + 사용자 정의 타입 혼합 패턴. 비공개 변수를 포함한 타입을 생성할 때 사용

function PersonType2() {
  let age = 25;

  function innerPersonType() {}

  innerPersonType.prototype.getAge = function () {
    return age;
  };
  return innerPersonType;
}

const Person3 = PersonType2(); //Person3에는 innerPersonType() 이 들어가게 된다

const person3 = new Person3();
console.log(person3.getAge());

console.log(person3.age);


//즉시실행함수로 위 코드 줄이기 
const PersonType3 = (function () {
  let age = 15;

  function innerPersonType() {}

  innerPersonType.prototype.getAge = function () {
    return age;
  };
  return innerPersonType;
})();

const personWithSecret = new PersonType3();
console.log(personWithSecret.getAge());

