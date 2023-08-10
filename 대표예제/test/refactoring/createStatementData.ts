export type Invoice = {
  customer: string;
  performances: Performance[];
};

export type Performance = {
  playID: string;
  audience: number;
};

export type Play = {
  name: string;
  type: string;
};

export type Plays = {
  [key: string]: Play;
};

class PerformanceCalculator {
  performance: any;
  play: any;
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  // 🔥 다형성을 사용해서 this.play 타입에 따라 조건부로 나눠진 계산 로직을 정리함
  // get amount() {
  //   throw new Error("서브클래스에서 처리");
  // }

  // 🔥 다형성을 사용해서 this.play 타입에 따라 조건부로 나눠진 계산 로직을 정리함
  get volumeCredits() {
    return Math.max(this.performance.audience - 30, 0);
  }
}

class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40000;
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30);
    }
    return result;
  }
}

class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 30000;
    if (this.performance.audience > 20) {
      result += 10000 + 500 * (this.performance.audience - 20);
    }
    result += 300 * this.performance.audience;
    return result;
  }

  get volumeCredits() {
    return super.volumeCredits + Math.floor(this.performance.audience / 5);
  }
}

function createPerformanceCalculator(aPerformance, aPlay) {
  switch (aPlay.type) {
    case "tragedy":
      return new TragedyCalculator(aPerformance, aPlay);
    case "comedy":
      return new ComedyCalculator(aPerformance, aPlay);
    default:
      throw new Error(`알 수 없는 장르: ${aPlay.type}`);
  }
}

export default function createStatementData(invoice, plays) {
  const result: {
    customer: string;
    performances: Performance[];
    totalAmount: number;
    totalVolumeCredits: number;
  } = {} as any;
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);
  return result;

  function enrichPerformance(aPerformance: Performance) {
    const calculator = createPerformanceCalculator(
      aPerformance,
      playFor(aPerformance)
    );
    const result: Performance & {
      play: Play;
      amount: number;
      volumeCredits: number;
    } = Object.assign({}, aPerformance) as any;
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
  }

  function playFor(aPerformance: Performance) {
    return plays[aPerformance.playID];
  }

  function totalAmount(data: any) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumeCredits(data: any) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }
}
