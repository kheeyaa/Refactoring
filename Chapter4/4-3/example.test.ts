import { Province, sampleProvinceData } from "./example";

describe("province", () => {
  test("shortfall", () => {
    // 1. 픽스처 설정
    const asia = new Province(sampleProvinceData());

    // 2. 검증
    expect(asia.shortfall).toBe(5);
  });
});
