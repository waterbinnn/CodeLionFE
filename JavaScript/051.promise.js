let p = new Promise(function (resolve, reject) {
  resolve("hello world");
})
  .then((메시지) => {
    alert(메시지);
    return 메시지.split(" ")[0]; //hello
  })
  .then((메시지) => {
    alert(메시지);
    return 메시지[0]; //h
  })
  .then((메시지) => {
    alert(메시지); //h
  });

 