"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codeitmall = {
    stocks: {
        c001: 3,
        c002: 1,
    },
    cart: [],
    addToCart,
    addManyToCart,
};
const stocks = {
    c001: 3,
    c002: 1,
};
const cart = [];
function addToCart(id, quantity = 1) {
    if (stocks[id] < quantity) {
        console.log('재고가 부족합니다.');
        return false;
    }
    stocks[id] -= quantity;
    // quantity 만큼 id 를 카트에 넣겠다.
    for (let i = 0; i < quantity; i++) {
        cart.push(id);
    }
    return true;
}
addToCart('c001');
function addManyToCart(quantity, ...ids) {
    console.log(quantity, ids);
}
