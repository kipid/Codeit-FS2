function getItem(database, itemId) {
	const item = database.findById(itemId); // Item | null
	return item;
}

const mockFindById = jest.fn((id) => {
	if (id === 1) {
		return { id: 1, name: '아이템' };
	}
	return null;
});

const mockDatabase = {
	findById: mockFindById,
}

describe('getItem 함수 테스트', () => {
	it('아이템을 찾을 수 있을 때', () => {
		const result = getItem(mockDatabase, 1);
		expect(result).toEqual({ id: 1, name: '아이템' });
	});

	it('아이템을 찾을 수 없을 때', () => {
		const item = getItem(mockDatabase, 2);
		expect(item).toBeNull();
	});
});