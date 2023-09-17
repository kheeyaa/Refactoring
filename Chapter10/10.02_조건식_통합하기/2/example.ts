// 조건식 통합하기: or 사용하기

export function disabilityAmount(anEmployee: {
  seniority: number;
  monthsDisabled: number;
  isPartTime: boolean;
  onVacation: boolean;
}) {
  if (anEmployee.seniority < 2) return 0;
  if (anEmployee.monthsDisabled > 12) return 0;
  if (anEmployee.isPartTime) return 0;

  if (anEmployee.onVacation) if (anEmployee.seniority > 10) return 1;
  return 0.5;
}
