import { createAvatar } from './api.js';

try {
  const data = await createAvatar({
    hairType: 'long5',
    hairColor: 'black',
    skin: 'tone100',
    clothes: 'hoodie',
    accessories: 'none',
  });
  console.log(data);
} catch (e) {
  console.log(e.message);
  if (e.response) {
    console.log(e.response.status);
    console.log(e.response.data);
  }
}