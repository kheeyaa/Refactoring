import { cpyNm } from "./example2";
import { cpyNm as cpyNm2, companyName } from "./refactoring2";

test("변수 이름 바꾸기 테스트 2-1", () => {
  expect(cpyNm).toBe("카카오");
});

test("변수 이름 바꾸기 테스트 2-2", () => {
  expect(companyName).toBe("카카오");
  expect(cpyNm2).toBe("카카오");
});
