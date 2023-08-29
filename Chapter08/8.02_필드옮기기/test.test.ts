import * as example from "./example";
import * as refactoring from "./refactoring";

describe("7.8 위임 숨기기", () => {
  test("리팩터링 전", () => {
    const { Person, Department } = example;

    const aPerson = new Person("홍길동");
    aPerson.department = new Department("A", new Person("김갑수"));
    const manager = aPerson.manager;

    expect(manager.name).toBe("김갑수");
  });

  test("리팩터링 후", () => {
    const { Person, Department } = refactoring;

    const aPerson = new Person("홍길동");
    aPerson.department = new Department("A", new Person("김갑수"));
    const manager = aPerson.department.manager;

    expect(manager.name).toBe("김갑수");
  });
});
