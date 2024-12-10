const codeitmall: {
	stocks: { [id: string]: number },
	cart: string[],
	addToCart: (id: string, quantity?: number) => boolean;
	addManyToCart: (quantity: number, ...ids: string[]) => void;
} = {
	stocks: {
		c001: 3,
		c002: 1,
	},
	cart: [],
	addToCart,
	addManyToCart,
}

const stocks: { [id: string]: number } = {
	c001: 3,
	c002: 1,
}

const cart: string[] = [];

function addToCart(id: string, quantity: number = 1): boolean {
	if (stocks[id] < quantity) {
		console.log('재고가 부족합니다.');
		return false;
	}
	stocks[id] -= quantity;

	// quantity 만큼 id 를 카트에 넣겠다.
	for (let i = 0; i < quantity; i++) {
		cart.push(id);
	}

	return true;
}

addToCart('c001');

function addManyToCart(quantity: number, ...ids: string[]) {
	console.log(quantity, ids);
}

export {}
