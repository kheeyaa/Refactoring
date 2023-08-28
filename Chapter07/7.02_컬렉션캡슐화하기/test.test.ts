import * as example from "./example";
import * as refactoring from "./refactoring";

describe("7.2.1 컬렉션 캡슐화하기", () => {
  test("리팩터링 전", () => {
    const { Person, Course } = example;
    const aPerson = new Person("kim");

    for (const name of ["수학", "과학", "영어"]) {
      aPerson.courses.push(new Course(name, true));
    }

    const numAdvancedCourses = aPerson.courses.filter(
      (c) => c.isAdvanced
    ).length;

    expect(numAdvancedCourses).toBe(3);
  });

  test("리팩터링 후", () => {
    const { Person, Course } = refactoring;
    const aPerson = new Person("kim");

    for (const name of ["수학", "과학", "영어"]) {
      aPerson.addCourse(new Course(name, true));
    }

    const numAdvancedCourses = aPerson.courses.filter(
      (c) => c.isAdvanced
    ).length;

    expect(numAdvancedCourses).toBe(3);
  });
});
