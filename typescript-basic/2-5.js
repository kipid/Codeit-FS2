"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 기본형
const itemName = '바람막이';
const itemPrice = 12900;
const isSoldout = true;
const isOwner = undefined;
const isSeller = null;
// 배열과 튜플
const fruit = ['apple', 'banana', 'cherry'];
const fruits = [['apple', 'banana'], ['cherry', 'watermelon']];
const mySizes = [95, 100, '105'];
// 객체
const myInfo = {
    name: '이름',
    age: 20,
    isOwner: true,
    // isMemberOnly: false
};
// 같은 타입의 속성을 제한없이 할당하는 경우
const stock = {
    apple: 10,
    banana: 20,
    cherry: 30,
    0: 10,
};
console.log(stock[0]);
