// 파생 변수를 질의 함수로 바꾸기
type Adjustment = {
  amount: number;
  date: Date;
};
export class ProductionPlan {
  private _adjustments: Adjustment[] = [];

  get production() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }

  applyAdjustment(anAdjustment: Adjustment) {
    this._adjustments.push(anAdjustment);
  }
}
