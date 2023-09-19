import * as example from "./example";
import * as refactoring from "./refactoring";

describe("11.2 함수 매개변수화하기", () => {
  test("리팩터링 전", () => {
    const { baseCharge } = example;

    expect(baseCharge(150)).toBe(60.5);
  });

  test("리팩터링 후", () => {
    const { baseCharge } = refactoring;

    expect(baseCharge(150)).toBe(60.5);
  });
});
