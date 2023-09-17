import * as example from "./example";
import * as refactoring from "./refactoring";

describe("9.2 필드 이름 바꾸기", () => {
  test("리팩터링 전", () => {
    const { organization } = example;

    expect(organization.name).toBe("애크미 구스베리");
    expect(organization.country).toBe("GB");
  });

  test("리팩터링 후", () => {
    const { organization } = refactoring;

    expect(organization.title).toBe("애크미 구스베리");
    expect(organization.country).toBe("GB");
  });
});
