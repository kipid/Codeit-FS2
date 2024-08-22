import { printMenus } from './asyncFunctions.js';

console.log('Printing Menus:');

const menus = await fetch(`https://learn.codeit.kr/api/menus`);
printMenus(menus.json());

console.log('Finished');



import { getInterviews, getEmployees } from './asyncFunctions.js';

function addNewEmployee(employees, interview) {
  const { name, department } = interview;
  const newEmployee = {
    id: employees.length + 1,
    name,
    department,
    email: `${name}@codeitmall.kr`,
  };
  employees.push(newEmployee);
}

// 여기에 코드를 작성하세요.
const employees = await getEmployees();
const interviews = await getInterviews();
interviews.forEach(interview => {
  if (interview.result === "pass") {
    addNewEmployee(employees, interview);
  }
});

console.log(employees);