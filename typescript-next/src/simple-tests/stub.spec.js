import { getFortuneString } from "./fortune";

test('stub 운세', () => {
	const stubDate = {
		getFullYear: () => 2121,
	}
	const result = getFortuneString(stubDate);
	expect(result).toBe('오늘은 새로운 시작을 하기에 좋은 날입니다.');
})