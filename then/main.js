// const result = fetch(`https://learn.codeit.kr/api/menus`);

// console.log(result);

// result.then(value => {
//   console.log("value: ", value);
// });

function getRandomElement(arr) {
  const randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
}

console.log('메뉴 고르는 중...');

// const response = fetch('https://learn.codeit.kr/api/menus');
// const menus = response.then(resp => resp.json());
// const randomMenu = menus.then(menus => getRandomElement(menus));
// randomMenu.then(randomMenu => console.log(`오늘의 랜덤 메뉴는 ${randomMenu.name}입니다!`));

fetch('https://learn.codeit.kr/api/menus')
.then(response => response.json())
.then(menus => {
  console.log(`오늘의 랜덤 메뉴는 ${getRandomElement(menus).name}입니다!`);
});