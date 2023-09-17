import * as example from "./example";
import * as refactoring from "./refactoring";

describe("9.2 필드 이름 바꾸기", () => {
  test("리팩터링 전", () => {
    const { Order } = example;

    const order1 = new Order({
      number: 3,
      customer: 1,
    });

    expect(order1.number).toBe(3);
  });

  test("리팩터링 후", () => {
    const { Order } = refactoring;

    const order = new Order({
      number: 3,
      customer: 1,
    });

    expect(order.number).toBe(3);
  });
});
