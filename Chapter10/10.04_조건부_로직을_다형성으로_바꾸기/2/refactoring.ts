// 조건부 로직을 다형성으로 바꾸기: 변형 동작을 다형성으로 표현하기

// 중국까지 항해해본 선장이 중국을 경유해 항해할 때를 다루는 조건부 로직을 다형성으로 표헌
// 이 특수 상황을 검사하는 로직이 반복되어 기본 동작을 이해하는데 방해가 되고 있음.
// 이런 경우에는 특수 상황을 다루는 로직을 다형성으로 표현하는 것이 좋음.

type Voyage = {
  zone: string;
  length: number;
};

type History = {
  zone: string;
  profit: number;
};

export function rating(voyage: Voyage, history: History[]) {
  return createRating(voyage, history).value;
}

export function createRating(voyage: Voyage, history: History[]) {
  if (voyage.zone === "중국" && history.some((v) => "중국" === v.zone)) {
    return new ExperiencedChinaRating(voyage, history);
  }
  return new Rating(voyage, history);
}

export class Rating {
  voyage: Voyage;
  history: History[];

  constructor(voyage, history) {
    this.voyage = voyage;
    this.history = history;
  }

  get value() {
    const vpf = this.voyageProfitFactor;
    const vr = this.voyageRisk; // 항해 경로 위험요소
    const chr = this.captainHistoryRisk; // 선장의 항해 이력 위험요소
    if (vpf * 3 > vr + chr * 2) return "A";
    return "B";
  }

  get voyageRisk() {
    let result = 1;
    if (this.voyage.length > 4) result += 2;
    if (this.voyage.length > 8) result += this.voyage.length - 8;
    if (["중국", "동인도"].includes(this.voyage.zone)) result += 4;
    return Math.max(result, 0);
  }

  get captainHistoryRisk() {
    let result = 1;
    if (this.history.length < 5) result += 4;
    result += this.history.filter((v) => v.profit < 0).length;
    return Math.max(result, 0);
  }

  get voyageProfitFactor() {
    let result = 2;
    if (this.voyage.zone === "중국") result += 1;
    if (this.voyage.zone === "동인도") result += 1;
    result += this.voyageLengthFactor;
    result += this.historyLengthFactor;
    return result;
  }

  get voyageLengthFactor(): number {
    return this.voyage.length > 14 ? -1 : 0;
  }

  get historyLengthFactor() {
    return this.history.length > 8 ? 1 : 0;
  }

  get hasChinaHistory() {
    return this.history.some((v) => "중국" === v.zone);
  }
}

export class ExperiencedChinaRating extends Rating {
  get captainHistoryRisk() {
    const result = super.captainHistoryRisk - 2;
    return Math.max(result, 0);
  }

  get voyageProfitFactor() {
    return super.voyageProfitFactor + 3;
  }

  get voyageLengthFactor() {
    let result = 0;
    if (this.voyage.length > 12) result += 1;
    if (this.voyage.length > 18) result -= 1;
    return result;
  }

  get historyLengthFactor() {
    return this.history.length > 10 ? 1 : 0;
  }
}
