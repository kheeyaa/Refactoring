import * as example from "./example";
import * as refactoring from "./refactoring";

const voyage = {
  zone: "서인도",
  length: 10,
};
const history = [
  {
    zone: "동인도",
    profit: 5,
  },
  {
    zone: "서인도",
    profit: 15,
  },
  {
    zone: "중국",
    profit: -2,
  },
  {
    zone: "서아프리카",
    profit: 7,
  },
];

describe("10.4 조건부 로직을 다형성으로 바꾸기: 변형 동작을 다형성으로 표현하기", () => {
  test("리팩터링 전", () => {
    const { rating } = example;
    expect(rating(voyage, history)).toBe("B");
  });

  test("리팩터링 후", () => {
    const { rating } = refactoring;

    expect(rating(voyage, history)).toBe("B");
  });
});
