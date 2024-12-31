class Fortune {
	getMessage(year) {
		return `${year}년의 운세입니다.`;
	}
}

test('spy 기록 확인', () => {
	const fortune = new Fortune();
	const spy = jest.spyOn(fortune, 'getMessage');

	fortune.getMessage(2021);
	fortune.getMessage(2022);
	fortune.getMessage(2023);

	// console.log(spy.mock);

	expect(spy).toHaveBeenCalledTimes(3);
	expect(spy).toHaveBeenCalledWith(2022);

	spy.mockRestore();
})