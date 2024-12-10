import axios from "axios";

const shoeSizes: number[] = [1, 2, 3];
shoeSizes.map(shoeSize => shoeSize + 1);

const clothingSizes: string[] = ['M', 'L', 'XL'];
clothingSizes.map(clothingSize => clothingSize.toUpperCase());

// 제네릭으로 함수 만들기
function printArray<T> (items: T[]): void {
	items.forEach(item => console.log(item));
}

// 넘긴 배열의 타입에 따라 generic 이 추론됨
printArray([1, 2]);
printArray(['a', 'b']);

// 명시적으로 generic 타입 결정
printArray<string>(['a', 'b']);


function forEach<T> (items: T[], callback: (item: T) => void): void {
	items.forEach(item => callback(item));
}

const numbers = [1, 2, 3];

forEach(numbers, (number) => {
	console.log(number);
});

// 인터페이스 Generic 활용하기
interface Product {
	id: string;
	name: string;
	price: number;
}

enum ClothingSize {
	XS = 'XS',
	S = 'S',
	M = 'M',
	L = 'L',
	XL = 'XL',
}

type ShoeSize = 220 | 230 | 240 | 250 | 260 | 270 | 280 | 290 | 300;

interface SizeProduct<T> extends Product {
	sizes: T[];
}

const shoe: ShoeProduct = {
	id: 'p-001',
	name: '신발',
	price: 20000,
	sizes: [220, 230, 240],
}

// Type Alias 만들기
type ShoeProduct = SizeProduct<ShoeSize>;
type ClothingProduct = SizeProduct<ClothingSize>;

const cloth: ClothingProduct = {
	id: 'p-002',
	name: '바람막이',
	price: 20000,
	sizes: [ClothingSize.M, ClothingSize.L],
}

// interface 만들기
interface IShoeProduct extends SizeProduct<ShoeSize> {
	handmade: boolean;
}

const shoe2: IShoeProduct = {
	id: 'p-003',
	name: '신발',
	price: 20000,
	sizes: [220, 230, 240],
	handmade: true,
}

// Type Alias Generic 활용하기
type Pair<T> = [T, T];
const point: Pair<number> = [10, 20];
const fullname: Pair<string> = ['John', 'Doe'];



// Map
const map = new Map<string, Product>();
map.set('s-001', shoe);

// Set
const set = new Set<Product>();
set.add(cloth);

// axios
axios.get<Product>('/products/1')
	.then((response) => {
		const product = response.data;
		console.log(product);
	});

// 다른 유용한 타입들
const record0: { [productId: string]: Product } = {
	's-001': shoe,
	's-002': shoe2,
}
const record: Record<string, Product> = {
	's-001': shoe,
	's-002': shoe2,
};

type ShoeProductInfo1 = Pick<IShoeProduct, 'name' | 'sizes' | 'handmade'>;

type ShoeProductInfo2 = Omit<IShoeProduct, 'id' | 'price' | 'bankAccount'>;

// Union 제거하기
type promotionCoupon = '프로모션';
type InternalCoupon = '직원전용';
type welcomeCoupon = '웰컴';

type Coupon = promotionCoupon | InternalCoupon | welcomeCoupon;
type PublicCoupon = Exclude<Coupon, InternalCoupon>;
type Coupon2 = PublicCoupon | InternalCoupon;

// Parameter 가져오기
function addToCart(id: string, quantity: number) {}
type AddToCartParameters = Parameters<typeof addToCart>;

// Return Type 가져오기
function addToCart2(): boolean {
	return true;
}
type AddToCartResult = ReturnType<typeof addToCart2>;

export {};
