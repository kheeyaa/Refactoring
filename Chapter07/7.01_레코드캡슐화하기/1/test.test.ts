import * as example from "./example";
import * as refactoring from "./refactoring";

describe("7.1.1 간단한 레코드 캡슐화하기", () => {
  test("리팩터링 전", () => {
    expect(example.organization.name).toBe("에크미 구스베리");
    example.organization.name = "newName";
    expect(example.organization.name).toBe("newName");
  });

  test("리팩터링 후", () => {
    expect(refactoring.getOrganization().name).toBe("에크미 구스베리");
    refactoring.getOrganization().name = "newName";
    expect(refactoring.getOrganization().name).toBe("newName");
  });
});
