import { tpHd } from "./example";
import { setTitle, title } from "./refactoring";

describe("6.7.1 변수 이름 바꾸기", () => {
  test("리팩토링 전", () => {
    expect(tpHd).toBe("untitled");
  });

  test("리팩토링 후", () => {
    expect(title()).toBe("untitled");
    setTitle("new title");
    expect(title()).toBe("new title");
  });
});
