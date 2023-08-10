import * as example from "./example";
import * as refactoring from "./refactoring";

describe("1장 예제", () => {
  const 기대값 = [
    "청구내역 (고객명: BigCo)",
    "Hamlet: $650.00 55석",
    "As YOu Like it: $580.00 35석",
    "Othello: $500.00 40석",
    "총액 $1,730.00",
    "적립 포인트 47점",
  ];

  const invocies = [
    {
      customer: "BigCo",
      performances: [
        { playID: "hamlet", audience: 55 },
        { playID: "as-like", audience: 35 },
        { playID: "othello", audience: 40 },
      ],
    },
  ];

  const plays = {
    hamlet: { name: "Hamlet", type: "tragedy" },
    "as-like": { name: "As YOu Like it", type: "comedy" },
    othello: { name: "Othello", type: "tragedy" },
  };

  test("리백터링 전", () => {
    const statememt = example.statement(invocies[0], plays);
    const statememts = statememt.split("\n").filter((s) => s.length > 0);

    statememts.forEach((s, i) => {
      expect(기대값[i]).toBe(s);
    });
  });

  test("리백터링 후", () => {
    const statememt = refactoring.statement(invocies[0], plays);
    const statememts = statememt.split("\n").filter((s) => s.length > 0);

    statememts.forEach((s, i) => {
      expect(기대값[i]).toBe(s);
    });
  });
});
