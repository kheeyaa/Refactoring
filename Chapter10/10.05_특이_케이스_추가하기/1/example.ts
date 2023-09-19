// 특이 케이스 추가하기

/********** Site 클래스를 사용하는 코드 예제 **********/
// 미확인 고객을 처리하는 클라이언트가 여러개 있다.
// 대부분 똑같은 방식으로 처리한다.
// 고객 이름은 '거주자'를 사용하고, 기본 요금제(billingPlan)를 청구하고, 연체기간은 0주로 분류(weeksDelinquent)
declare const site;
declare const registry;
declare const newPlan;

export function use1() {
  const aCustomer = site.customer as any;
  let customerName;

  if (aCustomer === "미확인 고객") customerName = "거주자";
  else customerName = aCustomer.name;
}

export function use2(aCustomer: any) {
  const plan =
    aCustomer === "미확인 고객"
      ? registry.billingPlans.basic
      : aCustomer.billingPlan;
}

export function use3(aCustomer: any) {
  if (aCustomer !== "미확인 고객") aCustomer.billingPlan = newPlan;
}

export function use4(aCustomer: any) {
  const weeksDelinquent =
    aCustomer === "미확인 고객"
      ? 0
      : aCustomer.paymentHistory.weeksDelinquentInLastYear;
}

/********** Site 클래스 **********/
export class Site {
  private _customer: Customer;

  get customer() {
    return this._customer;
  }
}

type BillingPlan = any;
type PaymentHistory = any;

export class Customer {
  private _name: string;
  private _billingPlan: BillingPlan;
  private _paymentHistory: PaymentHistory;

  get name() {
    return this._name;
  }

  get billingPlan() {
    return this._billingPlan;
  }

  set billingPlan(arg) {
    this._billingPlan = arg;
  }

  get paymentHistory() {
    return this._paymentHistory;
  }
}
