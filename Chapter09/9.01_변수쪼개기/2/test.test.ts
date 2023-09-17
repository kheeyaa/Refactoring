import * as example from "./example";
import * as refactoring from "./refactoring";

describe("9.1 변수 쪼개기", () => {
  test("리팩터링 전", () => {
    const { discount } = example;

    expect(discount(58, 110)).toBe(55);
  });

  test("리팩터링 후", () => {
    const { discount } = refactoring;

    expect(discount(58, 110)).toBe(55);
  });
});
