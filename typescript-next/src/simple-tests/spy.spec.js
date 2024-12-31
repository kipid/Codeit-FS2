import { getFortuneString } from "./fortune";

test('spy 운세', () => {
	let isGetFullYearCalled = false; // 호출 기록을 위한 변수

	const realDate = new Date('2025-1-1');
	const spyDate = {
		getFullYear: () => {
			isGetFullYearCalled = true; // 호출여부 기록
			return realDate.getFullYear(); // 실제 Date 객체의 getFullYear 메서드 호출
		}
	};

	const result = getFortuneString(spyDate);
	expect(isGetFullYearCalled).toBe(true); // getFullYear 메서드가 호출되었는지 확인
	expect(result).toBe('오늘은 새로운 시작을 하기에 좋은 날입니다.');
});
