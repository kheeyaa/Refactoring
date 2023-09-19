// 질의 함수와 변경 함수 분리하기

// 이름 목록을 훑어 악당을 찾는 함수.
// 악당을 찾으면 그 사람의 이름을 반환하고 경고를 울림.

export function use() {
  const people = ["석규", "효원", "소형", "조커"];
  const found = alertForMiscreant(people);
  return found;
}

export function alertForMiscreant(people) {
  for (const p of people) {
    if (p === "조커") {
      setOffAlarms();
      return "조커";
    }
    if (p === "사루만") {
      setOffAlarms();
      return "사루만";
    }
  }
  return "";
}

export function setOffAlarms() {
  console.log("경고!");
}
