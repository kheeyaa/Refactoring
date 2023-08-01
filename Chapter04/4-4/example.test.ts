import { Province, sampleProvinceData } from "./example";

describe("province", () => {
  // 아래처럼 작성하면 '테스트끼리 상호작용하게 하는 공유 픽스처'를 생성하는 원인이 됨
  // const asia = new Province(sampleProvinceData());
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
});
