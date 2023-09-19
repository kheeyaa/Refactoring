// 어서션 추가하기
// https://www.fronttigger.dev/2022/typescript/type-guard

import assert from "assert";

export class Customer {
  private _discountRate: number;

  applyDiscount(aNumber) {
    // discountRate는 항상 양수인가?
    if (!this.discountRate) return aNumber;
    assert(this.discountRate >= 0);
    return aNumber - this.discountRate * aNumber;
  }

  get discountRate() {
    return this._discountRate;
  }

  set discountRate(aNumber) {
    assert(null === aNumber || aNumber >= 0);
    this._discountRate = aNumber;
  }
}
