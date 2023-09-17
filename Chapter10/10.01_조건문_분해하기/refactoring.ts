// 조건문 분해하기

declare const aDate: {
  isBefore(arg0: Date): boolean;
  isAfter(arg0: Date): boolean;
};
declare const quantity: number;
declare const plan: {
  summerStart: Date;
  summerEnd: Date;
  summerRate: number;
  regularRate: number;
  regularServiceCharge: number;
};
let charge: number;

export function foo() {
  charge = summer() ? summerCharge() : regularCharge();

  function summer() {
    return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
  }

  function summerCharge() {
    return quantity * plan.summerRate;
  }

  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }
}
