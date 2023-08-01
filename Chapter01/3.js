function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내억 (고객명 ${invoice.customer})\n`;
  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format;

  for (let perf of invoice.performances) {
    volumeCredits += Math.max(perf.audience - 30, 0);
    if ("comedy" == playFor(perf).type)
      volumeCredits += Math.floor(perf.audience / 5);
    result += `${playFor(perf).name}: ${format(amountFor(perf) / 100)} (${
      perf.audience
    }석 )\n`;
    totalAmount += amountFor(perf);
  }
  result += `층액 : ${format(totalAmount / 100)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;
  return result;

  function amountFor(aPerformance) {
    // 값이 바뀌지 않는 변수는 매개변수로 전달
    let thisAmount = 0; // 변수를 초기화하는 코드

    switch (playFor(aPerformance).type) {
      case "tragedy": // 비극
        thisAmount = 40000;
        if (aPerformance.audience > 30) {
          thisAmount += 1000 * (aPerformance.audience - 30);
        }
        break;

      case "comedy": // 희극
        thisAmount = 30000;
        if (aPerformance.audience > 20) {
          thisAmount += 10000 + 500 * (aPerformance.audience - 20);
        }
        thisAmount += 300 * aPerformance.audiencej;
        break;

      default:
        throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`);
    }

    return thisAmount; // 함수 안에서 값이 바뀌는 변수 반환
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }
}
