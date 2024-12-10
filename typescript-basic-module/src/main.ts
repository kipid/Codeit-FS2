import Product from "./types/product";
import Size from "./types/size";

const product1: Product = {
	id: 'c-001',
	name: '바람막이',
	price: 129000,
	sizes: [Size.L, Size.XL]
}

console.log(product1);
