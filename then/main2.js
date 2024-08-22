function getRandomElement(arr) {
  const randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
}

fetch('https://learnnnnn.codeit.kr/api/menus')
  .then((response) => response.json())
  .then((menus) => {
    const randomMenu = getRandomElement(menus);
    console.log(`오늘의 랜덤 메뉴는 ${randomMenu.name}입니다!`);
  })
  .catch(err => console.log(err))
  .finally(() => console.log("함수 호출이 끝났습니다."));
  // 여기에 코드를 작성하세요.
