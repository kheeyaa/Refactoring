// 예시: 유효범위를 벗어나는 변수가 없을 때
declare const Clock: any;

export function printOwing(invoice) {
  let outstanding = 0;

  printBanner(); // 🔥 배너 출력 로직 함수 추출하기

  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  const today = Clock.today; // https://martinfowler.com/bliki/ClockWrapper.html
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  printDetails(); // 🔥 세부 사항 출력 로직 함수 추출하기

  function printBanner() {
    console.log("***********");
    console.log("**고객 채무**");
    console.log("***********");
  }

  function printDetails() {
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
    console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
  }
}
