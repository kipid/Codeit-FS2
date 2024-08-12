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
