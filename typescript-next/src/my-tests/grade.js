export function getGrade(score) {
	if (score >= 90) {
		return 'A';
	} else if (score >= 70) {
		return 'B';
	} else if (score >= 50) {
		return 'C';
	} else {
		return 'F';
	}
}
