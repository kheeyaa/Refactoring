export class TrankingInfomation {
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
