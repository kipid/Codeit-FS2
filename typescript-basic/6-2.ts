// 조건식 ? 참인 경우 반환값 : 거짓인 경우 반환값
// isHandmade ? '장인이 많든' : '공장에서 생성된'

// 예시 1:
// T 가 number 를 확장한다면? => T 가 숫자라면?
type IsNumber<T> = T extends number ? 'number' : 'not number';

const a: IsNumber<3> = 'number';
const b: IsNumber<'3'> = 'not number';



// 예시 2:
type IsArray<T> = T extends any[] ? true : false;

const c: IsArray<123> = false;
const d: IsArray<[]> = true;



// 예시 3:
function foo<T> (value: T): T extends string ? string : number {
	if (typeof value === 'string') {
		return 'string' as any;
	} else {
		return 1 as any;
	}
}

foo('abc');
foo(123);



// infer 사용: 해당 위치의 타입을 추론하여 가르킨다.
type ArrayElementType<T> = T extends (infer U)[] ? U : T;

// T = number[]
// T extends (??)[] 맞음!!
// 맞다면 (??) 자리의 타입을 추론하여 U 로 할당한다. -> infer U
type ArrayElement = ArrayElementType<number[]>;

// T = string
// T extends (??)[] 아님!! 배열이 아님.
// T type 으로 지정됨.
type ArrayElement2 = ArrayElementType<string>;



// infer 사용 예시 2
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type PromiseString = Promise<string>;

type Result = UnwrapPromise<PromiseString>;
type Result2 = UnwrapPromise<string>;



// infer 사용 예시 3
type ExtractPropertyType<T, K extends keyof T> = T extends { [key in K]: infer U } ? U : never;

interface Product {
	id: string;
	name: string;
	price: number;
	salePrice: number;
	memberOnly?: boolean;
}

type NameType = ExtractPropertyType<Product, 'name'>;
type PriceType = ExtractPropertyType<Product, 'price'>;



// infer 사용 예시 4
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
// Return Type 가져오기
function bar(): boolean {
	return true;
}
type ResultA = GetReturnType<typeof bar>;
type ResultB = ReturnType<typeof bar>;


export {};
