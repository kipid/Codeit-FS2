import { getFortuneString } from "./fortune";

const mockGetFullYear = jest.fn(() => 2025);

test('운세', () => {
	const mockDate = {
		getFullYear: mockGetFullYear
	};

	const result = getFortuneString(mockDate);
	expect(result).toBe('오늘은 새로운 시작을 하기에 좋은 날입니다.');
	expect(mockGetFullYear).toHaveBeenCalledTimes(1);
});