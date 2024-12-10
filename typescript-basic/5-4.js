"use strict";
// Union type: Type 에 대한 or 연산. A | B
// 객체의 union type 의 경우 같은 property 에 대해서만 참조 가능.
Object.defineProperty(exports, "__esModule", { value: true });
// Enum 타입은 값으로 활요할 수 있는 반면, Union 타입은 타입으로만 활용 가능.
var ClothingSize;
(function (ClothingSize) {
    ClothingSize["XS"] = "XS";
    ClothingSize["S"] = "S";
    ClothingSize["M"] = "M";
    ClothingSize["L"] = "L";
    ClothingSize["XL"] = "XL";
})(ClothingSize || (ClothingSize = {}));
Object.keys(ClothingSize);
function printSizes(product) {
    const availableSizes = product.sizes.join(', ');
    console.log(`구매가능 사이즈: ${availableSizes}`);
    if ('color' in product) {
        console.log(`색상 of 옷: ${product.color}`);
    }
    if ('handmade' in product) {
        console.log(`수입 of 신발: ${product.handmade ? 'O' : 'X'}`);
    }
}
