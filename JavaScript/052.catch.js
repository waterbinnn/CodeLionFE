let p = new Promise(function (resolve, reject) {
  // resolve('hello world');
  reject("hello world");
})
  .then((메시지) => {
    alert(메시지);
    return 메시지.split(" ")[0];
  })
  .then((메시지) => {
    alert(메시지);
    return 메시지[0];
  })
  .then((메시지) => {
    alert(메시지);
  })
  .catch((메시지) => {
    alert("catch 실행!! :" + 메시지);
  });

//성공했을때 then 실패때는 catch
/*
  promise에는 3가지 단계가 있다.
    - pending: 대기상태
    - fulfilled: 이행상태
    - rejected: 실패상태
    */
