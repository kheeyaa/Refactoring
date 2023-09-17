// 조건식 통합하기: or 사용하기

export function disabilityAmount(anEmployee: {
  seniority: number;
  monthsDisabled: number;
  isPartTime: boolean;
}) {
  if (anEmployee.seniority < 2) return 0;
  if (anEmployee.monthsDisabled > 12) return 0;
  if (anEmployee.isPartTime) return 0;
  // 장애 수당 계산
}
