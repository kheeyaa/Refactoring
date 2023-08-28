import * as example from "./example";
import * as refactoring from "./refactoring";

describe("7.4 임시 변수를 질의 함수로 바꾸기", () => {
  test("리팩터링 전", () => {
    const { Order } = example;

    const order = new Order(3, { name: "apple", price: 1000 });

    expect(order.price).toBe(2850);
  });

  test("리팩터링 후", () => {
    const { Order } = refactoring;

    const order = new Order(3, { name: "apple", price: 1000 });

    expect(order.price).toBe(2850);
  });
});
