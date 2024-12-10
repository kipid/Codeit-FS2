"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 기본값으로 index 형태로 값이 할당
var Size;
(function (Size) {
    Size["XS"] = "XS";
    Size["S"] = "S";
    Size["M"] = "M";
    Size["L"] = "L";
    Size["XL"] = "XL";
})(Size || (Size = {}));
console.log(Size.S); // 'S'
function addToCart(id, size) {
    console.log(`상품 id=${id} 사이즈=${size}`);
}
addToCart('c001', Size.L);
addToCart('c001', Size.XL);
const stock = {
    [Size.XS]: 10,
    [Size.S]: 20,
    [Size.M]: 30,
    [Size.L]: 40,
    // [Size.XL]: 50,
};
