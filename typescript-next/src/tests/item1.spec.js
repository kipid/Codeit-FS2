function getItem(database, itemId) {
	const item = database.findById(itemId); // Item | null
	return item;
}

const mockFindById = jest.fn();

const mockDatabase = {
	findById: mockFindById,
}

describe('getItem 함수 테스트', () => {
	it('아이템을 찾을 수 있을 때', () => {
		const item = { id: 1, name: '아이템' };
		mockFindById.mockReturnValue(item);

		const result = getItem(mockDatabase, 1);
		expect(result).toEqual({ id: 1, name: '아이템' });
	});

	it('아이템을 찾을 수 없을 때', () => {
		mockFindById.mockReturnValue(null);

		const item = getItem(mockDatabase, 1);
		expect(item).toBeNull();
	});
});