export function sendEmail(fromEmail, toEmail, content) {
	console.log(`실제로 ${fromEmail}에서 ${toEmail}로 이메일을 보냄: ${content}`);
	return true;
}
