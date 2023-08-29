export class Customer {
  private _name: string;
  private _discountRate: number;

  constructor(name, discountRate) {
    this._name = name;
    this._discountRate = discountRate;
  }

  get discountRate() {
    return this._discountRate;
  }

  becomePreferred() {
    this._discountRate += 0.03;
    // 다른 멋진 일들
  }

  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this._discountRate));
  }
}

export class CustomerContract {
  private _startDate: Date;

  constructor(startDate) {
    this._startDate = startDate;
  }

  get startDate() {
    return this._startDate;
  }

  set startDate(arg) {
    this._startDate = arg;
  }
}
