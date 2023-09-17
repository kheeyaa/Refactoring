// 파생 변수를 질의 함수로 바꾸기
type Adjustment = {
  amount: number;
  date: Date;
};
export class ProductionPlan {
  private _adjustments: Adjustment[] = [];
  private _production: number = 0;

  get production() {
    return this._production;
  }

  applyAdjustment(anAdjustment: Adjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
}
