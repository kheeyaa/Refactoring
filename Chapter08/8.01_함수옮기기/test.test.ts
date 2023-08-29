import * as example from "./example";
import * as refactoring from "./refactoring";

describe("8.1.1 중첩 함수를 최상위로 옮기기", () => {
  const points = [
    {
      lat: 47.925,
      lon: -122.097,
    },
    {
      lat: 53.025,
      lon: -111.097,
    },
    {
      lat: 49.024,
      lon: -120.097,
    },
    {
      lat: 63.024,
      lon: -102.097,
    },
  ];
  test("리팩터링 전", () => {
    const { trackSummary } = example;

    const result = trackSummary(points);

    expect(result).toStrictEqual({
      distance: 2258.1666939900474,
      pace: 0.0002214185521957768,
      time: 30,
    });
  });

  test("리팩터링 후", () => {
    const { trackSummary } = refactoring;

    const result = trackSummary(points);

    expect(result).toStrictEqual({
      distance: 2258.1666939900474,
      pace: 0.0002214185521957768,
      time: 30,
    });
  });
});
