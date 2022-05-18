class Robot {
  #password;

  constructor(name, pw) {
    this.name = name;
    this.#password = pw;
  }

  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }

  get password() {
    return this.#password;
  }

  set password(pw) {
    this.#password = pw;
  }
}

const bot = new Robot("류진", 1234);

console.log(bot);
console.log(bot.password); //함수인데 함수가 아닌 get키워드로 객체로  쓰임! 프로퍼티 다루듯 쓰임 
bot.password = "45645";
console.log(bot);
