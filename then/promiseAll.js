import { getEmployees, getMenus } from './asyncFunctions.js';

const employees = getEmployees();
const menus = getMenus();

Promise.all([employees, menus])
.then(([employees, menus]) => {
  console.log('직원 데이터:');
  console.log(employees);
  console.log('메뉴 데이터:');
  console.log(menus);
});


// const allPromises = Promise.all([employees, menus]);
// const result = await allPromises;
// console.log(result[0]);
// console.log(result[1]);