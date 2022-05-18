function Robot(name) {
  this.name = name;
}

Robot.prototype.sayYourName = function () {
  console.log(`움치킨 움츀킨 ${this.name}`);
};

const bot1 = new Robot("쑤수");
console.log(bot1); //Robot { name: '쑤수' }

//class 이용해보자!

class RobotClass {
  constructor(name) {
    this.name = name;
  }
  sayYourName() {
    console.log(`움치킨 움츀킨 ${this.name}`);
  }
}

const botClass1 = new RobotClasso("수쑤");

console.log(botClass1.name);

