

class Me {
  constructor(name, address, phoneNum) {
    this.name = name;
    this.address = address;
    this.phoneNum = phoneNum;
  }

  canWalk = function () {
    console.log("걷는다.");
  };

  teaching = function (student) {
    student.levelUp();
  };
}

class Student {
  constructor(level) {
    this.level = level;
  }
  levelUp = function () {
    this.level++;
  };
}

const me = new Me("수", "010-0101-0101", "제주도");
const student = new Student(1);

console.log(me);


