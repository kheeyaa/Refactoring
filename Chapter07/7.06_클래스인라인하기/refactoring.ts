export class Shipment {
  private _shippingCompany: string;
  private _trackingNumber: string;

  constructor(shippingCompany, trackingNumber) {
    this._shippingCompany = shippingCompany;
    this._trackingNumber = trackingNumber;
  }

  get shippingCompany() {
    return this._shippingCompany;
  }
  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }
  get trackingNumber() {
    return this._trackingNumber;
  }
  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }
  get trackingInfo() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

export function use() {
  const aShipment = new Shipment("테스트 회사", 3);
  aShipment.shippingCompany = "업데이트 테스트 회사";
}
