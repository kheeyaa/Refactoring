import * as example from "./example";
import * as refactoring from "./refactoring";

type Bird = {
  name: "유럽 제비" | "아프리카 제비" | "노르웨이 파랑 앵무";
  type: "유럽 제비" | "아프리카 제비" | "노르웨이 파랑 앵무";
  numberOfCoconuts: number;
  voltage: number;
  isNailed: boolean;
};

const birds: Bird[] = [
  {
    name: "유럽 제비",
    type: "유럽 제비",
    numberOfCoconuts: 1,
    voltage: 1,
    isNailed: false,
  },
  {
    name: "아프리카 제비",
    type: "아프리카 제비",
    numberOfCoconuts: 2,
    voltage: 2,
    isNailed: true,
  },
  {
    name: "노르웨이 파랑 앵무",
    type: "노르웨이 파랑 앵무",
    numberOfCoconuts: 3,
    voltage: 3,
    isNailed: false,
  },
];
const expectation = new Map([
  ["유럽 제비", "보통이다"],
  ["아프리카 제비", "보통이다"],
  ["노르웨이 파랑 앵무", "예쁘다"],
]);

describe("10.2 조건부 로직을 다형성으로 바꾸기", () => {
  test("리팩터링 전", () => {
    const { plumages } = example;
    expect(plumages(birds)).toEqual(expectation);
  });

  test("리팩터링 후", () => {
    const { plumages } = refactoring;
    expect(plumages(birds)).toEqual(expectation);
  });
});
