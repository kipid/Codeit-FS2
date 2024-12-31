import { getFortuneString } from "./fortune";

test('Mock 운세', () => {
	let isGetFullYearCalled = false; // 호출 기록을 위한 변수

	const mockDate = {
		getFullYear: () => {
			isGetFullYearCalled = true; // 호출여부 기록
			return 2121;
		}
	}

	const result = getFortuneString(mockDate);
	expect(isGetFullYearCalled).toBe(true); // getFullYear 메서드가 호출되었는지 확인
	expect(result).toBe('오늘은 새로운 시작을 하기에 좋은 날입니다.');
});