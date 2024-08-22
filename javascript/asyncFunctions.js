// 여기에 코드를 작성하세요.
export async function printMenus(menus) {
  console.log(await menus);
}

export async function getEmployees() {
  const response = await fetch('https://learn.codeit.kr/api/employees');
  const employees = await response.json();
  return employees;
}

export async function getInterviews() {
  const response = await fetch('https://learn.codeit.kr/api/interview-results');
  const interviews = await response.json();
  return interviews;
}
