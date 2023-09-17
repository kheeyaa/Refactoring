import * as example from "./example";
import * as refactoring from "./refactoring";

describe("10.2 조건식 통합하기: or 사용하기", () => {
  test("리팩터링 전", () => {
    const { disabilityAmount } = example;
    expect(
      disabilityAmount({
        seniority: 1,
        monthsDisabled: 1,
        isPartTime: true,
      })
    ).toBe(0);
  });

  test("리팩터링 후", () => {
    const { disabilityAmount } = refactoring;

    expect(
      disabilityAmount({
        seniority: 1,
        monthsDisabled: 1,
        isPartTime: true,
      })
    ).toBe(0);
  });
});
