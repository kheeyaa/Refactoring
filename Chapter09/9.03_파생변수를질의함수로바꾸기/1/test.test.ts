import * as example from "./example";
import * as refactoring from "./refactoring";

describe("9.2 필드 이름 바꾸기", () => {
  test("리팩터링 전", () => {
    const { ProductionPlan } = example;

    const plan = new ProductionPlan();
    plan.applyAdjustment({ amount: 4, date: new Date() });
    plan.applyAdjustment({ amount: 2, date: new Date() });
    plan.applyAdjustment({ amount: 1, date: new Date() });
    expect(plan.production).toBe(7);
  });

  test("리팩터링 후", () => {
    const { ProductionPlan } = refactoring;

    const plan = new ProductionPlan();
    plan.applyAdjustment({ amount: 4, date: new Date() });
    plan.applyAdjustment({ amount: 2, date: new Date() });
    plan.applyAdjustment({ amount: 1, date: new Date() });
    expect(plan.production).toBe(7);
  });
});
