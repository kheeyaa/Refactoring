// 예시: 다른 클래스로 옮기기

export class Account {
  private _daysOverdrawn: number;
  type: AccountType;
  constructor(daysOverdrawn: number, type?: AccountType) {
    this._daysOverdrawn = daysOverdrawn;
    this.type = type || new AccountType(false);
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) {
      result += this.overdraftCharge;
    }
    return result;
  }

  get overdraftCharge() {
    return this.type.overdraftCharge(this._daysOverdrawn);
  }
}

export class AccountType {
  isPremium: boolean;

  constructor(isPremium: boolean) {
    this.isPremium = isPremium;
  }

  overdraftCharge(daysOverdrawn: number) {
    if (this.isPremium) {
      const baseCharge = 10;
      if (daysOverdrawn <= 7) {
        return baseCharge;
      } else {
        return baseCharge + (daysOverdrawn - 7) * 0.85;
      }
    } else {
      return daysOverdrawn * 1.75;
    }
  }
}
