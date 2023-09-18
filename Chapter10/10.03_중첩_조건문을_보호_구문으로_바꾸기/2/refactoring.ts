// 중첩 조건문을 보호 구문으로 바꾸기: 조건 반대로 만들기

export function adjustedCapital(anInstrument) {
  if (
    anInstrument.capital <= 0 ||
    anInstrument.interestRate <= 0 ||
    anInstrument.duration <= 0
  )
    return 0;

  return (
    (anInstrument.income / anInstrument.duration) *
    anInstrument.adjustmentFactor
  );
}
