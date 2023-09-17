// 파생 변수를 질의 함수로 바꾸기: 소스가 둘 이상일 때
type Adjustment = {
  amount: number;
  date: Date;
};
export class ProductionPlan {
  private _adjustments: Adjustment[] = [];
  private _initialProduction: number = 0;
  private _productionAccumulator: number = 0;

  constructor(production = 0) {
    this._initialProduction = production;
    this._productionAccumulator = 0;
  }

  get production() {
    return this._initialProduction + this._productionAccumulator;
  }

  applyAdjustment(anAdjustment: Adjustment) {
    this._adjustments.push(anAdjustment);
    this._productionAccumulator += anAdjustment.amount;
  }
}
