// 특이 케이스 추가하기: 변환 함수 이용하기
// 변환 단계를 추가해 레코드에도 적용할 수 있다.

const data = [
  {
    name: "애크미 보스턴",
    location: "Malden MA",
    customer: {
      name: "애크미 산업",
      billingPlan: "plan-451",
      paymentHistory: {
        weeksDelinquentInLastYear: 7,
      },
    },
  },
  {
    name: "물류창고 15",
    location: "Malden MA",
    customer: "미확인 고객",
  },
];

/********** Site 클래스를 사용하는 코드 예제 **********/
declare const registry;

export function use1() {
  const rawSite = data[0];
  // const rawSite = data[1]; // 미확인 고객

  // 변환 단계 추가
  const site = enrichSite(rawSite);

  const aCustomer = site.customer as any;
  const customerName = aCustomer.name;
}

export function use2(aCustomer: any) {
  const plan = aCustomer.billingPlan;
}

export function use3(aCustomer: any) {
  const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
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

export function isUnknown(aCustomer: any) {
  if (aCustomer === "미확인 고객") return true;
  else return aCustomer.isUnknown;
}

// JSON 데이터를 클론한 뒤 레코드를 변환한다.
export function enrichSite(aSite) {
  const result = structuredClone(aSite);
  const unknownCustoner = {
    isUnknown: true,
    name: "거주자",
    billingPlan: registry.billingPlans.basic,
    paymentHistory: {
      weeksDelinquentInLastYear: 0,
    },
  };

  if (isUnknown(result.custoner)) result.customer = unknownCustoner;
  else result.customer.isUnknown = false;
  return result;
}
