// export async function getAvatars(params = {}) {
//   const url = new URL('https://learn.codeit.kr/api/avatars');
//   Object.keys(params).forEach((key) =>
//     url.searchParams.append(key, params[key])
//   );
//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
// }

export async function getAvatar(id) {
  const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`);
  const data = await res.json();
  return data;
}

export async function createAvatar(avatarData) {
  const res = await fetch('https://learn.codeit.kr/api/avatars', {
    method: 'POST',
    body: JSON.stringify(avatarData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
}

export async function patchAvatar(id, avatarData) {
  const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`, {
    method: "PATCH",
    data: JSON.stringify(avatarData),
    headers: {
      'Content-Type': "application/json"
    }
  })
  const data = await res.json();
  return data;
}

export async function deleteAvatar(id) {
  const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`, {
    method: "DELETE",
    headers: {
      'Content-Type': "application/json"
    }
  })
  const data = await res.json();
  return data;
}

import { createAvatar, patchAvatar, deleteAvatar } from './api.js';

let avatar = await createAvatar({
  hairType: 'long1',
  hairColor: 'black',
  skin: 'tone300',
  clothes: 'collarBasic',
  accessories: 'headset'
});
avatar = await patchAvatar(avatar.id, {
  hairType: 'short3',
  hairColor: 'blonde',
});

console.log(avatar);
await deleteAvatar(avatar.id);