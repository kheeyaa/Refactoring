// 함수 매개변수화하기

export function baseCharge(usage: number) {
  if (usage < 0) return usd(0);
  const amount =
    bottomBand(usage) * 0.03 + middleBand(usage) * 0.05 + topBand(usage) * 0.07;
  return usd(amount);
}

export function bottomBand(usage: number) {
  return Math.min(usage, 100);
}

export function middleBand(usage: number) {
  return usage > 100 ? Math.min(usage, 200) - 100 : 0;
}

export function topBand(usage: number) {
  return usage > 200 ? usage - 200 : 0;
}

export function usd(amount: number) {
  return amount * 11;
}
