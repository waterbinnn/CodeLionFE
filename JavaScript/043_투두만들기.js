// 1. 해야할 일 Todo 클래스(내용, 상태 두 가지 프로퍼티를 가집니다.)
// 2. Todo 클래스는 상태를 변경하는 changeState 메서드를 가집니다.
// 3. 할일의 목록을 관리하는 관리자를 추상화한 TodoManager 클래스 (할일 목록을 프로퍼티로 가집니다.)
// 4. 할 일을 저장하고(addItem), 할 일의 목록을 보여주며(getItems), 할 일의 남은 갯수를 반환하는(getLeftTodoCount) 세 가지 메소드를 가집니다.

//다희님 코드
// // 해야할 일 Todo 클래스
// class Todo {
//   constructor(context, isDone = false) {
//     this.context = context;
//     this.isDone = isDone;
//   }
//   // methods
//   // changeState - 상태를 변경
//   changeState() {
//     this.isDone = this.isDone === false ? true : false;
//   }
// }

// // TodoManager 클래스
// class TodoManager {
//   constructor(todos = []) {
//     this.todos = todos;
//   }
//   // methods
//   // addItem - 할 일을 저장
//   addItem(todo) {
//     this.todos.push(todo);
//   }
//   // getItems - 할 일의 목록을 보여줌
//   get getItem() {
//     return this.todos;
//   }
//   // getLeftTodoCount - 할 일의 남은 갯수
//   get getLeftTodoCount() {
//     return this.todos.filter(todo => todo.isDone === false).length;
//   }
// }

// const todo_rutin = new TodoManager();

// todo_rutin.addItem(new Todo("스킨로션 바르기"));

class Todo {
  constructor(item, finished) {
    this.item = item;
    this.finished = finished;
  }

  changeState() {
    this.finished = !this.finished; //부정연산자 활용
    // true면 false false면 true 로 바꿔줌
  }
}

class TodoManager {
  constructor() {
    this.todoList = [];
  }

  addItem(item, finished = false) {
    // const todo = new Todo(item, finished);
    this.todoList.push(new Todo(item, finished));
  }
  getItems() {
    return this.todoList;
  }
  getLeftTodoCount() {
    this.todoList.reduce((total, current) => {
      if (current.finished === false) {
        return ++total; //만약 안끝났으면 total 값을 하나씩 올려줌
      } else {
        return total;
      }
    }, 0);
  }
}

const todoManager = new TodoManager();

todoManager.addItem("김치시키기");
console.log(todoManager.getItems());
todoManager.getItems()[0].changeState();
console.log(todoManager.getItems());

todoManager.addItem("토너랑 화장솜사기");
todoManager.addItem("연사준비하기");
todoManager.addItem("집필 내용 추가하기");
console.log(todoManager.getItems());

console.log(todoManager.getLeftTodoCount());
