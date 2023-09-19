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
  const customerName = aCustomer.name;
}

export function use2(aCustomer: any) {
  const plan = aCustomer.billingPlan;
}

export function use3(aCustomer: any) {
  aCustomer.billingPlan = newPlan;
}

export function use4(aCustomer: any) {
  const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
}

/********** Site 클래스 **********/
export class Site {
  private _customer: Customer | string;

  get customer() {
    return this._customer === "미확인 고객"
      ? new UnknownCustomer()
      : this._customer;
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

  get isUnknown() {
    return false;
  }
}

/********** 특이 케이스 객체로 관리 **********/
// 고객 정보를 수정하는 경우를 위해 메서드를 정의할 수 있는 클래스를 사용한다.

export function isUnknown(arg) {
  if (!(arg instanceof Customer || arg instanceof UnknownCustomer))
    throw new Error(`잘못된 값과 비교: <${arg}>`);
  return arg.isUnknown;
}

export class UnknownCustomer {
  get isUnknown() {
    return true;
  }

  get name() {
    return "거주자";
  }

  get billingPlan() {
    return registry.billingPlans.basic;
  }

  set billingPlan(arg) {
    // 아무것도 하지 않는다.
  }

  get paymentHistory() {
    return new NullPaymentHistory();
  }
}

export class NullPaymentHistory {
  get weeksDelinquentInLastYear() {
    return 0;
  }
}
