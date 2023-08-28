import * as example from "./example";
import * as refactoring from "./refactoring";

describe("7.6 클래스 인라인하기", () => {
  test("리팩터링 전", () => {
    const { Shipment, TrankingInfomation } = example;
    const aShipment = new Shipment(new TrankingInfomation("테스트 회사", 3));
    aShipment.trackingInfomation.shippingCompany = "업데이트 테스트 회사";

    expect(aShipment.trackingInfomation.shippingCompany).toBe(
      "업데이트 테스트 회사"
    );
  });

  test("리팩터링 후", () => {
    const { Shipment } = refactoring;
    const aShipment = new Shipment("테스트 회사", 3);
    aShipment.shippingCompany = "업데이트 테스트 회사";

    expect(aShipment.shippingCompany).toBe("업데이트 테스트 회사");
  });
});
