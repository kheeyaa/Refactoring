import * as example from "./example";
import * as refactoring from "./refactoring";

describe("8.6 문장 슬라이드하기", () => {
  test("리팩터링 전", () => {
    const { foo } = example;

    expect(foo()).toBe(-27);
  });

  test("리팩터링 후", () => {
    const { foo } = refactoring;

    expect(foo()).toBe(-27);
  });
});
