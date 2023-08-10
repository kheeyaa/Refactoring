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

export function statement(invoice: Invoice, plays: Plays) {
  const data = createStatementData(invoice, plays);
  return getString(data);
}

export function createStatementData(invoice: Invoice, plays: Plays) {
  const data = {
    customer: invoice.customer,
    performances: invoice.performances.map((perf) => {
      const play = getPlay(perf);
      return {
        play,
        amount: getAmount(perf),
        ...perf,
      };
    }),
    totalAmount: getTotalAmount(),
    volumeCredits: getVolumeCredits(),
  };

  return data;

  function getTotalAmount() {
    let totalAmount = 0;

    for (let perf of invoice.performances) {
      totalAmount += getAmount(perf);
    }
    return totalAmount;
  }

  function getVolumeCredits() {
    let volumeCredits = 0;

    for (let perf of invoice.performances) {
      // 포인트를 적립한다.
      volumeCredits += Math.max(perf.audience - 30, 0);

      // 희극 관객 5명마다 추가 포인트를 제공한다.
      if ("comedy" === getPlay(perf).type) {
        volumeCredits += Math.floor(perf.audience / 5);
      }
    }
    return volumeCredits;
  }

  function getPlay(perf) {
    return plays[perf.playID];
  }

  function getAmount(perf) {
    let thisAmount = 0;
    switch (getPlay(perf).type) {
      case "tragedy":
        thisAmount = 40_000;

        if (perf.audience > 30) {
          thisAmount += 1_000 * (perf.audience - 30);
        }
        break;
      case "comedy":
        thisAmount = 30_000;

        if (perf.audience > 20) {
          thisAmount += 10_000 + 500 * (perf.audience - 20);
        }
        thisAmount += 300 * perf.audience;
        break;

      default:
        throw new Error(`알 수 없는 장르: ${getPlay(perf).type}`);
    }
    return thisAmount;
  }
}

export function getString({
  customer,
  performances,
  totalAmount,
  volumeCredits,
}: {
  customer: string;
  performances: {
    playID: string;
    audience: number;
    play: Play;
    amount: number;
  }[];
  totalAmount: number;
  volumeCredits: number;
}) {
  let result = `청구내역 (고객명: ${customer})\n`;

  result += performances
    .map(
      ({ amount, audience, play }) =>
        `${play.name}: ${format(amount)} ${audience}석\n`
    )
    .join("");

  result += `총액 ${format(totalAmount)}\n`;
  result += `적립 포인트 ${volumeCredits}점\n`;

  return result;
}

function format(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(amount / 100);
}
