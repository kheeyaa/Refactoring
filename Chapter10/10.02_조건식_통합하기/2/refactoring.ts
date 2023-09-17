// 조건식 통합하기: and 사용하기

export function disabilityAmount(anEmployee: {
  seniority: number;
  monthsDisabled: number;
  isPartTime: boolean;
  onVacation: boolean;
}) {
  if (isNotEligibleForDisability()) return 0;
  if (anEmployee.onVacation && anEmployee.seniority > 10) return 1;
  return 0.5;

  function isNotEligibleForDisability() {
    return (
      anEmployee.seniority < 2 ||
      anEmployee.monthsDisabled > 12 ||
      anEmployee.isPartTime
    );
  }
}
