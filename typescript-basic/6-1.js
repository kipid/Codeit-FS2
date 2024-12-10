"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const shoeSizes = [1, 2, 3];
shoeSizes.map(shoeSize => shoeSize + 1);
const clothingSizes = ['M', 'L', 'XL'];
clothingSizes.map(clothingSize => clothingSize.toUpperCase());
// 제네릭으로 함수 만들기
function printArray(items) {
    items.forEach(item => console.log(item));
}
// 넘긴 배열의 타입에 따라 generic 이 추론됨
printArray([1, 2]);
printArray(['a', 'b']);
// 명시적으로 generic 타입 결정
printArray(['a', 'b']);
function forEach(items, callback) {
    items.forEach(item => callback(item));
}
const numbers = [1, 2, 3];
forEach(numbers, (number) => {
    console.log(number);
});
var ClothingSize;
(function (ClothingSize) {
    ClothingSize["XS"] = "XS";
    ClothingSize["S"] = "S";
    ClothingSize["M"] = "M";
    ClothingSize["L"] = "L";
    ClothingSize["XL"] = "XL";
})(ClothingSize || (ClothingSize = {}));
const shoe = {
    id: 'p-001',
    name: '신발',
    price: 20000,
    sizes: [220, 230, 240],
};
const cloth = {
    id: 'p-002',
    name: '바람막이',
    price: 20000,
    sizes: [ClothingSize.M, ClothingSize.L],
};
const shoe2 = {
    id: 'p-003',
    name: '신발',
    price: 20000,
    sizes: [220, 230, 240],
    handmade: true,
};
const point = [10, 20];
const fullname = ['John', 'Doe'];
// Map
const map = new Map();
map.set('s-001', shoe);
// Set
const set = new Set();
set.add(cloth);
// axios
axios_1.default.get('/products/1')
    .then((response) => {
    const product = response.data;
    console.log(product);
});
// 다른 유용한 타입들
const record0 = {
    's-001': shoe,
    's-002': shoe2,
};
const record = {
    's-001': shoe,
    's-002': shoe2,
};
// Parameter 가져오기
function addToCart(id, quantity) { }
// Return Type 가져오기
function addToCart2() {
    return true;
}
