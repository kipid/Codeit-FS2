// 기본값으로 index 형태로 값이 할당
enum Size {
	XS = 'XS',
	S = 'S',
	M = 'M',
	L = 'L',
	XL = 'XL',
}

console.log(Size.S); // 'S'

function addToCart(id: string, size: Size) {
	console.log(`상품 id=${id} 사이즈=${size}`);
}

addToCart('c001', Size.L);
addToCart('c001', Size.XL);

const stock: {
	[size in Size]?: number;
} = {
	[Size.XS]: 10,
	[Size.S]: 20,
	[Size.M]: 30,
	[Size.L]: 40,
	// [Size.XL]: 50,
};

export {};
