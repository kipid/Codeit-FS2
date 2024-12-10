// Union type: Type 에 대한 or 연산. A | B
// 객체의 union type 의 경우 같은 property 에 대해서만 참조 가능.

// Enum 타입은 값으로 활요할 수 있는 반면, Union 타입은 타입으로만 활용 가능.

enum ClothingSize {
	XS = 'XS',
	S = 'S',
	M = 'M',
	L = 'L',
	XL = 'XL',
}

Object.keys(ClothingSize);

type ShoeSize = 220 | 230 | 240 | 250 | 260 | 270 | 280 | 290 | 300;

interface Product {
	id: string;
	name: string;
	price: number;
}

interface ClothingProduct extends Product {
	sizes: ClothingSize[];
	color: string;
}

interface ShoeProduct extends Product {
	sizes: ShoeSize[];
	handmade: boolean;
}

function printSizes(product: ClothingProduct | ShoeProduct) {
	const availableSizes = product.sizes.join(', ');
	console.log(`구매가능 사이즈: ${availableSizes}`);
	if ('color' in product) {
		console.log(`색상 of 옷: ${product.color}`);
	}
	if ('handmade' in product) {
		console.log(`수입 of 신발: ${product.handmade ? 'O' : 'X'}`);
	}
}

export {};
