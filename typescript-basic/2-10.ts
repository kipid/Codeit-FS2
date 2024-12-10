let product0: any = 'abc';
product0 = 123;

const jsonString = '{"name":"바람막이"}';

const product1 = JSON.parse(jsonString) as { name: string };
const product2: { name: string } = JSON.parse(jsonString);

export {};