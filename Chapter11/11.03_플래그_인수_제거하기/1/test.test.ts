import * as example from "./example";
import * as refactoring from "./refactoring";

describe("11.3  플래그 인수 제거하기", () => {
  test("리팩터링 전", () => {
    const { use } = example;

    expect(use()).toBe(2);
  });

  test("리팩터링 후", () => {
    const { use } = refactoring;

    expect(use()).toBe(2);
  });
});
