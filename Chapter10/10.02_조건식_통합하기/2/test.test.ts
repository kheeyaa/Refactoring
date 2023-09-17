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
        onVacation: true,
      })
    ).toBe(0);
    expect(
      disabilityAmount({
        seniority: 11,
        monthsDisabled: 1,
        isPartTime: false,
        onVacation: true,
      })
    ).toBe(1);
    expect(
      disabilityAmount({
        seniority: 11,
        monthsDisabled: 1,
        isPartTime: false,
        onVacation: false,
      })
    ).toBe(0.5);
  });

  test("리팩터링 후", () => {
    const { disabilityAmount } = refactoring;

    expect(
      disabilityAmount({
        seniority: 1,
        monthsDisabled: 1,
        isPartTime: true,
        onVacation: true,
      })
    ).toBe(0);
    expect(
      disabilityAmount({
        seniority: 11,
        monthsDisabled: 1,
        isPartTime: false,
        onVacation: true,
      })
    ).toBe(1);
    expect(
      disabilityAmount({
        seniority: 11,
        monthsDisabled: 1,
        isPartTime: false,
        onVacation: false,
      })
    ).toBe(0.5);
  });
});
