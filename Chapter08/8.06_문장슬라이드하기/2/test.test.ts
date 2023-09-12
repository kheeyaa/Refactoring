import * as example from "./example";
import * as refactoring from "./refactoring";

describe("8.6 예시: 조건문이 있을 때의 슬라이드", () => {
  test("리팩터링 전", () => {
    const { foo } = example;

    expect(foo()).toEqual({ name: "resource1", value: 234 });
  });

  test("리팩터링 후", () => {
    const { foo } = refactoring;

    expect(foo()).toEqual({ name: "resource1", value: 234 });
  });
});
