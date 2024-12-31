import { FORTUNES } from "./fortune";

function getFortuneString() {
	const date = new Date();
	const year = date.getFullYear();
	return FORTUNES[year % FORTUNES.length];
}

test('spy 운세', () => {
	const spyGetFullYear = jest.spyOn(Date.prototype, 'getFullYear');
	spyGetFullYear.mockReturnValue(2025);

	const result = getFortuneString();
	expect(result).toBe(FORTUNES[2025 % FORTUNES.length]);
	expect(Date.prototype.getFullYear).toHaveBeenCalledTimes(1);

	// 스파이 복구
	jest.restoreAllMocks();
})
