import { cpyNm } from "./example";
import { cpyNm as cpyNm2, companyName } from "./refactoring";

describe("6.7.2 변수 이름 바꾸기", () => {
  test("리팩토링 전", () => {
    expect(cpyNm).toBe("카카오");
  });

  test("리팩토링 후", () => {
    expect(companyName).toBe("카카오");
    expect(cpyNm2).toBe("카카오");
  });
});
