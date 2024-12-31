import { createUser } from './user';
import { sendEmail } from './email';

export function signup(data) {
	const user = createUser(data);
	if (!user) throw new Error('유저 생성 실패');
	const result = sendEmail(
		'no-replay@codeit.kr',
		user.email,
		'회원 가입을 축하합니다'
	);
	return result;
}
