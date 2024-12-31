import { signup } from './auth';
import { createUser } from './user';
import { sendEmail } from './email';

jest.mock('./user');
jest.mock('./email');

describe('signup', () => {
	it('should create a user and send a welcome email', () => {
		const mockUser = { email: 'test@codeit.kr' };
		createUser.mockReturnValue(mockUser);
		sendEmail.mockReturnValue(true);

		const result = signup({ email: 'test@codeit.kr' });

		expect(createUser).toHaveBeenCalledWith({ email: 'test@codeit.kr' });
		expect(sendEmail).toHaveBeenCalledWith(
			'no-replay@codeit.kr',
			'test@codeit.kr',
			'회원 가입을 축하합니다'
		);
		expect(result).toBe(true);
	});

	it('should throw an error if user creation fails', () => {
		createUser.mockReturnValue(null);

		expect(() => signup({ email: 'test@codeit.kr' })).toThrow('유저 생성 실패');
	});
});