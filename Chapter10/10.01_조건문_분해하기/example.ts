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

export function foo() {
  let charge = 0;
  if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd))
    charge = quantity * plan.summerRate;
  else charge = quantity * plan.regularRate + plan.regularServiceCharge;
}
