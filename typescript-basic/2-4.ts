let product = {
	id: 'c001',
	name: '바람막이',
	price: 12900
}

const newProduct = {
	id: 'c002',
	name: '바람막이2',
	price: '13900원'
}

// product = newProduct;

// Type '{ id: string; name: string; price: string; }' is not assignable to type '{ id: string; name: string; price: number; }'.
//   Types of property 'price' are incompatible.
//     Type 'string' is not assignable to type 'number'.ts(2322)
// let product: {
//     id: string;
//     name: string;
//     price: number;
// }