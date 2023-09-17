// 조건식 통합하기: or 사용하기

export function disabilityAmount(anEmployee: {
  seniority: number;
  monthsDisabled: number;
  isPartTime: boolean;
}) {
  if (isNotEligibleForDisability()) return 0;
  // 장애 수당 계산

  function isNotEligibleForDisability() {
    return (
      anEmployee.seniority < 2 ||
      anEmployee.monthsDisabled > 12 ||
      anEmployee.isPartTime
    );
  }
}
