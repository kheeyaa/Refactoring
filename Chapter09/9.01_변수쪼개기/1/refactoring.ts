// 변수 쪼개기
// acc 변수에 값이 두 번 대입됨. 즉 역할이 두 개임
export function distanceTravelled(
  scenario: {
    primaryForce: number;
    mass: number;
    delay: number;
    secondaryForce: number;
  },
  time: number
) {
  let result;

  const primaryAcceleration = scenario.primaryForce / scenario.mass; // 가속도 a = F / m
  const primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime; // 전파된 거리
  const secondaryTime = time - scenario.delay;

  if (secondaryTime > 0) {
    // 두 번째 힘을 반영해 다시 계산
    const primaryVelocity = primaryAcceleration * scenario.delay;
    const secondaryAcceleration =
      (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
  }
  return result;
}
