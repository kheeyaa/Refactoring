export class TrankingInfomation {
  private _shippingCompany: string;
  private _trackingNumber: number;
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
  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

export class Shipment {
  private _trackingInfomation: TrankingInfomation;
  private _shippingCompany: string;
  constructor(trackingInfomation) {
    this._trackingInfomation = trackingInfomation;
  }

  get trackingInfo() {
    return this._trackingInfomation.display;
  }

  get trackingInfomation() {
    return this._trackingInfomation;
  }

  set trackingInfomation(arg) {
    this._trackingInfomation = arg;
  }
}

export function use() {
  const aShipment = new Shipment(new TrankingInfomation("테스트 회사", 3));
  aShipment.trackingInfomation.shippingCompany = "업데이트 테스트 회사";
}
