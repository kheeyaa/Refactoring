import * as example from "./example";
import * as refactoring from "./refactoring";

describe("11.1 질의 함수와 변경 함수 분리하기", () => {
  test("리팩터링 전", () => {
    const { use } = example;
    const logSpy = jest.spyOn(global.console, "log");

    expect(use()).toBe("조커");
    expect(logSpy).toHaveBeenCalledWith("경고!");
  });

  test("리팩터링 후", () => {
    const { use } = refactoring;
    const logSpy = jest.spyOn(global.console, "log");

    expect(use()).toBe("조커");
    expect(logSpy).toHaveBeenCalledWith("경고!");
  });
});
