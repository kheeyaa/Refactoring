// 예시: 지역 변수의 값을 변경할 때
declare const Clock: any;
export function printOwing(invoice) {
  printBanner();

  // 🔥 함수 추출
  // 1. outstanding 변수 위치 이동
  // 4. 추출한 함수를 호출하는 문장으로 교체
  const outstanding = calculateOutstanding(invoice); // 🔥 지역 변수를 매개변수로 전달 (슬라이드

  recordDueDate(invoice);
  printDetails(invoice, outstanding);

  // 2. 추출할 부분을 새로운 함수로 복사
  // 3. 추출한 함수에서 사용할 변수를 매개변수로 전달 및 변경된 변수 반환
  // 5. 코드 스타일링 적용 (outstanding -> result, let -> const)
  function calculateOutstanding(invoice) {
    let result = 0;
    for (const o of invoice.orders) {
      result += o.amount;
    }
    return result;
  }

  function recordDueDate(invoice) {
    const today = Clock.today; // https://martinfowler.com/bliki/ClockWrapper.html
    invoice.dueDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 30
    );
  }

  function printBanner() {
    console.log("***********");
    console.log("**고객 채무**");
    console.log("***********");
  }

  function printDetails(invoice, outstanding) {
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
    console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
  }
}
