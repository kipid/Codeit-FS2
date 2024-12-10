"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Size;
(function (Size) {
    Size["XS"] = "XS";
    Size["S"] = "S";
    Size["M"] = "M";
    Size["L"] = "L";
    Size["XL"] = "XL";
})(Size || (Size = {}));
// DRY: Don't repeat yourself
const product1 = {
    id: 'c001',
    name: '바람막이',
    price: 129000,
    size: Size.L,
};
const product2 = {
    id: 'c002',
    name: '바람막이2',
    price: 139000,
};
const printProduct = (product) => {
    console.log(`상품 id=${product.id} 상품명=${product.name} 가격=${product.price}`);
};
