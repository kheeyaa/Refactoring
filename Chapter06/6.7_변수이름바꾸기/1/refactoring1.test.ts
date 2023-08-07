import { tpHd } from "./example1";
import { setTitle, title } from "./refactoring1";

test("변수 이름 바꾸기 테스트 1-1", () => {
  expect(tpHd).toBe("untitled");
});

test("변수 이름 바꾸기 테스트 1-2", () => {
  expect(title()).toBe("untitled");
  setTitle("new title");
  expect(title()).toBe("new title");
});
