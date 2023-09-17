import * as example from "./example";
import * as refactoring from "./refactoring";

describe("9.2 필드 이름 바꾸기", () => {
  test("리팩터링 전", () => {
    const { Person } = example;

    const person = new Person();
    person.officeAreaCode = "031";
    person.officeNumber = "1234-5678";

    expect(person.officeAreaCode).toBe("031");
    expect(person.officeNumber).toBe("1234-5678");
  });

  test("리팩터링 후", () => {
    const { Person } = refactoring;

    const person = new Person("031", "1234-5678");

    expect(person.officeAreaCode).toBe("031");
    expect(person.officeNumber).toBe("1234-5678");
  });
});
