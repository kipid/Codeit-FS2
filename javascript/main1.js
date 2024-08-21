const resp = fetch(`https://learn.codeit.kr/api/menus`);
// console.log(resp);

const gift = await fetch(`https://learn.codeit.kr/api/menus`);
// console.log(gift);

// const json = gift.json();
// console.log(json);

const jsonResp = await gift.json();
console.log(jsonResp);