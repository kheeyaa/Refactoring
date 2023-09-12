import * as example from "./example";
import * as refactoring from "./refactoring";

const expectation1 =
  "<p>홍길동</p><p>제목: 우리 동네의 무엇인가</p><p>날짜: Wed Jul 01 2020</p><p>위치: 우리 동네</p>";
const expectation2 =
  "<div><p>제목: 허니 콤보</p><p>날짜: Wed Dec 28 2022</p><p>위치: 강남역</p></div><div><p>제목: 마라 엽떡</p><p>날짜: Tue Sep 12 2023</p><p>위치: 판교역</p></div>";

class OutStream {
  stream: string = "";

  write(text: string) {
    this.stream += text;
  }
}

describe("8.4 문장을 호출한 곳으로 옮기기", () => {
  test("리팩터링 전", () => {
    const { renderPerson, listRecentPhotos } = example;

    const outStream1 = new OutStream();
    renderPerson(outStream1, {
      name: "홍길동",
      photo: {
        title: "우리 동네의 무엇인가",
        location: "우리 동네",
        date: new Date("2020-07-01"),
      },
    });
    expect(outStream1.stream).toBe(expectation1);

    const outStream2 = new OutStream();
    listRecentPhotos(outStream2, [
      {
        title: "허니 콤보",
        location: "강남역",
        date: new Date("2022-12-28"),
      },
      {
        title: "마라 엽떡",
        location: "판교역",
        date: new Date("2023-09-12"),
      },
    ]);
    expect(outStream2.stream).toBe(expectation2);
  });

  test("리팩터링 후", () => {
    const { renderPerson, listRecentPhotos } = refactoring;

    const outStream1 = new OutStream();
    renderPerson(outStream1, {
      name: "홍길동",
      photo: {
        title: "우리 동네의 무엇인가",
        location: "우리 동네",
        date: new Date("2020-07-01"),
      },
    });
    expect(outStream1.stream).toBe(expectation1);

    const outStream2 = new OutStream();
    listRecentPhotos(outStream2, [
      {
        title: "허니 콤보",
        location: "강남역",
        date: new Date("2022-12-28"),
      },
      {
        title: "마라 엽떡",
        location: "판교역",
        date: new Date("2023-09-12"),
      },
    ]);
    expect(outStream2.stream).toBe(expectation2);
  });
});
