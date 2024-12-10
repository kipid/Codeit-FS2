enum Size {
	XS = 'XS',
	S = 'S',
	M = 'M',
	L = 'L',
	XL = 'XL',
}

interface Product {
	id: string;
	name: string;
	price: number;
	memberOnly?: boolean;
}

interface ClothingProduct extends Product {
	size: Size;
}

// DRY: Don't repeat yourself
const product1: ClothingProduct = {
	id: 'c001',
	name: '바람막이',
	price: 129000,
	size: Size.L,
};

const product2: Product = {
	id: 'c002',
	name: '바람막이2',
	price: 139000,
};

interface PrintProduct {
	(product: Product): void;
}

const printProduct: PrintProduct = (product: Product) => {
	console.log(`상품 id=${product.id} 상품명=${product.name} 가격=${product.price}`);
};

// interface BaseEntity {
// 	id: string;
// 	createdAt: Date;
// 	updatedAt: Date;
// }

interface Id {
	id: string;
}

interface Timestamps {
	createdAt: Date;
	updatedAt: Date;
}

// interface User extends BaseEntity {
interface User extends Id, Timestamps {
	name: string;
	age: number;
	isOwner: boolean;
}

export {};
