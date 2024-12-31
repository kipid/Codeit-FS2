const mockFn = jest.fn((char, num) => {
	return `${char}-${num}`;
});

test('mockFn 테스트', () => {
	const result = mockFn('A', 1);
	mockFn('B', 2);
	mockFn('C', 3);

	// console.log(mockFn.mock);

	expect(result).toBe('A-1');
	expect(mockFn).toHaveBeenCalledWith('A', 1);
	expect(mockFn).toHaveBeenCalledTimes(3);
	expect(mockFn.mock.calls[0][0]).toBe('A');
});