// 기본형
const itemName: string = '바람막이';
const itemPrice: number = 12900;
const isSoldout: boolean = true;
const isOwner: undefined = undefined;
const isSeller: null = null;

// 배열과 튜플
const fruit: string[] = ['apple', 'banana', 'cherry'];
const fruits: string[][] = [['apple', 'banana'], ['cherry', 'watermelon']];

const mySizes: [number, number, string] = [95, 100, '105'];

// 객체
const myInfo: {
  name: string;
  age: number;
  isOwner: boolean;
	isMemberOnly?: boolean;
} = {
  name: '이름',
  age: 20,
  isOwner: true,
	// isMemberOnly: false
};

// 같은 타입의 속성을 제한없이 할당하는 경우
const stock: {
	[key: string]: number;
} = {
	apple: 10,
	banana: 20,
	cherry: 30,
	0: 10,
};

console.log(stock[0]);

export {}