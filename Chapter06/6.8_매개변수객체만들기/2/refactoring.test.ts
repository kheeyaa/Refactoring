import * as example from "./example";
import * as refactoring from "./refactoring";

test("매개변수객체만들기 1-1", () => {
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

test("매개변수객체만들기 1-2", () => {
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
