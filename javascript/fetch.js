const resp = await fetch(`https://learn.codeit.kr/api/menus`);
// console.log(resp);

resp.json().then(function (data) {
  console.log(data);
});

// const menus = await resp.json();
// console.log(menus);