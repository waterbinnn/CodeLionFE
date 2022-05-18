class Robot {
  #password;

  constructor(name, pw) {
    this.name = name;
    this.#password = pw;
  }

  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }

  getPassword() {
    return this.#password;
  }

  setPassword(pw) {
    this.#password = pw;
  }
}

const bot = new Robot("류진");
console.log(bot.name);
console.log(bot.setPassword(1));
console.log(Robot);
