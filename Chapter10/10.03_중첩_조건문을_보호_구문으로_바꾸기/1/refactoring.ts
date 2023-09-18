// 중첩 조건문을 보호 구문으로 바꾸기

declare function someFinalComputation(): any;
declare const lorem: any;
declare const dolor: any;
declare const consectetur: any;
declare const adipiscing: any;
declare const sed: any;
declare const tempor: any;
declare const labore: any;
declare const dolore: any;
declare const magna: any;
declare const ut: any;
declare const minim: any;

export function payAmount(employee) {
  // 퇴사한 직원
  if (employee.isSeparated) return { amount: 0, reasonCode: "SEP" };
  // 은퇴한 직원
  if (employee.isRetired) return { amount: 0, reasonCode: "RET" };
  // 급여 계산 로직
  lorem.ipsum(dolor.sitAmet);
  consectetur(adipiscing).elit();
  sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
  ut.enim.ad(minim.veniam);
  return someFinalComputation();
}
