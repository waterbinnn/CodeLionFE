var outer = function () {
  var a = 1;
//이 a에 접근할 수 있는건 inner함수뿐 - 폐쇄된 공간을 만들었음

  var inner = function () {
    var b = 6;
    var c = 7;
    a = a + b + c;

    console.log(a);
  };

  return inner();
};

//폐쇄된 공간에 접근할 수 있는건 이 것들뿐. 이 테크닉을 클로져 라고 한다
var newInner = outer();
newInner();


/*
내부함수가 외부함수보다 오래 살아남는 경우가 있다. 
그럼 외부함수에 있던 변수들은 어떻게 될까?
*/
