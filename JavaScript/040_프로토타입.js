//프로토타입은 메서드를 저장하는 공간이다. 모든 인스턴스가 하나의 메서드를 공유하도록 만들어 자원을 더 효율적으로 사용하도록 도와준다.

//함수만 프로토타입으로 만든다

const menu = ["라면", "치킨", "햄버거", "피자", "초콜렛", "샐러드"];

function FoodBot(foodNames) {
  this.menu = foodNames;
}

FoodBot.prototype.sayMenu = function () {
  console.log(this.menu[Math.floor(Math.random() * menu.length)]);
};

const foodBotMark1 = new Foodbot(menu);

foodBotMark1.sayMenu();



// const me = {
        //     name: '한재현',
        //     address: '제주도 제주시 인다 1길',
        //     phoneNum: '010-8001-6536',
        //     canWalk: function () {
        //         console.log('재현이가 걷는다.');
        //     },
        //     teaching: function (student) {
        //         student.levelUp();
        //     }
        // }

        // const student = {
        //     level: 1,
        //     levelUp: function () {
        //         this.level++;
        //     }
        // }

        function Me(name, address, phoneNum) {
          this.name = name;
          this.address = address;
          this.phoneNum = phoneNum;
      }

      Me.prototype.canWalk = function () {
          console.log('재현이가 걷는다.');
      }

      Me.prototype.teaching = function (student) {
          student.levelUp();
      }

      function Student(level) {
          this.level = level;
      }

      Student.prototype.levelUp = function () {
          this.level++;
      }