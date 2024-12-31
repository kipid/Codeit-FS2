import { getFortuneString } from "./fortune";

class FakeDate {
	constructor(year, month, date) {
		this.data = { year, month, date };
	}

	getFullYear() {
		return this.data.year;
	}
}

describe("FakeDate", () => {
	it("생성자 테스트", () => {
		const date = new FakeDate(2021, 1, 1);
		expect(date.getFullYear()).toBe(2021);
	});

	it("getFortuneString 테스트", () => {
		const date = new FakeDate(2121, 1, 1);
		const value = getFortuneString(date);
		expect(value).toBe("오늘은 새로운 시작을 하기에 좋은 날입니다.");
	});
});
