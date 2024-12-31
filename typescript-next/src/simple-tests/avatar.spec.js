import getAvatars, { fetchData } from "./avatar";

const fetchWithTime = async (time) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ results: [] });
		}, time);
	});
};

describe.skip("getAvatars", () => {
	test("여러 비동기 함수 테스트", async () => {
		const results = await Promise.all([
			fetchWithTime(1000),
			fetchWithTime(500),
			fetchWithTime(1500),
		]);

		results.forEach((result) => {
			expect(result).toEqual({ results: [] });
		});
	}, 2000);

	test("Timeout Test", async () => {
		const data = await fetchWithTime(1000);
		expect(data).toEqual({ results: [] });
	}, 5000);

	it("fetches avatars from the API", (done) => {
		getAvatars().then((results) => {
			expect(results).toBeTruthy();
			done();
		})
		.catch((error) => {
			done.fail(error);
		});
	});

	it("fetches avatars from the API", async () => {
		const results = await getAvatars();
		// console.log(results);
		expect(results).toBeTruthy();
	});

	test("에러 케이스", async () => {
		expect.assertions(1);

		try {
			await fetchData();
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
		}
	});
});