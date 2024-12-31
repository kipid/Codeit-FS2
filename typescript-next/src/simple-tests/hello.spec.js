import hello from "./hello";

describe('hello 함수 테스트', () => {
  describe('1번 inner', () => {
    it('Hello Jest! 문자열을 반환해야 합니다.', () => {
      const value = hello();
      expect(value).toBe('Hello Jest!');
    });
  });

  it('Hello Jest! 문자열을 반환해야 합니다.', () => {
    const value = hello();
    expect(value).toBe('Hello Jest!');
  });

  it('Hello 문자열을 포함해야 합니다.', () => {
    const value = hello();
    expect(value).toContain('Hello');
  });

  it('파라미터를 넘겨도 Hello Jest! 문자열을 반환해야 합니다.', () => {
    const value = hello(20);
    expect(value).toEqual('Hello Jest!');
  });
})

// 1. 테스트 이름
// 2. 테스트 코드
// test === it
it('should be equal to Hello Jest!', () => {
  const value = hello();

  // expect value to be 'Hello Jest!'.
  expect(value).toBe('Hello Jest!');
  expect(value).toEqual('Hello Jest!');
  expect(value).toContain('Hello');
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});

