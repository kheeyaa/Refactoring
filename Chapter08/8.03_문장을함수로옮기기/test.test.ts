import * as example from "./example";
import * as refactoring from "./refactoring";

const expectation = `<p>홍길동</p>
<p>제목: 우리 동네의 무엇인가</p>
<p>위치: 우리 동네</p>
<p>날짜: Wed Jul 01 2020</p>`;

describe("8.3 문장을 함수로 옮기기", () => {
  test("리팩터링 전", () => {
    const { renderPerson } = example;

    const result = renderPerson(
      {},
      {
        name: "홍길동",
        photo: {
          title: "우리 동네의 무엇인가",
          location: "우리 동네",
          date: new Date("2020-07-01"),
        },
      }
    );

    expect(result).toBe(expectation);
  });

  test("리팩터링 후", () => {
    const { renderPerson } = refactoring;

    const result = renderPerson(
      {},
      {
        name: "홍길동",
        photo: {
          title: "우리 동네의 무엇인가",
          location: "우리 동네",
          date: new Date("2020-07-01"),
        },
      }
    );

    expect(result).toBe(expectation);
  });
});
