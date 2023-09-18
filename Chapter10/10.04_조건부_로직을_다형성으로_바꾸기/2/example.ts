// 조건부 로직을 다형성으로 바꾸기: 변형 동작을 다형성으로 표현하기

type Voyage = {
  zone: string;
  length: number;
};

type History = {
  zone: string;
  profit: number;
};

export function rating(voyage: Voyage, history: History[]) {
  // 투자 등급
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage); // 항해 경로 위험요소
  const chr = captainHistoryRisk(voyage, history); // 선장의 항해 이력 위험요소
  if (vpf * 3 > vr + chr * 2) return "A";
  return "B";
}

export function voyageRisk(voyage: Voyage) {
  let result = 1;
  if (voyage.length > 4) result += 2;
  if (voyage.length > 8) result += voyage.length - 8;
  if (["중국", "동인도"].includes(voyage.zone)) result += 4;
  return Math.max(result, 0);
}

export function captainHistoryRisk(voyage: Voyage, history: History[]) {
  let result = 1;
  if (history.length < 5) result += 4;
  result += history.filter((v) => v.profit < 0).length;
  if (voyage.zone === "중국" && hasChina(history)) result -= 2;
  return Math.max(result, 0);
}

export function hasChina(history: History[]) {
  return history.some((v) => "중국" === v.zone);
}

export function voyageProfitFactor(voyage: Voyage, history: History[]) {
  let result = 2;
  if (voyage.zone === "중국") result += 1;
  if (voyage.zone === "동인도") result += 1;
  if (voyage.zone === "중국" && hasChina(history)) {
    result += 3;
    if (history.length > 10) result += 1;
    if (voyage.length > 12) result += 1;
    if (voyage.length > 18) result -= 1;
  } else {
    if (history.length > 8) result += 1;
    if (voyage.length > 14) result -= 1;
  }
  return result;
}
