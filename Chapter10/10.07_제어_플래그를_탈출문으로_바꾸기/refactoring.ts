// 제어 플래그를 탈출문으로 바꾸기

export function sendAlert() {
  console.log("사건 발생");
}

export function checkForMiscreants2(people: string[]) {
  // 더 리팩토링 하자면 다음과 같다.
  if (people.some((p) => ["조커", "사루만"].includes(p))) sendAlert();
}

export function checkForMiscreants(people: string[]) {
  for (const p of people) {
    if (p === "조커") {
      sendAlert();
      return;
    }
    if (p === "사루만") {
      sendAlert();
      return;
    }
  }
}

export function doSomething(people: string[]) {
  // 생략
  checkForMiscreants(people);
  // 생략
}
