import * as example from "./example";
import * as refactoring from "./refactoring";

describe("6.11 단계 쪼개기", () => {
  test("리백터링 전", () => {
    const price = example.priceOrder(
      {
        basePrice: 100,
        discountThreshold: 10,
        discountRate: 0.1,
      },
      10,
      {
        discountThreshold: 10,
        discountedFee: 10,
        feePerCase: 20,
      }
    );
    expect(price).toBe(1100);
  });

  test("리백터링 후", () => {
    const price = refactoring.priceOrder(
      {
        basePrice: 100,
        discountThreshold: 10,
        discountRate: 0.1,
      },
      10,
      {
        discountThreshold: 10,
        discountedFee: 10,
        feePerCase: 20,
      }
    );
    expect(price).toBe(1100);
  });
});
