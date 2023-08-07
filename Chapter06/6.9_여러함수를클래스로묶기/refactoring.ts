export const reading = {
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017,
};

declare function acquireReading(): {
  customer: string;
  quantity: number;
  month: number;
  year: number;
};
declare function baseRate(month: number, year: number): number;
declare function taxThreshold(year: number): number;

class Reading {
  private _customer: string;
  private _quantity: number;
  private _month: number;
  private _year: number;
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }

  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }

  get taxableCharge() {
    return Math.max(0, this.baseCharge - taxThreshold(this.year));
  }

  get customer() {
    return this._customer;
  }

  get quantity() {
    return this._quantity;
  }

  get month() {
    return this._month;
  }

  get year() {
    return this._year;
  }
}

{
  // 클라이언트 1
  const rawReading = acquireReading();
  const aReading = new Reading(rawReading);
  const basicChargeAmount = aReading.baseCharge;
}
{
  // 클라이언트 2
  const rawReading = acquireReading();
  const aReading = new Reading(rawReading);
  const taxableCharge = aReading.taxableCharge;
}
{
  // 클라이언트 3
  const rawReading = acquireReading();
  const aReading = new Reading(rawReading);
  const basicChargeAmount = aReading.baseCharge;
}
