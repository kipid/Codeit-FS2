import { getDomainIPs } from './dns';

afterAll(() => {
	jest.clearAllMocks();
})

describe('getDomainIPs', () => {
	it('codeit.kr의 IP 주소를 가져올 수 있다', async () => {
		const result = await getDomainIPs('codeit.kr');
		// console.log(result);
		expect(result).toBeTruthy();
		expect(result.length).toBeGreaterThan(0);
	});
});

describe('getDomainIPs 함수 테스트', () => {
	test('codeit.kr에 대한 IP 정보를 가져오고, 배열이 존재하는지 확인', async () => {
		const spyFetch = jest.spyOn(global, 'fetch');
		spyFetch.mockResolvedValue({
			json: () => ({
				Answer: [
					{ data: '1.2.3.4' },
					{ data: '5.6.7.8' }
				]
			})
		});
		const ips = await getDomainIPs('codeit.kr');
		console.log(ips);
		expect(Array.isArray(ips)).toBe(true); // 리턴된 값이 배열인지 확인
		expect(ips.length).toBeGreaterThan(0); // 배열이 비어있지 않은지 확인
		console.log('Fetched IPs:', ips); // 실제로 가져온 IP를 로그로 확인해도 좋음
	});
});
