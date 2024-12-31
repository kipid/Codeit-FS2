import { getGrade } from "./grade";

describe('getGrade function tests', () => {
	it('should return A for scores 90 and above', () => {
		expect(getGrade(90)).toBe('A');
		expect(getGrade(95)).toBe('A');
		expect(getGrade(100)).toBe('A');
	});

	it('should return B for scores between 70 and 89', () => {
		expect(getGrade(70)).toBe('B');
		expect(getGrade(75)).toBe('B');
		expect(getGrade(89)).toBe('B');
	});

	it('should return C for scores between 50 and 69', () => {
		expect(getGrade(50)).toBe('C');
		expect(getGrade(60)).toBe('C');
		expect(getGrade(69)).toBe('C');
	});

	it('should return F for scores below 50', () => {
		expect(getGrade(0)).toBe('F');
		expect(getGrade(30)).toBe('F');
		expect(getGrade(49)).toBe('F');
	});
});