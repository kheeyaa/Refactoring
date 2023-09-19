import * as example from "./example";
import * as refactoring from "./refactoring";

describe("11.2 함수 매개변수화하기", () => {
  test("리팩터링 전", () => {
    const { tenPercentRaise, fivePercentRaise } = example;

    const aPerson = {
      name: "김철수",
      salary: 100,
    };
    tenPercentRaise(aPerson);
    expect(aPerson).toEqual({
      name: "김철수",
      salary: 110,
    });

    fivePercentRaise(aPerson);
    expect(aPerson).toEqual({
      name: "김철수",
      salary: 115,
    });
  });

  test("리팩터링 후", () => {
    const { raise } = refactoring;

    const aPerson = {
      name: "김철수",
      salary: 100,
    };
    raise(aPerson, 0.1);
    expect(aPerson).toEqual({
      name: "김철수",
      salary: 110,
    });

    raise(aPerson, 0.05);
    expect(aPerson).toEqual({
      name: "김철수",
      salary: 115,
    });
  });
});
