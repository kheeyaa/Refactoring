import * as example from "./example";
import * as refactoring from "./refactoring";

describe("7.5 클래스 추출하기", () => {
  test("리팩터링 전", () => {
    const { Person } = example;

    const person = new Person({
      name: "martin",
      officeAreaCode: "02",
      officeNumber: "1234",
    });

    expect(person.telephoneNumber).toBe("(02) 1234");
  });

  test("리팩터링 후", () => {
    const { Person } = refactoring;

    const person = new Person({
      name: "martin",
      officeAreaCode: "02",
      officeNumber: "1234",
    });

    expect(person.telephoneNumber).toBe("(02) 1234");
  });
});
