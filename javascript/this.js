const printThis = () => {
  console.log(this.content);
}

const myObj = {
  content: "Alex Lee",
  printContent: printThis
}

printThis.call(myObj);
printThis.apply(myObj);
printThis.bind(myObj);

const otherObj = {
  content: "Kyle Lee",
  printContent: printThis
}

printThis.call(otherObj);
printThis.apply(otherObj);
printThis.bind(otherObj);

function printMsg(func) {
  console.log(`Printing Msg...`);
  // func();
  func?.();
}

function sayHello() {
  console.log(`Hello World!`);
}

printMsg(sayHello);
printMsg(sayHello());

function printMsgWithParams(func, ...params) {
  console.log(`Printing msg......`);
  func?.(...params);
}

printMsgWithParams((name, name1) => console.log(`Hello ${name} and ${name1}`), "kipid", "Codeit");
