import * as example from "./example";
import * as refactoring from "./refactoring";

describe("6.8.1 매개변수 객체 만들기", () => {
  test("리팩토링 전", () => {
    const { readingsOutsideRange, station } = example;
    const operatingPlan = {
      temperatureFloor: 47,
      temperatureCeil: 51,
    };
    const results = readingsOutsideRange(
      station,
      operatingPlan.temperatureFloor,
      operatingPlan.temperatureCeil
    );

    expect(results).toEqual([
      { temp: 53, time: "2016-11-10 09:20" },
      { temp: 58, time: "2016-11-10 09:30" },
      { temp: 53, time: "2016-11-10 09:40" },
    ]);
  });

  test("리팩토링 후", () => {
    const { readingsOutsideRange, NumberRange, station } = refactoring;

    const operatingPlan = {
      temperatureFloor: 47,
      temperatureCeil: 51,
    };

    const range = new NumberRange(
      operatingPlan.temperatureFloor,
      operatingPlan.temperatureCeil
    );

    const results = readingsOutsideRange(station, range);

    expect(results).toEqual([
      { temp: 53, time: "2016-11-10 09:20" },
      { temp: 58, time: "2016-11-10 09:30" },
      { temp: 53, time: "2016-11-10 09:40" },
    ]);
  });
});
