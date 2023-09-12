import * as example from "./example";
import * as refactoring from "./refactoring";

describe("8.7 반복문 쪼개기", () => {
  test("리팩터링 전", () => {
    const { foo } = example;

    expect(foo()).toBe("최연소 8, 총 급여 663");
  });

  test("리팩터링 후", () => {
    const { foo } = refactoring;

    expect(foo()).toBe("최연소 8, 총 급여 663");
  });
});
