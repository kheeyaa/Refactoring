// 제어 플래그를 탈출문으로 바꾸기

export function sendAlert() {
  console.log("사건 발생");
}

export function doSomething(people: string[]) {
  // 생략
  let found = false;
  for (const p of people) {
    if (!found) {
      if (p === "조커") {
        sendAlert();
        found = true;
      }
      if (p === "사루만") {
        sendAlert();
        found = true;
      }
    }
  }
  // 생략
}
