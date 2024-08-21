import { printMenus } from './asyncFunction.js';

console.log('Printing Menus:');

const menus = await fetch(`https://learn.codeit.kr/api/menus`);
printMenus(menus.json());

console.log('Finished');
