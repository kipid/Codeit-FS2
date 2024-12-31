import isPassingScore from "./grade";

describe("isPassingScore", () => {
  it("55점 이상이면 true를 반환해야 합니다.", () => {
    const value = isPassingScore(55);
    expect(value).toBeTruthy();
    expect(value).toEqual(true);
  });

  it("55점 미만이면 false를 반환해야 합니다.", () => {
    const value = isPassingScore(54);
    expect(value).toBeFalsy();
    expect(value).toEqual(false);
  });
});
