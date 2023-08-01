type ProvinceData = {
  name: string;
  producers: {
    name: string;
    cost: number;
    production: number;
  }[];
  demand: number;
  price: number;
};

export class Province {
  private _name: any;
  private _producers: any[];
  private _totalProduction: number;
  private _demand: number;
  private _price: number;

  constructor(doc: ProvinceData) {
    this._name = doc.name;
    this._producers = [];
    this._totalProduction = 0;
    this._demand = doc.demand;
    this._price = doc.price;
    doc.producers.forEach((d) => this.addProducer(new Producer(this, d)));
  }

  addProducer(arg) {
    this._producers.push(arg);
    this._totalProduction += arg.production;
  }

  get name() {
    return this._name;
  }
  get producers() {
    return this._producers.slice();
  }
  get totalProduction() {
    return this._totalProduction;
  }
  set totalProduction(arg) {
    this._totalProduction = arg;
  }
  get demand() {
    return this._demand;
  }
  set demand(arg) {
    this._demand = parseInt(String(arg));
  }
  get price() {
    return this._price;
  }
  set price(arg) {
    this._price = parseInt(String(arg));
  }
  // 생산 부족분 계산
  get shortfall() {
    return this.demand - this.totalProduction;
  }
  // 수익 계산
  get profit() {
    return this.demandValue - this.demandCost;
  }
  get demandValue() {
    return this.satisfiedDemand * this.price;
  }
  get satisfiedDemand() {
    return Math.min(this.demand, this.totalProduction);
  }
  get demandCost() {
    let remainingDemand = this.demand;
    let result = 0;
    this.producers
      .sort((a, b) => a.cost - b.cost)
      .forEach((p) => {
        const contribution = Math.min(remainingDemand, p.production);
        remainingDemand -= contribution;
        result += contribution * p.cost;
      });
    return result;
  }
}

// 단순한 데이터 저장소
export class Producer {
  private _province: any;
  private _name: any;
  private _cost: number;
  private _production: number;

  constructor(aProvince, data) {
    this._province = aProvince;
    this._name = data.name;
    this._cost = data.cost;
    this._production = data.production || 0;
  }
  get name() {
    return this._name;
  }
  get cost() {
    return this._cost;
  }
  set cost(arg) {
    this._cost = parseInt(String(arg));
  }
  get production() {
    return this._production;
  }
  // 계산 결과를 지역 데이터(_province)에 반영
  set production(amountStr) {
    const amount = parseInt(String(amountStr));
    const newProduction = Number.isNaN(amount) ? 0 : amount;

    this._province.totalProduction += newProduction - this.production;
    this._production = newProduction;
  }
}

export function sampleProvinceData() {
  return {
    name: "Asia",
    producers: [
      { name: "Byzantium", cost: 10, production: 9 },
      { name: "Attalia", cost: 12, production: 10 },
      { name: "Sinope", cost: 10, production: 6 },
    ],
    demand: 30,
    price: 20,
  };
}
