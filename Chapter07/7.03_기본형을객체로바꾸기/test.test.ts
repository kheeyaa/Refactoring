import * as example from "./example";
import * as refactoring from "./refactoring";

describe("7.3.1 기본형을 객체로 바꾸기", () => {
  test("리팩터링 전", () => {
    const { Order } = example;

    const order = [
      new Order({ priority: "high" }),
      new Order({ priority: "rush" }),
    ];

    const highPriorityCount = order.filter(
      (o) => "high" === o.priority || "rush" === o.priority
    ).length;

    expect(highPriorityCount).toBe(2);
  });

  test("리팩터링 후", () => {
    const { Order, Priority } = refactoring;

    const order = [new Order("high"), new Order("rush")];

    const highPriorityCount = order.filter((o) =>
      o.priority.higherThan(new Priority("normal"))
    ).length;

    expect(highPriorityCount).toBe(2);
  });
});
