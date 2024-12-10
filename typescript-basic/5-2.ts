// type Cart = string[];

type Cart = {
	id: string;
	quantity: number;
}[]

interface User {
	username: string;
	email: string;
	cart: Cart;
}

const cart: Cart = [
	{id: 'c001', quantity: 0},
	{id: 'c002', quantity: 2},
	{id: 'c003', quantity: 4},
]

const printCart = (cart: Cart) => {
	cart.forEach((item) => {
		console.log(item.id, item.quantity);
	});
	// console.log(cart);
}

printCart(cart);
