"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const size_1 = __importDefault(require("./types/size"));
const product1 = {
    id: 'c-001',
    name: '바람막이',
    price: 129000,
    sizes: [size_1.default.L, size_1.default.XL]
};
console.log(product1);
