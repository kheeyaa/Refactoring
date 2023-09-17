import * as example from "./example";
import * as refactoring from "./refactoring";

describe("9.1 변수 쪼개기", () => {
  test("리팩터링 전", () => {
    const { distanceTravelled } = example;

    expect(
      distanceTravelled(
        {
          primaryForce: 1,
          mass: 2,
          delay: 3,
          secondaryForce: 4,
        },
        10
      )
    ).toBe(74);
  });

  test("리팩터링 후", () => {
    const { distanceTravelled } = refactoring;

    expect(
      distanceTravelled(
        {
          primaryForce: 1,
          mass: 2,
          delay: 3,
          secondaryForce: 4,
        },
        10
      )
    ).toBe(74);
  });
});
