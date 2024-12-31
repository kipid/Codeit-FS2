describe('matcher', () => {
	test('toBe vs toEqual', () => {
		const obj1 = { a: 1 };
		const obj2 = { a: 1 };

		expect(obj1).toEqual(obj2); // 통과, 값의 내용을 깊은 비교. 재귀적으로 모두 비교.
		expect(obj1).toBe(obj2); // 실패, 객체의 참조값 비교. 기본값 비교에 적합.
	});

	test.only('not', () => {
		const value = 1;
		expect(value).not.toBe(2);

		const nums = [2, 3, 4];
		expect(nums).not.toContain(value);
	})
})