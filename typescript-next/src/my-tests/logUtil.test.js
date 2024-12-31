import { log } from './logUtil';

afterAll(() => {
	jest.clearAllMocks();
});

describe('logUtil 함수 테스트', () => {
	it('log 함수 테스트', () => {
		const spyConsole = jest.spyOn(console, 'log');
		log('info', 'message');
		expect(spyConsole).toHaveBeenCalledWith('[info] message');
	});
});