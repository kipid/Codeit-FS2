const a = typeof 'a';

interface Product {
	id: string;
	name: string;
	price: number;
	salePrice: number;
	memberOnly?: boolean;
}

// type ProductKey = keyof Product;

const productKey: (keyof Product)[] = [
	'id',
	'name',
	'price',
	'salePrice',
	'memberOnly'
];

const product: Product = {
	id: 'p-001',
	name: '코드잇 냉장고',
	price: 20000,
	salePrice: 15000,
}

// TS 연산으로 활용: 특정 값의 타입을 그대로 가져올 때
let b: typeof product;

// JS 연산으로 활용: 특정 값의 타입에 대한 expression
if (typeof product === 'object') {
	b = product;
}
typeof ''; // 'string'
typeof 1; // 'number'
typeof false; // 'boolean'
typeof []; // 'object'
typeof {}; // 'object'
typeof undefined; // 'undefined'
typeof null; // 'object'
typeof (() => {}); // 'function'

export {};
