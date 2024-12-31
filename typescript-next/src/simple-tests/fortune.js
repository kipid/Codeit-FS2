const Fortunes = [
	'오늘은 새로운 시작을 하기에 좋은 날입니다.',
	'소중한 사람과의 대화가 큰 힘이 될 것입니다.',
	'작은 일에도 기쁨을 느낄 수 있는 날입니다.',
];

export function getFortuneString(date) {
	const year = date.getFullYear();
	return Fortunes[year % Fortunes.length];
}
