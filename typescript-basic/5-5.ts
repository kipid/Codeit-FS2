// Intersection 타입: A & B
// 객체의 intersection 의 경우, 모든 property 에 대해 참조 가능.

interface Id {
	id: string;
}

interface Product extends Id {
	name: string;
	price: number;
}

interface User extends Id {
	username: string;
	email: string;
	createdAt: Date;
	updatedAt: Date;
}

type TimeStamp = {
	createdAt: Date;
	updatedAt: Date;
}

type Review = Id & TimeStamp & {
	productId: string;
	userId: string;
	content: string;
}

const review: Review = {
	id: 'r-001',
	createdAt: new Date(),
	updatedAt: new Date(),
	productId: 'p-001',
	userId: 'u-001',
	content: '좋아요',
}
