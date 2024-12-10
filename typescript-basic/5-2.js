"use strict";
// type Cart = string[];
const cart = [
    { id: 'c001', quantity: 0 },
    { id: 'c002', quantity: 2 },
    { id: 'c003', quantity: 4 },
];
const printCart = (cart) => {
    cart.forEach((item) => {
        console.log(item.id, item.quantity);
    });
    // console.log(cart);
};
printCart(cart);
