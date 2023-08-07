import { Province, sampleProvinceData } from "./example";

describe("province", () => {
  let asia;

  beforeEach(() => {
    asia = new Province(sampleProvinceData());
  });

  test("shortfall", () => {
    expect(asia.shortfall).toBe(5);
  });

  test("profit", function () {
    expect(asia.profit).toBe(230);
  });

  test("change production", function () {
    asia.producers[0].production = 20;

    expect(asia.shortfall).toBe(-6);
    expect(asia.profit).toBe(292);
  });

  it("zero demand", function () {
    asia.demand = 0;

    expect(asia.shortfall).toBe(-25);
    expect(asia.profit).toBe(0);
  });

  it("negative demand", function () {
    asia.demand = -1;

    expect(asia.shortfall).toBe(-26);
    // expect(asia.profit).toBe(0);
  });

  it("empty string demand", function () {
    asia.demand = "";

    expect(asia.shortfall).toBeNaN();
    expect(asia.profit).toBeNaN();
  });
});

describe("no producers", function () {
  // 생산자가 없는 경우
  let noProducers;
  beforeEach(function () {
    const data = {
      name: "No producers",
      producers: [],
      demand: 30,
      price: 20,
    };
    noProducers = new Province(data);
  });
  test("shortfall", function () {
    expect(noProducers.shortfall).toBe(30);
  });

  test("profit", function () {
    expect(noProducers.profit).toBe(0);
  });
});

describe("string for producers", function () {
  test("", function () {
    const data = {
      name: "String producers",
      producers: "",
      demand: 30,
      price: 20,
    } as any;
    const prov = new Province(data);
    expect(prov.shortfall).toBe(0);
  });
});
