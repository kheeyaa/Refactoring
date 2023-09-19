import * as example from "./example";
import * as refactoring from "./refactoring";

describe("11.1 질의 함수와 변경 함수 분리하기", () => {
  test("리팩터링 전", () => {
    const { use } = example;
    const logSpy = jest.spyOn(global.console, "log");
    use();
    expect(logSpy).toHaveBeenCalledWith("방 온도가 지정 범위를 벗어났습니다.");
  });

  test("리팩터링 후", () => {
    const { use } = refactoring;
    const logSpy = jest.spyOn(global.console, "log");
    use();
    expect(logSpy).toHaveBeenCalledWith("방 온도가 지정 범위를 벗어났습니다.");
  });
});
