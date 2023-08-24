import * as example from "./example";
import * as refactoring from "./refactoring";

describe("7.1.2 중첩된 레코드 캡슐화하기", () => {
  test("리팩터링 전", () => {
    const { laterAmount, change } = example.compareUsage("1920", 2016, 2);
    expect(laterAmount).toBe(55);
    expect(change).toBe(-8);
  });

  test("리팩터링 후", () => {
    const { laterAmount, change } = refactoring.compareUsage("1920", 2016, 2);
    expect(laterAmount).toBe(55);
    expect(change).toBe(-8);
  });
});
