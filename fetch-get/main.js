// /* https://learn.codeit.kr/api/avatars에 GET 리퀘스트를 보내세요. */
// const res1 = fetch(`https://learn.codeit.kr/api/avatars`);

// /* https://learn.codeit.kr/api/avatars에 GET 리퀘스트를 보내세요. 쿼리 파라미터로 offset을 5, limit을 10으로 설정하세요. */
// const res2 = fetch(`https://learn.codeit.kr/api/avatars?offset=5&limit=10`);

// /* https://learn.codeit.kr/api/avatars/:id에 GET 리퀘스트를 보내세요. id를 7로 설정하세요. */
// const res3 = fetch(`https://learn.codeit.kr/api/avatars/7`);

// Promise.all([res1, res2, res3])
// .then(ress => ress.map(res => res.json()))
// .then(async (ress) => {
//   ress.forEach(async res => console.log(await res))
// });



const avatarData = {
  hairType: 'long1',
  hairColor: 'black',
  skin: 'tone300',
  clothes: 'tshirtBasic',
  accessories: 'headset'
}

const res = await fetch(`https://learn.codeit.kr/api/avatars`, {
  method: "POST",
  body: JSON.stringify(avatarData),
  headers: {
    "Content-Type": "application/json"
  }
});

const data = await res.json();
console.log('data', data);