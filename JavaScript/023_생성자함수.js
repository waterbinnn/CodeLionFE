function User(name) {
  this.name = name;
  console.log(this.name);
}

let user = new User("호준");
console.log(user.name);

// new 로 새로운 객체 생성

function 회원(입력이름, 입력나이, 입력성) {
  this.이름 = 입력이름;
  this.나이 = 입력나이;
  this.성별 = 입력성;
}

let 유저1 = new 회원("이수빈", 27, "여");
console.log(유저1);
